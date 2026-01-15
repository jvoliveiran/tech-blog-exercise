import { getAllPosts } from '@/app/lib/posts'
import { PostList } from '@/components/blog/post-list'

/**
 * Home page - Static Site Generation (SSG)
 *
 * This page demonstrates SSG by fetching all posts at build time.
 * The HTML is generated once during build and served as static files.
 */
export default function HomePage() {
  const posts = getAllPosts() // Called at build time

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Tech Blog
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Demonstrando estratégias de renderização SSG, CSR e SSR em Next.js
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-primary/10">
            🏠 Home: SSG
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10">
            📝 Posts: SSG
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10">
            📊 Dashboard: CSR
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10">
            🔍 Search: SSR
          </span>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Últimos Posts</h2>
        <PostList posts={posts} />
      </section>
    </div>
  )
}
