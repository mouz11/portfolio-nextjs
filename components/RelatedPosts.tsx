import BlogCard from './BlogCard'

// Mock data for related posts
const relatedPosts = [
  {
    slug: 'advanced-nextjs-techniques',
    title: 'Advanced Next.js Techniques',
    excerpt: 'Dive deeper into Next.js with these advanced techniques and best practices.',
    featuredImage: '/blog/advanced-nextjs.jpg',
    readingTime: '8 min read',
    publishDate: 'June 15, 2023',
    category: 'Web Development'
  },
  // Add more related posts...
]

export default function RelatedPosts() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Related Posts</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

