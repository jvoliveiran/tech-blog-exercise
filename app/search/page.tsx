import { searchPosts } from '@/app/lib/posts'
import { SearchForm } from '@/components/search/search-form'
import { SearchResults } from '@/components/search/search-results'

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

/**
 * Search Page - Server-Side Rendering (SSR)
 *
 * This page demonstrates SSR by executing search on the server for each request.
 * The search results are included in the HTML response, making it SEO-friendly.
 * Each search creates a new server request with fresh results.
 */
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query = '' } = searchParams
  const results = []

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Buscar Posts</h1>
        <p className="text-muted-foreground">
          Pesquise por título, conteúdo ou tags (renderizado no servidor - SSR)
        </p>
      </div>

      <div className="mb-8">
        <SearchForm initialQuery={query} />
      </div>

      {query && (
        <div className="mb-6">
          <p className="text-muted-foreground">
            {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado
            {results.length !== 1 ? 's' : ''} para &quot;{query}&quot;
          </p>
        </div>
      )}

      {(
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground text-lg mb-4">
              Digite um termo para buscar posts
            </p>
            <p className="text-sm text-muted-foreground">
              Você pode buscar por palavras no título, conteúdo ou tags dos posts
            </p>
          </div>
        </div>
      )}

      {query && results.length > 0 && (
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>💡 Demonstração SSR:</strong> Esta página usa renderização do lado do servidor (Server-Side Rendering).
            Os resultados da busca são gerados no servidor a cada requisição e incluídos no HTML.
            Isso torna a página SEO-friendly e os resultados ficam visíveis no código-fonte da página.
          </p>
        </div>
      )}
    </div>
  )
}
