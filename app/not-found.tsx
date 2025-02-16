import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center">
      <div className="container px-4 py-16 text-center">
        <div className="space-y-8">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Page Not Found</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 