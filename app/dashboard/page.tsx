"use client"

import { useState, useEffect } from 'react'
import { getAllPosts } from '@/app/lib/posts'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ActivityChart } from '@/components/dashboard/activity-chart'
import { estimateReadingTime } from '@/lib/reading-time'
import { getRelativeTime } from '@/lib/date'

interface DashboardStats {
  totalPosts: number
  avgReadTime: number
  lastView: string
  viewsToday: number
}

/**
 * Dashboard Page - Client-Side Rendering (CSR)
 *
 * This page demonstrates CSR by fetching data on the client side.
 * The data is loaded after the initial HTML is rendered.
 * Notice the loading state and the delay before stats appear.
 */
export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with delay to demonstrate CSR
    const fetchStats = async () => {
      // Simulate network delay (800ms)
      await new Promise((resolve) => setTimeout(resolve, 800))

      const posts = getAllPosts()
      const totalReadTime = posts.reduce(
        (acc, post) => acc + estimateReadingTime(post.content),
        0
      )
      const avgReadTime = totalReadTime / posts.length

      setStats({
        totalPosts: posts.length,
        avgReadTime: Math.round(avgReadTime * 10) / 10,
        lastView: new Date().toISOString(),
        viewsToday: Math.floor(Math.random() * 50) + 10,
      })
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-muted-foreground animate-pulse">
              Carregando dados do dashboard...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Análise de métricas do blog (renderizado no cliente - CSR)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatsCard
          title="Total de Posts"
          value={stats!.totalPosts}
          trend={25}
        />
        <StatsCard
          title="Tempo Médio de Leitura"
          value={`${stats!.avgReadTime} min`}
          trend={-5}
        />
        <StatsCard
          title="Última Visualização"
          value={getRelativeTime(stats!.lastView)}
        />
        <StatsCard
          title="Visualizações Hoje"
          value={stats!.viewsToday}
          trend={12}
        />
      </div>

      <ActivityChart />

      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong>💡 Demonstração CSR:</strong> Esta página usa renderização do lado do cliente (Client-Side Rendering).
          Os dados são carregados após o HTML inicial, o que você pode verificar observando o estado de loading.
          Desabilite o JavaScript para ver que a página não funcionará corretamente.
        </p>
      </div>
    </div>
  )
}
