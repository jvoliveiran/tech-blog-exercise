"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

/**
 * Client component for navigation links with active state
 */
export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Button
      asChild
      variant={isActive ? 'default' : 'ghost'}
      className={cn('transition-colors', isActive && 'bg-primary text-primary-foreground')}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
