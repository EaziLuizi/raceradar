// lib/format-views.ts

/**
 * Format view count for display
 * - Under 1,000: show exact number (e.g., "234")
 * - 1,000 - 999,999: show with K (e.g., "1.2K")
 * - 1,000,000+: show with M (e.g., "1.5M")
 */
export function formatViewCount(count: number | null | undefined): string {
  if (!count || count === 0) {
    return '0';
  }

  if (count < 1000) {
    return count.toLocaleString();
  }

  if (count < 1000000) {
    const k = count / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }

  const m = count / 1000000;
  return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
}

/**
 * Determine if a race is "popular" based on view count
 * Threshold: 100+ views
 */
export function isPopular(viewCount: number | null | undefined): boolean {
  return (viewCount ?? 0) >= 100;
}