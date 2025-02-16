'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Skeleton */}
          <div className="flex flex-col items-center mb-12">
            <div className="h-8 w-48 bg-muted animate-pulse rounded-lg mb-4" />
            <div className="h-10 w-72 max-w-md bg-muted animate-pulse rounded-lg" />
          </div>

          {/* Featured Post Skeleton */}
          <Card className="w-full h-96 bg-muted animate-pulse mb-12" />

          {/* Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="w-full h-80 bg-muted animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 