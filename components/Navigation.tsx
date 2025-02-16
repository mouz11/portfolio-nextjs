'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '#home', label: 'Home', isHash: true },
  { href: '#about', label: 'About', isHash: true },
  { href: '#projects', label: 'Projects', isHash: true },
  { href: '/blog', label: 'Blog', isHash: false },
  { href: '#contact', label: 'Contact', isHash: true },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (!isHash) return // Let the normal navigation happen for non-hash links
    
    e.preventDefault()
    setIsOpen(false)

    // If we're not on the home page and it's a hash link, navigate to home first
    if (pathname !== '/' && isHash) {
      window.location.href = '/' + href
      return
    }

    // Handle smooth scrolling for hash links
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-bold select-none cursor-pointer"
        >
          M.O.U.Z
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.isHash ? (
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.isHash)}
                  className={`hover:text-primary transition-colors ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href, item.isHash)}
                className={`block py-2 px-4 hover:bg-secondary ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-4 hover:bg-secondary ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </motion.div>
      )}
    </nav>
  )
}

