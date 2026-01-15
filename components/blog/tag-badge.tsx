import { Badge } from '@/components/ui/badge'

interface TagBadgeProps {
  tag: string
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

/**
 * Consistent tag badge component
 * Server component
 */
export function TagBadge({ tag, variant = 'secondary' }: TagBadgeProps) {
  return (
    <Badge variant={variant} className="hover:bg-secondary/80 transition-colors">
      {tag}
    </Badge>
  )
}
