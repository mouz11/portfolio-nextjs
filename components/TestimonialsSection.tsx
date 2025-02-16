'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: "John's expertise in full-stack development was instrumental in launching our startup's MVP. His ability to translate complex ideas into functional, user-friendly interfaces is unparalleled.",
    company: 'TechStart Inc.',
    logo: '/logos/techstart.png',
    project: 'MVP Development',
    outcome: 'Successful product launch with 10,000 sign-ups in the first month',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataViz Solutions',
    content: "Working with John on our data visualization platform was a game-changer. His deep understanding of both frontend and backend technologies resulted in a highly performant and scalable solution.",
    company: 'DataViz Solutions',
    logo: '/logos/dataviz.png',
    project: 'Data Visualization Platform',
    outcome: 'Reduced data processing time by 60% and improved user engagement by 40%',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, EduTech Co.',
    content: "John's contribution to our e-learning platform went beyond just coding. His insights into user experience and accessibility greatly enhanced the overall quality of our product.",
    company: 'EduTech Co.',
    logo: '/logos/edutech.png',
    project: 'E-learning Platform Enhancement',
    outcome: 'Increased student engagement by 50% and course completion rates by 35%',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Client Testimonials
        </motion.h2>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentIndex].logo || "/placeholder.svg"}
                    alt={testimonials[currentIndex].company}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-lg mb-6">"{testimonials[currentIndex].content}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Project: {testimonials[currentIndex].project}</h4>
                  <p className="text-muted-foreground">Outcome: {testimonials[currentIndex].outcome}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

