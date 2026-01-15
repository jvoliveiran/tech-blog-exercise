import { Separator } from '@/components/ui/separator'

/**
 * Footer component with copyright and minimal info
 * Server component
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/40">
      <div className="container px-4 py-8">
        <Separator className="mb-6" />
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tech Blog. Demonstrating Next.js rendering strategies.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js 16, React 19, TypeScript, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
