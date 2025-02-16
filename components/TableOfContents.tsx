'use client'

import { useState, useEffect } from 'react'

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Get all headings from the article
    const articleHeadings = Array.from(document.querySelectorAll('h2, h3, h4'))
      .map((heading, index) => ({
        id: heading.id || `heading-${index}`,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1])
      }))
      .filter(heading => heading.text.trim() !== '') // Filter out empty headings
    
    // Add IDs to headings that don't have them
    articleHeadings.forEach((heading, index) => {
      const element = document.querySelectorAll('h2, h3, h4')[index]
      if (element && !element.id) {
        element.id = `heading-${index}`
      }
    })

    setHeadings(articleHeadings)

    // Set up intersection observer for headings
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
          // Update URL hash without scrolling
          if (typeof window !== 'undefined') {
            const newUrl = `${window.location.pathname}${window.location.search}#${entry.target.id}`
            window.history.replaceState({}, '', newUrl)
          }
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -66%'
    })

    // Observe all section headings
    const headingElements = document.querySelectorAll('h2, h3, h4')
    headingElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // Adjust this value based on your fixed header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      
      // Update URL hash after smooth scroll
      if (typeof window !== 'undefined') {
        const newUrl = `${window.location.pathname}${window.location.search}#${id}`
        window.history.pushState({}, '', newUrl)
      }
    }
  }

  if (headings.length === 0) return null

  return (
    <nav className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={`${heading.id}-${index}`}
            style={{ 
              marginLeft: `${(heading.level - 2) * 12}px`,
              transition: 'all 0.2s'
            }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`
                text-sm hover:text-foreground transition-colors
                ${activeId === heading.id 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
                }
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

