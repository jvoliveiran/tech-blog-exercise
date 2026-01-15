import { getAllPosts, getPostBySlug } from '@/app/lib/posts'
import { PostHeader } from '@/components/blog/post-header'
import { PostContent } from '@/components/blog/post-content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

/**
 * Generate static paths for all blog posts
 * This tells Next.js which pages to pre-render at build time
 */
export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * Generate metadata for each blog post (SEO)
 * This creates dynamic meta tags for each post
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

/**
 * Blog Post Detail Page - Static Site Generation (SSG)
 *
 * This page demonstrates SSG with dynamic routes.
 * Each post is pre-rendered at build time with generateStaticParams.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <PostHeader post={post} />
      <PostContent content={post.content} />
    </article>
  )
}
