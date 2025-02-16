'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 80, years: 3 },
      { name: 'Angular', level: 70, years: 2 },
      { name: 'TypeScript', level: 85, years: 3 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 80, years: 4 },
      { name: 'Python', level: 60, years: 2 },
      { name: 'Spring boot', level: 90, years: 3 },
    ],
  },
  {
    category: 'Tools & Others',
    technologies: [
      { name: 'Git', level: 90, years: 5 },
      { name: 'Docker', level: 75, years: 2 },
      { name: 'CI/CD', level: 60, years: 1 },
    ],
  },
]

const softSkills = [
  'Communication',
  'Problem Solving',
  'Teamwork',
  'Adaptability',
  'Time Management',
]

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Frontend', 'Backend', 'Tools & Others'])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                className="w-full justify-between mb-4"
                onClick={() => toggleCategory(skillCategory.category)}
              >
                <span>{skillCategory.category}</span>
                {expandedCategories.includes(skillCategory.category) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
              {expandedCategories.includes(skillCategory.category) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="mb-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex justify-between mb-1">
                              <span>{tech.name}</span>
                              <span className="text-muted-foreground">{tech.years} years</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech.years} years of experience</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Progress value={tech.level} className="h-2" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline">{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

