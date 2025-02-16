'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { personalInfo } from '@/lib/constants'

interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
}

const TimelineItem = ({ year, title, company, description }: TimelineItemProps) => (
  <div className="mb-8 flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-px h-full bg-border" />
      <div className="w-4 h-4 rounded-full bg-primary" />
    </div>
    <div>
      <div className="font-semibold">{year}</div>
      <div className="text-lg font-medium">{title}</div>
      <div className="text-muted-foreground">{company}</div>
      <div className="mt-2">{description}</div>
    </div>
  </div>
)

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative aspect-square w-full max-w-[400px] mx-auto">
      <Image
        src={personalInfo.profileImage}
        alt={personalInfo.fullName}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="rounded-lg shadow-lg object-cover"
        priority
      />
    </div>
  </motion.div>
)

const BioSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
      <p className="text-muted-foreground mb-6">
        {personalInfo.longBio}
      </p>
      <Button
        variant="outline"
        size="lg"
        onClick={handleDownload}
        className="mb-8"
      >
        <Download className="mr-2 h-4 w-4" /> Download Resume
      </Button>
      <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
      <ul className="list-disc list-inside mb-6">
        {personalInfo.achievements.map((achievement, index) => (
          <li key={index} className="mb-2 text-muted-foreground">
            {achievement}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const CareerTimeline = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mt-24"
  >
    <h3 className="text-2xl font-semibold mb-8 text-center">Career Timeline</h3>
    <div className="relative">
      {personalInfo.timeline.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  </motion.div>
)

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ProfileImage />
          <BioSection />
        </div>
        <CareerTimeline />
      </div>
    </section>
  )
}

