"use client"

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'

interface ActivityData {
  day: string
  views: number
}

/**
 * Activity chart component showing reading activity
 * Client component with mock data visualization
 */
export function ActivityChart() {
  const [activityData, setActivityData] = useState<ActivityData[]>([])

  useEffect(() => {
    // Generate mock activity data for the last 7 days
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    const data = days.map((day) => ({
      day,
      views: Math.floor(Math.random() * 50) + 10,
    }))
    setActivityData(data)
  }, [])

  const maxViews = Math.max(...activityData.map((d) => d.views), 1)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade de Leitura (Última Semana)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-2 h-48">
          {activityData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full bg-muted rounded-t relative overflow-hidden">
                <div
                  className="bg-primary transition-all duration-500 ease-out rounded-t"
                  style={{
                    height: `${(data.views / maxViews) * 180}px`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2">{data.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Total de visualizações: {activityData.reduce((acc, d) => acc + d.views, 0)}
        </div>
      </CardContent>
    </Card>
  )
}
