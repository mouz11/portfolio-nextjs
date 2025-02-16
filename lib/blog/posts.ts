import fs from "fs"
import path from "path";
import matter from "gray-matter";
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from "remark-gfm";
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from 'rehype-stringify';
import { spacesToUnderscoresString } from "@/lib/utils";
import { Post } from "./types";
import { siteConfig } from "@/lib/constants";

const blogDirectory = path.join(process.cwd(), "/public/blog");

function processMarkdownMetadata(data: any): Omit<Post, 'id' | 'slug' | 'contentHtml'> {
    return {
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        featuredImage: data.featuredImage || "/images/default.jpg",
        readingTime: data.readingTime || "Unknown",
        publishDate: data.publishDate || "Unknown",
        category: data.category || "Uncategorized",
        author: {
            name: data.author?.name || siteConfig.name,
            image: data.author?.image || `${siteConfig.url}/profile-photo.jpg`,
        },
        tags: data.tags || [],
    }
}

export function getPosts(page: number, pageSize: number, searchTerm: string = ""): Post[] {
    try {
        if (!fs.existsSync(blogDirectory)) {
            fs.mkdirSync(blogDirectory, { recursive: true });
            return [];
        }

        const filenames = fs.readdirSync(blogDirectory);
        const mdFiles = filenames.filter(filename => filename.endsWith('.md'));

        if (mdFiles.length === 0) {
            console.warn('No markdown files found in the blog directory');
            return [];
        }

        let postsMeta = mdFiles
            .map((filename) => {
                const filePath = path.join(blogDirectory, filename);
                const stats = fs.statSync(filePath);
                return {
                    filename,
                    createdAt: stats.birthtime.getTime(),
                };
            })
            .sort((a, b) => b.createdAt - a.createdAt);

        if (searchTerm) {
            const normalizedSearch = spacesToUnderscoresString(searchTerm.toLowerCase());
            postsMeta = postsMeta.filter(({ filename }) =>
                filename.toLowerCase().includes(normalizedSearch)
            );
        }

        const startIndex = (page - 1) * pageSize;
        const paginatedMeta = postsMeta.slice(startIndex, startIndex + pageSize);

        return paginatedMeta.map(({ filename }) => {
            const filePath = path.join(blogDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf-8");
            const { data } = matter(fileContents);
            const metadata = processMarkdownMetadata(data);

            return {
                id: crypto.randomUUID(),
                slug: filename.replace(".md", ""),
                ...metadata,
            };
        });
    } catch (error) {
        console.error('Error in getPosts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);
    const metadata = processMarkdownMetadata(data);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeHighlight)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(content);

    const contentHtml = processedContent.toString();

    return {
        id: crypto.randomUUID(),
        slug,
        ...metadata,
        contentHtml,
    };
}

export function getAllPostSlugs() {
    const filenames = fs.readdirSync(blogDirectory);
    return filenames.map(filename => ({
        slug: filename.replace(/\.md$/, '')
    }));
}