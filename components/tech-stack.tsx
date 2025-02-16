'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import {
  Html5,
  Css3,
  Javascript,
  React,
  NextJs,
  Typescript,
  Tailwind,
  Figma,
} from './tech-icons'

const technologies = [
  { icon: React, name: 'React' },
  { icon: NextJs, name: 'Next.js' },
  { icon: Typescript, name: 'TypeScript' },
  { icon: Javascript, name: 'JavaScript' },
  { icon: Html5, name: 'HTML5' },
  { icon: Css3, name: 'CSS3' },
  { icon: Tailwind, name: 'Tailwind' },
  { icon: Figma, name: 'Figma' },
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technologies I Work With
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:bg-secondary/50 transition-colors text-center group">
                <tech.icon className="h-12 w-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <p className="font-medium">{tech.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

