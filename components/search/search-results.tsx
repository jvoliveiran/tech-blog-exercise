import { PostCard } from '@/components/blog/post-card'
import type { Post } from '@/app/lib/posts'

interface SearchResultsProps {
  posts: Post[]
  query: string
}

/**
 * Search results component displaying found posts
 * Server component
 */
export function SearchResults({ posts, query }: SearchResultsProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          Nenhum resultado encontrado para &quot;{query}&quot;
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Tente buscar com palavras-chave diferentes
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
