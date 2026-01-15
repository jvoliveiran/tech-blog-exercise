"use client"

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchFormProps {
  initialQuery?: string
}

/**
 * Search form component with client-side navigation
 * Client component for form handling
 */
export function SearchForm({ initialQuery = '' }: SearchFormProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Buscar posts por título, conteúdo ou tags..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={!query.trim()}>
        Buscar
      </Button>
    </form>
  )
}
