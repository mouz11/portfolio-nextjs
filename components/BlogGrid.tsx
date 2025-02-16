'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import BlogCard from './BlogCard'
import { Post } from "@/lib/blog/types"
import { Button } from '@/components/ui/button'

interface BlogGridProps {
  size?: number
  featured?: boolean
  searchTerm?: string
  className?: string
  showLoadMore?: boolean
}

export default function BlogGrid({
  size = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE) || 6,
  featured = false,
  searchTerm = "",
  className = "",
  showLoadMore = true
}: BlogGridProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const lastFetchedPage = useRef<number | null>(null)

  // Memoize the filtered posts
  const filteredPosts = useMemo(() => {
    if (featured && posts.length > 0) {
      return posts.slice(1)
    }
    return posts
  }, [posts, featured])

  const fetchMorePosts = async (reset = false) => {
    if (!reset && (pageNumber === lastFetchedPage.current || isLoading)) return

    setIsLoading(true)
    lastFetchedPage.current = pageNumber

    try {
      const params = new URLSearchParams({
        page: pageNumber.toString(),
        size: size.toString(),
        search: searchTerm.trim(),
      })

      const res = await fetch(`/api/blog-posts?${params}`, {
        cache: 'no-store',
        next: { revalidate: 0 }
      })
      
      if (!res.ok) throw new Error("Failed to fetch posts")
      const newPosts = await res.json()
      
      setPosts((prev) => (reset ? newPosts : [...prev, ...newPosts]))
      setHasMore(newPosts.length === size)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setPageNumber(1)
    fetchMorePosts(true)
  }, [searchTerm])

  useEffect(() => {
    fetchMorePosts()
  }, [pageNumber])

  if (isLoading && posts.length === 0) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Loading posts...</p>
      </div>
    )
  }

  if (!isLoading && posts.length === 0) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">No posts found.</p>
        {searchTerm && (
          <Button 
            onClick={() => window.location.href = '/blog'} 
            variant="outline" 
            className="mt-4"
          >
            View All Posts
          </Button>
        )}
      </div>
    )
  }

  const loadMore = () => {
    if (!isLoading) {
      setPageNumber((prev) => prev + 1)
    }
  }

  const renderFeaturedPost = () => {
    if (featured && posts.length > 0) {
      return (
        <div className="mb-12">
          <BlogCard post={posts[0]} featured />
        </div>
      )
    }
    return null
  }

  return (
    <div className={className}>
      {renderFeaturedPost()}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {hasMore && showLoadMore && (
        <div className="mt-8 text-center">
          <Button 
            onClick={loadMore} 
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  )
} 