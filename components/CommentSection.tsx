'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function CommentSection() {
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission
    console.log('Submitted comment:', comment)
    setComment('')
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          className="mb-4"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      {/* Display existing comments here */}
    </div>
  )
}

