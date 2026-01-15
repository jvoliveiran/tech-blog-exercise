import { Separator } from '@/components/ui/separator'
import { TagBadge } from './tag-badge'
import { formatDate } from '@/lib/date'
import { estimateReadingTime } from '@/lib/reading-time'
import type { Post } from '@/app/lib/posts'

interface PostHeaderProps {
  post: Post
}

/**
 * Post header component displaying metadata and hero section
 * Server component
 */
export function PostHeader({ post }: PostHeaderProps) {
  const readingTime = estimateReadingTime(post.content)

  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
        <span>{post.author}</span>
        <span>•</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span>•</span>
        <span>{readingTime} min de leitura</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <Separator className="my-6" />
    </header>
  )
}
