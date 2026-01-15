/**
 * Calculate estimated reading time for content
 * @param content - The text content to analyze
 * @returns Estimated reading time in minutes
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
