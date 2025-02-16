'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BlogGrid from '@/components/BlogGrid'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BlogSection() {
  return (
    <section id="blog" className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Latest Articles
        </motion.h2>

        <BlogGrid 
          size={3} 
          showLoadMore={false}
          className="mb-12"
        />

        <div className="text-center">
          <Button asChild className="group">
            <Link href="/blog">
              See More Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Newsletter subscription commented out
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Subscribe to My Newsletter</h3>
          <form className="flex gap-2">
            <Input type="email" placeholder="Your email address" className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        */}
      </div>
    </section>
  )
}

