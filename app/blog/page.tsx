import { Metadata } from 'next'
import { generateBlogMetadata } from '@/lib/blog/metadata'
import BlogList from '@/components/BlogList'
import Script from 'next/script'
import { siteConfig } from '@/lib/constants'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = generateBlogMetadata()

const blogListStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${siteConfig.name}'s Blog`,
  description: 'Articles about web development, software engineering, and technology.',
  url: `${siteConfig.url}/blog`,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export default function BlogPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListStructuredData) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <BlogList size={6} featured={true} />
      </main>
    </>
  )
}

