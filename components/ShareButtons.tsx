'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Facebook, Linkedin } from 'lucide-react'
import { shareConfig } from '@/lib/constants'

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
    fill="currentColor"/>
  </svg>
)

const icons = {
  WhatsApp: MessageCircle,
  Facebook: Facebook,
  X: XIcon,
  LinkedIn: Linkedin,
}

interface ShareButtonsProps {
  url: string
  message: string
  title?: string
  summary?: string
  className?: string
  iconSize?: 'sm' | 'md'
}

export default function ShareButtons({ 
  url, 
  message, 
  title, 
  summary,
  className = '',
  iconSize = 'sm'
}: ShareButtonsProps) {
  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400')
  }

  return (
    <div className={`flex space-x-2 ${className}`}>
      {shareConfig.platforms.map((platform) => {
        const Icon = icons[platform.name as keyof typeof icons]
        return (
          <Button
            key={platform.name}
            variant="outline"
            size="icon"
            onClick={() => handleShare(platform.getUrl(message, url, title, summary))}
            className={`${platform.color} transition-colors duration-200`}
            title={`Share on ${platform.name}`}
          >
            <Icon className={`${iconSize === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} />
          </Button>
        )
      })}
    </div>
  )
} 