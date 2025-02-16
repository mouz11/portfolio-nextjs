import { Metadata } from 'next'
import { siteConfig } from '@/lib/constants'

export function generateBlogMetadata(
  title?: string,
  description?: string,
  image?: string
): Metadata {
  const metaTitle = title 
    ? `${title} | ${siteConfig.name}'s Blog`
    : `Blog | ${siteConfig.name}`
  
  const metaDescription = description || 'Read my latest articles about web development, software engineering, and technology.'
  const metaImage = image || `${siteConfig.url}/og-blog.jpg`

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      url: `${siteConfig.url}/blog`,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: siteConfig.links.twitter,
    },
  }
} 