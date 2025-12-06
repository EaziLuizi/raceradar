// app/races/[slug]/ViewTracker.tsx
'use client';

import { useEffect } from 'react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    // Track view after a short delay to ensure it's a real view
    const timer = setTimeout(() => {
      fetch(`/api/races/${slug}/view`, {
        method: 'POST',
      }).catch((error) => {
        // Silently fail - view tracking shouldn't break the page
        console.error(`Failed to track view: ${slug} -`, error);
      });
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [slug]);

  // This component renders nothing - it just tracks views
  return null;
}