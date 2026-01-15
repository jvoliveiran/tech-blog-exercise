/**
 * Format a date string to Brazilian Portuguese locale
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "15 de janeiro de 2024")
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Check if a date is in the current month
 * @param dateString - ISO date string
 * @returns True if date is in current month
 */
export function isThisMonth(dateString: string): boolean {
  const date = new Date(dateString)
  const now = new Date()
  return date.getMonth() === now.getMonth() &&
         date.getFullYear() === now.getFullYear()
}

/**
 * Get relative time string (e.g., "2 dias atrás")
 * @param dateString - ISO date string
 * @returns Relative time string in Portuguese
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    return 'Hoje'
  } else if (diffDays === 1) {
    return 'Ontem'
  } else if (diffDays < 7) {
    return `${diffDays} dias atrás`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} ${weeks === 1 ? 'semana' : 'semanas'} atrás`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} ${months === 1 ? 'mês' : 'meses'} atrás`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years} ${years === 1 ? 'ano' : 'anos'} atrás`
  }
}
