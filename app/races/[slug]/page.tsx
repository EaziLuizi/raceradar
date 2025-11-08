import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Users, 
  Clock,
  Mountain,
  DollarSign,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  ArrowLeft,
  Info
} from 'lucide-react'

interface Race {
  id: string
  name: string
  slug: string
  description: string
  race_date: string
  entry_opens_date: string | null
  entry_closes_date: string | null
  location_city: string
  location_province: string
  location_venue: string | null
  race_type: string
  distances: any[]
  terrain: string
  elevation_gain: number | null
  difficulty: string
  website_url: string | null
  entry_url: string | null
  organizer_name: string | null
  organizer_email: string | null
  organizer_phone: string | null
  image_url: string | null
}

async function getRace(slug: string): Promise<Race | null> {
  const { data, error } = await supabase
    .from('races')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'active')
    .single()

  if (error || !data) {
    return null
  }

  return data as Race
}

export default async function RaceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const race = await getRace(slug)

  if (!race) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-[#5A7247]/10 text-[#5A7247] border-[#5A7247]'
      case 'moderate':
        return 'bg-[#CC7722]/10 text-[#CC7722] border-[#CC7722]'
      case 'hard':
        return 'bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]'
      case 'extreme':
        return 'bg-[#D4526E]/10 text-[#D4526E] border-[#D4526E]'
      default:
        return 'bg-[#C2B280]/10 text-[#C2B280] border-[#C2B280]'
    }
  }

  const getTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      trail: 'Trail Running',
      road: 'Road Running',
      ultra: 'Ultra Marathon',
      cycling: 'Road Cycling',
      mtb: 'Mountain Biking',
      triathlon: 'Triathlon',
      obstacle: 'Obstacle Course',
      duathlon: 'Duathlon',
      swimming: 'Swimming',
    }
    return labels[type] || type
  }

  const daysUntilRace = Math.ceil(
    (new Date(race.race_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-[#FAF7F0]/95 backdrop-blur-sm z-50 border-b border-[#C2B280]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-[#CC7722] to-[#E67E22] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#2D2D2D]">RaceRadar</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">Home</Link>
              <Link href="/races" className="text-[#CC7722] font-semibold">Discover Races</Link>
              <Link href="/about" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-20 bg-white border-b border-[#C2B280]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/races"
            className="inline-flex items-center gap-2 text-[#5A5A5A] hover:text-[#CC7722] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all races
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-96 bg-gradient-to-br from-[#4A7BA7] via-[#5A7247] to-[#CC7722] rounded-3xl relative overflow-hidden shadow-2xl">
          {race.image_url ? (
            <img 
              src={race.image_url} 
              alt={race.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Mountain className="w-32 h-32 text-white opacity-30" />
            </div>
          )}
          
          {/* Badges Overlay */}
          <div className="absolute top-6 right-6 flex gap-3">
            <span className={`px-5 py-2 rounded-full text-sm font-bold border-2 backdrop-blur-sm ${getDifficultyColor(race.difficulty)}`}>
              {race.difficulty.charAt(0).toUpperCase() + race.difficulty.slice(1)}
            </span>
            <span className="px-5 py-2 rounded-full text-sm font-bold bg-white/95 text-[#2D2D2D] border-2 border-white backdrop-blur-sm">
              {getTypeLabel(race.race_type)}
            </span>
          </div>

          {/* Days Until Badge */}
          {daysUntilRace > 0 && daysUntilRace < 365 && (
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white shadow-xl">
              <div className="text-3xl font-bold text-[#2D2D2D]">{daysUntilRace}</div>
              <div className="text-sm font-semibold text-[#5A5A5A]">days to go</div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Basic Info */}
            <div className="bg-white rounded-2xl p-8 border border-[#C2B280]/20 shadow-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
                {race.name}
              </h1>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-3 text-[#5A5A5A]">
                  <div className="w-10 h-10 bg-[#CC7722]/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#CC7722]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A5A5A] font-medium">Race Date</div>
                    <div className="font-bold text-[#2D2D2D]">{formatDate(race.race_date)}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-[#5A5A5A]">
                  <div className="w-10 h-10 bg-[#5A7247]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#5A7247]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A5A5A] font-medium">Location</div>
                    <div className="font-bold text-[#2D2D2D]">{race.location_city}, {race.location_province}</div>
                  </div>
                </div>
              </div>

              {race.description && (
                <div className="border-t border-[#C2B280]/20 pt-6">
                  <p className="text-lg text-[#5A5A5A] leading-relaxed">
                    {race.description}
                  </p>
                </div>
              )}
            </div>

            {/* Distances & Pricing */}
            {race.distances && race.distances.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-[#C2B280]/20 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4A7BA7]/10 rounded-xl flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#4A7BA7]" />
                  </div>
                  Distances & Entry Fees
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {race.distances.map((dist: any, idx: number) => (
                    <div 
                      key={idx}
                      className="border border-[#C2B280]/20 rounded-2xl p-5 hover:border-[#CC7722] hover:shadow-md transition-all bg-[#FAF7F0]"
                    >
                      <div className="text-2xl font-bold text-[#2D2D2D] mb-3">
                        {dist.distance}
                      </div>
                      <div className="space-y-2">
                        {dist.entry_fee && (
                          <div className="flex items-center gap-2 text-[#5A5A5A]">
                            <DollarSign className="w-4 h-4 text-[#5A7247]" />
                            <span className="font-semibold">R{dist.entry_fee.toLocaleString()}</span>
                          </div>
                        )}
                        {dist.slots && (
                          <div className="flex items-center gap-2 text-[#5A5A5A]">
                            <Users className="w-4 h-4 text-[#4A7BA7]" />
                            <span>{dist.slots.toLocaleString()} slots available</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Race Details */}
            <div className="bg-white rounded-2xl p-8 border border-[#C2B280]/20 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E67E22]/10 rounded-xl flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-[#E67E22]" />
                </div>
                Race Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                  <div className="flex items-center gap-2 text-[#5A5A5A] mb-2">
                    <Mountain className="w-5 h-5 text-[#5A5A5A]" />
                    <span className="font-semibold">Terrain</span>
                  </div>
                  <p className="text-lg text-[#2D2D2D] capitalize font-bold">{race.terrain}</p>
                </div>

                {race.elevation_gain && (
                  <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                    <div className="flex items-center gap-2 text-[#5A5A5A] mb-2">
                      <TrendingUp className="w-5 h-5 text-[#5A5A5A]" />
                      <span className="font-semibold">Elevation Gain</span>
                    </div>
                    <p className="text-lg text-[#2D2D2D] font-bold">{race.elevation_gain.toLocaleString()}m</p>
                  </div>
                )}

                {race.location_venue && (
                  <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                    <div className="flex items-center gap-2 text-[#5A5A5A] mb-2">
                      <MapPin className="w-5 h-5 text-[#5A5A5A]" />
                      <span className="font-semibold">Start Venue</span>
                    </div>
                    <p className="text-lg text-[#2D2D2D] font-bold">{race.location_venue}</p>
                  </div>
                )}

                {race.entry_opens_date && (
                  <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                    <div className="flex items-center gap-2 text-[#5A5A5A] mb-2">
                      <Clock className="w-5 h-5 text-[#5A5A5A]" />
                      <span className="font-semibold">Entries Open</span>
                    </div>
                    <p className="text-sm text-[#2D2D2D] font-bold">{formatDate(race.entry_opens_date)}</p>
                  </div>
                )}

                {race.entry_closes_date && (
                  <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                    <div className="flex items-center gap-2 text-[#5A5A5A] mb-2">
                      <Clock className="w-5 h-5 text-[#5A5A5A]" />
                      <span className="font-semibold">Entries Close</span>
                    </div>
                    <p className="text-sm text-[#2D2D2D] font-bold">{formatDate(race.entry_closes_date)}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Organizer Contact */}
            {(race.organizer_name || race.organizer_email || race.organizer_phone || race.website_url) && (
              <div className="bg-white rounded-2xl p-8 border border-[#C2B280]/20 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
                  Organizer Information
                </h2>
                <div className="space-y-4">
                  {race.organizer_name && (
                    <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#C2B280]/20">
                      <div className="font-semibold text-[#5A5A5A] mb-1 text-sm">
                        Organized by
                      </div>
                      <p className="text-lg text-[#2D2D2D] font-bold">{race.organizer_name}</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {race.organizer_email && (
                      <a 
                        href={`mailto:${race.organizer_email}`}
                        className="flex items-center gap-3 p-4 bg-[#FAF7F0] rounded-xl border border-[#C2B280]/20 hover:border-[#CC7722] hover:bg-white transition-all group"
                      >
                        <Mail className="w-5 h-5 text-[#5A5A5A] group-hover:text-[#CC7722]" />
                        <span className="text-sm text-[#5A5A5A] group-hover:text-[#CC7722] font-medium">
                          {race.organizer_email}
                        </span>
                      </a>
                    )}
                    
                    {race.organizer_phone && (
                      <a 
                        href={`tel:${race.organizer_phone}`}
                        className="flex items-center gap-3 p-4 bg-[#FAF7F0] rounded-xl border border-[#C2B280]/20 hover:border-[#CC7722] hover:bg-white transition-all group"
                      >
                        <Phone className="w-5 h-5 text-[#5A5A5A] group-hover:text-[#CC7722]" />
                        <span className="text-sm text-[#5A5A5A] group-hover:text-[#CC7722] font-medium">
                          {race.organizer_phone}
                        </span>
                      </a>
                    )}
                    
                    {race.website_url && (
                      <a 
                        href={race.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[#FAF7F0] rounded-xl border border-[#C2B280]/20 hover:border-[#CC7722] hover:bg-white transition-all group"
                      >
                        <Globe className="w-5 h-5 text-[#5A5A5A] group-hover:text-[#CC7722]" />
                        <span className="text-sm text-[#5A5A5A] group-hover:text-[#CC7722] font-medium">
                          Official Website
                        </span>
                        <ExternalLink className="w-4 h-4 ml-auto text-[#5A5A5A] group-hover:text-[#CC7722]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Register CTA */}
              <div className="bg-gradient-to-br from-[#CC7722] to-[#E67E22] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Race?
                </h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Secure your spot and start your journey to race day!
                </p>
                {race.entry_url ? (
                  <a
                    href={race.entry_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-[#CC7722] px-6 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Register Now
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-white/20 text-white px-6 py-4 rounded-full font-bold cursor-not-allowed"
                  >
                    Registration Info Coming Soon
                  </button>
                )}
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-2xl p-6 border border-[#C2B280]/20 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-4 text-lg">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[#C2B280]/20">
                    <span className="text-[#5A5A5A] text-sm">Type</span>
                    <span className="font-bold text-[#2D2D2D] text-sm">
                      {getTypeLabel(race.race_type)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#C2B280]/20">
                    <span className="text-[#5A5A5A] text-sm">Difficulty</span>
                    <span className={`font-bold text-sm px-3 py-1 rounded-full ${getDifficultyColor(race.difficulty)}`}>
                      {race.difficulty.charAt(0).toUpperCase() + race.difficulty.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#C2B280]/20">
                    <span className="text-[#5A5A5A] text-sm">Province</span>
                    <span className="font-bold text-[#2D2D2D] text-sm">
                      {race.location_province}
                    </span>
                  </div>
                  {race.distances && race.distances.length > 0 && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#5A5A5A] text-sm">Distance Options</span>
                      <span className="font-bold text-[#2D2D2D] text-sm">
                        {race.distances.length} option{race.distances.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Save/Share Placeholder */}
              <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#C2B280]/20">
                <div className="text-center text-[#5A5A5A]">
                  <Users className="w-10 h-10 mx-auto mb-3 text-[#C2B280]" />
                  <p className="text-sm font-medium">
                    Save and share features coming soon!
                  </p>
                  <p className="text-xs text-[#5A5A5A]/70 mt-2">
                    Bookmark races and share with friends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}