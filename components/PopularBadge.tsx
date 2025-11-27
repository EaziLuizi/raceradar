// components/PopularBadge.tsx
import { isPopular } from '@/lib/format-views';

interface PopularBadgeProps {
  viewCount: number | null | undefined;
  className?: string;
}

export default function PopularBadge({ viewCount, className = '' }: PopularBadgeProps) {
  if (!isPopular(viewCount)) {
    return null;
  }

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-orange-500 backdrop-blur-sm ${className}`}
    >
      <svg 
        className="w-4 h-4" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
        />
      </svg>
      Popular
    </span>
  );
}