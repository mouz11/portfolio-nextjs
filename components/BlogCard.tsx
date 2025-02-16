import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar } from 'lucide-react'

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    featuredImage: string
    readingTime: string
    publishDate: string
    category: string
  }
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className={`overflow-hidden ${featured ? 'md:flex' : ''}`}>
          <div className={`relative ${featured ? 'md:w-1/2' : 'h-48'}`}>
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardContent className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
            <Badge className="mb-2">{post.category}</Badge>
            <h3 className={`font-bold mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>{post.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span className="mr-4">{post.readingTime}</span>
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.publishDate}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

