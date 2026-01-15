import { MarkdownRenderer } from '@/app/lib/markdown'

interface PostContentProps {
  content: string
}

/**
 * Post content wrapper component for rendering markdown
 * Server component
 */
export function PostContent({ content }: PostContentProps) {
  return (
    <article className="prose-container">
      <MarkdownRenderer content={content} />
    </article>
  )
}
