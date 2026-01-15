"use client"

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: number
}

/**
 * Stats card component for displaying metrics
 * Client component with animation
 */
export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend !== undefined && (
          <p className={`text-xs ${trend >= 0 ? 'text-green-600' : 'text-red-600'} mt-1`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% desde último mês
          </p>
        )}
      </CardContent>
    </Card>
  )
}
