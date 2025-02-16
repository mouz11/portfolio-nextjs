'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import BlogGrid from './BlogGrid'

export default function BlogList({size = 4, featured = false}
                                 : {size: number, featured: boolean}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce effect: updates debouncedSearchTerm after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        {/* Search Input */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <BlogGrid 
          size={size} 
          featured={featured} 
          searchTerm={debouncedSearchTerm} 
        />
      </div>
    </section>
  );
}