'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'
import TableOfContents from './TableOfContents'
import ShareButtons from './ShareButtons'
import { Post } from "@/lib/blog/types"

export default function BlogPost({ post }: { post: Post }) {
    const [readingProgress, setReadingProgress] = useState(0)
    const [currentUrl, setCurrentUrl] = useState('')

    const updateReadingProgress = useCallback(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (window.scrollY / totalHeight) * 100
        setReadingProgress(progress)
    }, [])

    useEffect(() => {
        setCurrentUrl(window.location.href)
        window.addEventListener('scroll', updateReadingProgress)
        return () => window.removeEventListener('scroll', updateReadingProgress)
    }, [updateReadingProgress])

    const getShareMessage = () => {
        const teaser = post.excerpt || post.title
        return `${teaser} Read more at:`
    }

    return (
        <article className="py-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Badge className="mb-4">{post.category}</Badge>
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center text-sm text-muted-foreground mb-8">
                        <Clock className="mr-1 h-4 w-4"/>
                        <span className="mr-4">{post.readingTime}</span>
                        <Calendar className="mr-1 h-4 w-4"/>
                        <span>{post.publishDate}</span>
                    </div>
                </motion.div>

                <div className="flex gap-0 sm:gap-8">
                    <div className="w-full sm:w-3/4 overflow-hidden relative">
                        <div 
                            className="prose dark:prose-invert prose-lg max-w-none
                            prose-headings:scroll-mt-20 prose-headings:font-bold
                            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16
                            prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-16
                            prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-12
                            prose-p:text-base prose-p:leading-7 prose-p:mb-6 prose-p:text-muted-foreground
                            prose-li:text-base prose-li:text-muted-foreground
                            prose-strong:text-foreground prose-strong:font-semibold
                            prose-pre:bg-[#f6f8fa] dark:prose-pre:bg-[#1e1e1e]
                            prose-pre:border prose-pre:border-border/40
                            prose-pre:p-6 prose-pre:rounded-lg
                            prose-pre:shadow-sm
                            prose-pre:mb-12
                            [&>pre]:mb-12
                            [&>pre+*]:mt-12
                            [&>h2+pre]:mt-6
                            [&>h3+pre]:mt-6
                            prose-code:text-[#0550ae] dark:prose-code:text-[#4ec9b0]
                            prose-code:bg-[#f6f8fa] dark:prose-code:bg-[#1e1e1e]
                            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                            prose-code:text-[0.9em] prose-code:font-medium
                            prose-code:before:content-[''] prose-code:after:content-['']
                            prose-a:text-primary hover:prose-a:text-primary/80
                            [&>pre]:!w-[calc(100%+2rem)] [&>pre]:!-mx-4 sm:[&>pre]:!w-full sm:[&>pre]:!mx-0
                            [&>pre]:overflow-x-auto [&>pre]:overflow-y-hidden
                            [&_pre]:!bg-[#f6f8fa] dark:[&_pre]:!bg-[#1e1e1e]
                            [&_pre]:!p-6 [&_pre]:!m-0 [&_pre]:!rounded-lg
                            [&_pre_code]:!bg-transparent [&_pre_code]:!p-0
                            [&_pre_code]:!text-[0.9em] [&_pre_code]:!font-mono
                            [&_pre_code]:!text-[#24292e] dark:[&_pre_code]:!text-[#d4d4d4]
                            [&_pre_code]:whitespace-pre
                            [&_code]:!font-mono
                            [&>*]:mb-6 [&_h2]:border-b [&_h2]:pb-2 [&_h2]:border-border/40
                            [&_ul]:my-6 [&_li]:my-2 [&_ul]:pl-6
                            [&_table]:w-full [&_table]:my-6 [&_table]:overflow-x-auto 
                            [&_table]:block [&_table]:max-w-full
                            [&_table]:border [&_table]:border-border/40 [&_table]:rounded-lg
                            [&_table]:whitespace-nowrap md:[&_table]:whitespace-normal
                            [&_th]:border [&_th]:border-border/40 [&_th]:px-4 [&_th]:py-2 [&_th]:bg-muted/50
                            [&_td]:border [&_td]:border-border/40 [&_td]:px-4 [&_td]:py-2
                            [&_tr]:border-b [&_tr]:border-border/40 [&_tr]:last:border-0
                            [&_thead]:bg-muted/30
                            [&_pre]:!scrollbar-thin [&_pre]:!scrollbar-track-transparent
                            [&_pre]:!scrollbar-thumb-gray-400/50 dark:[&_pre]:!scrollbar-thumb-gray-400/50
                            [&_pre]:hover:!scrollbar-thumb-gray-400/70 dark:[&_pre]:hover:!scrollbar-thumb-gray-400/70
                            [&_.hljs-keyword]:!text-[#d73a49] dark:[&_.hljs-keyword]:!text-[#569cd6]
                            [&_.hljs-string]:!text-[#032f62] dark:[&_.hljs-string]:!text-[#ce9178]
                            [&_.hljs-comment]:!text-[#6a737d] dark:[&_.hljs-comment]:!text-[#6a9955]
                            [&_.hljs-function]:!text-[#6f42c1] dark:[&_.hljs-function]:!text-[#dcdcaa]
                            [&_.hljs-number]:!text-[#005cc5] dark:[&_.hljs-number]:!text-[#b5cea8]
                            [&_.hljs-class]:!text-[#22863a] dark:[&_.hljs-class]:!text-[#4ec9b0]
                            [&_.hljs-title]:!text-[#6f42c1] dark:[&_.hljs-title]:!text-[#dcdcaa]
                            [&_.hljs-type]:!text-[#d73a49] dark:[&_.hljs-type]:!text-[#569cd6]
                            [&_.hljs-variable]:!text-[#24292e] dark:[&_.hljs-variable]:!text-[#9cdcfe]
                            [&_.hljs-literal]:!text-[#005cc5] dark:[&_.hljs-literal]:!text-[#569cd6]
                            [&_.hljs-built_in]:!text-[#e36209] dark:[&_.hljs-built_in]:!text-[#4ec9b0]
                            [&_.hljs-punctuation]:!text-[#24292e] dark:[&_.hljs-punctuation]:!text-[#d4d4d4]
                            [&_.hljs-operator]:!text-[#d73a49] dark:[&_.hljs-operator]:!text-[#d4d4d4]
                            [&_.hljs-property]:!text-[#005cc5] dark:[&_.hljs-property]:!text-[#9cdcfe]"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
                        />
                    </div>
                    <div className="w-1/4 hidden sm:block">
                        <div className="sticky top-8" style={{ position: 'sticky' }}>
                            <TableOfContents />
                            <div className="mt-8">
                                <div className="font-semibold mb-4">Share this article</div>
                                <ShareButtons 
                                    url={currentUrl}
                                    message={getShareMessage()}
                                    title={post.title}
                                    summary={post.excerpt}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile share buttons */}
                <div className="mt-8 sm:hidden">
                    <div className="font-semibold mb-4">Share this article</div>
                    <ShareButtons 
                        url={currentUrl}
                        message={getShareMessage()}
                        title={post.title}
                        summary={post.excerpt}
                        className="justify-center space-x-4"
                        iconSize="md"
                    />
                </div>
            </div>
            <div
                className="fixed top-0 left-0 h-1 bg-primary"
                style={{
                    width: `${readingProgress}%`,
                    position: 'fixed',
                    zIndex: 100
                }}
            />
        </article>
    )
}

