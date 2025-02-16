import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blog/posts'
import { generateBlogMetadata } from '@/lib/blog/metadata'
import { generatePostStructuredData } from '@/lib/blog/types'
import BlogPost from '@/components/BlogPost'
import Script from 'next/script'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  if (!params?.slug) {
    return generateBlogMetadata()
  }

  try {
    const post = await getPostBySlug(params.slug)
    if (!post) {
      return generateBlogMetadata()
    }
    return generateBlogMetadata(post.title, post.excerpt, post.featuredImage)
  } catch (error) {
    console.error('Error generating metadata:', error)
    return generateBlogMetadata()
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!params?.slug) {
    notFound()
  }

  try {
    const post = await getPostBySlug(params.slug)
    if (!post) {
      notFound()
    }

    const structuredData = generatePostStructuredData(post)

    return (
      <>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
          <BlogPost post={post} />
        </main>
      </>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}

