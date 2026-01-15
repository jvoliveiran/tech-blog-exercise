import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { TagBadge } from './tag-badge'
import { formatDate } from '@/lib/date'
import type { Post } from '@/app/lib/posts'

interface PostCardProps {
  post: Post
}

/**
 * Reusable post preview card component
 * Server component with link to full post
 */
export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full transition-all hover:scale-[1.02] hover:shadow-lg">
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription>
            {formatDate(post.publishedAt)} • {post.author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
