import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/lib/blog/posts'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const size = parseInt(searchParams.get('size') || '6')
    const search = searchParams.get('search') || ''

    // Validate parameters
    if (isNaN(page) || page < 1) {
      return NextResponse.json(
        { error: 'Invalid page number' },
        { status: 400 }
      )
    }

    if (isNaN(size) || size < 1) {
      return NextResponse.json(
        { error: 'Invalid size' },
        { status: 400 }
      )
    }

    const posts = getPosts(page, size, search)
    if (!posts || posts.length === 0) {
      console.log('No posts found')
      return NextResponse.json([])
    }

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error in blog-posts API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// export async function POST(request: Request) {
//     const newPost = await request.json();
//     return NextResponse.json({ message: "Post created", data: newPost }, { status: 201 });
// }