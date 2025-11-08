'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Search, Calendar, MapPin, TrendingUp, Filter, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Race {
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
}

export default function RacesPage() {
  const [races, setRaces] = useState<Race[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  useEffect(() => {
    fetchRaces()
  }, [selectedProvince, selectedType, selectedDifficulty])

  async function fetchRaces() {
    setLoading(true)
    let query = supabase
      .from('races')
      .select('*')
      .eq('status', 'active')
      .gte('race_date', new Date().toISOString().split('T')[0])
      .order('race_date', { ascending: true })

    if (selectedProvince !== 'all') {
      query = query.eq('location_province', selectedProvince)
    }

    if (selectedType !== 'all') {
      query = query.eq('race_type', selectedType)
    }

    if (selectedDifficulty !== 'all') {
      query = query.eq('difficulty', selectedDifficulty)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching races:', error)
    } else {
      setRaces(data || [])
    }
    setLoading(false)
  }

  const filteredRaces = races.filter((race) =>
    race.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    race.location_city.toLowerCase().includes(searchQuery.toLowerCase())
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Race
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {filteredRaces.length} upcoming races across South Africa
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-lg">
              <input
                type="text"
                placeholder="Search races or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border-0 text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#CC7722]"
              />
              <button className="bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-[#C2B280]/20 sticky top-24 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#CC7722]" />
                <h2 className="text-lg font-bold text-[#2D2D2D]">Filters</h2>
              </div>

              {/* Province Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Province
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full px-3 py-2 border border-[#C2B280]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC7722] bg-[#FAF7F0] text-[#2D2D2D]"
                >
                  <option value="all">All Provinces</option>
                  <option value="Western Cape">Western Cape</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="North West">North West</option>
                  <option value="Free State">Free State</option>
                  <option value="Northern Cape">Northern Cape</option>
                </select>
              </div>

              {/* Race Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Race Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-[#C2B280]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC7722] bg-[#FAF7F0] text-[#2D2D2D]"
                >
                  <option value="all">All Types</option>
                  <option value="trail">Trail Running</option>
                  <option value="road">Road Running</option>
                  <option value="ultra">Ultra Marathon</option>
                  <option value="cycling">Road Cycling</option>
                  <option value="mtb">Mountain Biking</option>
                  <option value="triathlon">Triathlon</option>
                  <option value="obstacle">Obstacle Course</option>
                  <option value="duathlon">Duathlon</option>
                  <option value="swimming">Swimming</option>
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-[#C2B280]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC7722] bg-[#FAF7F0] text-[#2D2D2D]"
                >
                  <option value="all">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="hard">Hard</option>
                  <option value="extreme">Extreme</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setSelectedProvince('all')
                  setSelectedType('all')
                  setSelectedDifficulty('all')
                  setSearchQuery('')
                }}
                className="w-full py-2 text-sm text-[#CC7722] hover:text-[#E67E22] font-semibold hover:bg-[#FAF7F0] rounded-xl transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Race Cards Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CC7722] mx-auto"></div>
                <p className="text-[#5A5A5A] mt-4">Loading races...</p>
              </div>
            ) : filteredRaces.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#C2B280]/20 shadow-sm">
                <p className="text-[#5A5A5A] text-lg mb-4">No races found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedProvince('all')
                    setSelectedType('all')
                    setSelectedDifficulty('all')
                    setSearchQuery('')
                  }}
                  className="text-[#CC7722] hover:text-[#E67E22] font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredRaces.map((race) => (
                  <RaceCard key={race.id} race={race} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function RaceCard({ race }: { race: Race }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-ZA', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
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
          <div className="pt-4 border-t border-[#C2B280]/20">
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