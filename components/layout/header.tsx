import Link from 'next/link'
import { NavLink } from './nav-link'

/**
 * Main header component with navigation
 * Server component with client-side navigation links
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Tech Blog
          </span>
        </Link>

        <nav className="flex items-center space-x-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/search">Search</NavLink>
        </nav>
      </div>
    </header>
  )
}
