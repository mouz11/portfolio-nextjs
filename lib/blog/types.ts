import { siteConfig } from '@/lib/constants'

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  readingTime: string
  publishDate: string
  category: string
  contentHtml?: string
  author: {
    name: string
    image: string
  }
  tags: string[]
}

export function generatePostStructuredData(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      image: post.author.image,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  }
} 