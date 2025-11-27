import { Calendar, MapPin, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ViewCount from './ViewCount'
import PopularBadge from './PopularBadge'

interface RaceCardProps {
  id: string
  name: string
  slug: string
  race_date: string
  location_city: string
  location_province: string
  race_type: string
  terrain: string
  difficulty: string
  distances: any[]
  image_url: string | null
  view_count: number | null | undefined
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-[#5A7247]/10 text-[#5A7247] border-[#5A7247]/30'
    case 'moderate':
      return 'bg-[#CC7722]/10 text-[#CC7722] border-[#CC7722]/30'
    case 'hard':
      return 'bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]/30'
    case 'extreme':
      return 'bg-[#D4526E]/10 text-[#D4526E] border-[#D4526E]/30'
    default:
      return 'bg-[#C2B280]/10 text-[#C2B280] border-[#C2B280]/30'
  }
}

const getTypeLabel = (type: string) => {
  const labels: { [key: string]: string } = {
    trail: 'Trail',
    road: 'Road',
    ultra: 'Ultra',
    cycling: 'Cycling',
    mtb: 'MTB',
    triathlon: 'Triathlon',
    obstacle: 'OCR',
    duathlon: 'Duathlon',
    swimming: 'Swim',
  }
  return labels[type] || type
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-ZA', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function RaceCard({ race }: { race: RaceCardProps }) {

  return (
  <Link href={`/races/${race.slug}`} className="block group">
        <div className="bg-white rounded-2xl border border-[#C2B280]/20 hover:border-[#CC7722] hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden">
          {/* Image */}
          <div className="h-48 bg-gradient-to-br from-[#4A7BA7] to-[#5A7247] relative overflow-hidden">
            {race.image_url ? (
              <img 
                src={race.image_url} 
                alt={race.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white opacity-40" />
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getDifficultyColor(race.difficulty)}`}>
                {race.difficulty.charAt(0).toUpperCase() + race.difficulty.slice(1)}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#2D2D2D] backdrop-blur-sm">
                {getTypeLabel(race.race_type)}
              </span>
            </div>
            <div className="absolute top-2 right-2">
              <PopularBadge viewCount={race.view_count} />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#CC7722] transition-colors line-clamp-2">
              {race.name}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[#5A5A5A]">
                <Calendar className="w-4 h-4 flex-shrink-0 text-[#CC7722]" />
                <span className="text-sm font-medium">{formatDate(race.race_date)}</span>
              </div>

              <div className="flex items-center gap-2 text-[#5A5A5A]">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#CC7722]" />
                <span className="text-sm">
                  {race.location_city}, {race.location_province}
                </span>
              </div>
            </div>

            {/* Distances */}
            {race.distances && race.distances.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {race.distances.slice(0, 3).map((dist: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FAF7F0] text-[#5A5A5A] rounded-full text-xs font-medium border border-[#C2B280]/20"
                  >
                    {dist.distance}
                </span>
              ))}
              {race.distances.length > 3 && (
                <span className="px-3 py-1 bg-[#FAF7F0] text-[#5A5A5A] rounded-full text-xs font-medium border border-[#C2B280]/20">
                  +{race.distances.length - 3} more
                </span>
              )}
            </div>
          )}

            {/* View Details Button */}
            <div className="pt-4 border-t border-[#C2B280]/20 flex items-center justify-between">
              <ViewCount count={race.view_count} />
              <div className="text-[#CC7722] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
  )
}
