// src/app/races/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Search, Calendar, MapPin, TrendingUp, Filter } from 'lucide-react'
import Link from 'next/link'

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
      .gte('race_date', new Date().toISOString().split('T')[0]) // Only future races
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">RaceRadar</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Next Race
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {filteredRaces.length} upcoming races across South Africa
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="flex gap-2 p-2 bg-white rounded-xl">
              <input
                type="text"
                placeholder="Search races or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-slate-600" />
                <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
              </div>

              {/* Province Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Province
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Race Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="trail">Trail Running</option>
                  <option value="road">Road Running</option>
                  <option value="ultra">Ultra Marathon</option>
                  <option value="cycling">Road Cycling</option>
                  <option value="mtb">Mountain Biking</option>
                  <option value="triathlon">Triathlon</option>
                  <option value="obstacle">Obstacle Course</option>
                  <option value="swimming">Swimming</option>
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Race Cards Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-slate-600 mt-4">Loading races...</p>
              </div>
            ) : filteredRaces.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-600 text-lg">No races found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedProvince('all')
                    setSelectedType('all')
                    setSelectedDifficulty('all')
                    setSearchQuery('')
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
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
        return 'bg-green-100 text-green-700'
      case 'moderate':
        return 'bg-yellow-100 text-yellow-700'
      case 'hard':
        return 'bg-orange-100 text-orange-700'
      case 'extreme':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-slate-100 text-slate-700'
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
      swimming: 'Swim',
    }
    return labels[type] || type
  }

  return (
    <Link href={`/races/${race.slug}`}>
      <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer overflow-hidden group">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative overflow-hidden">
          {race.image_url ? (
            <img src={race.image_url} alt={race.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-white opacity-50" />
            </div>
          )}
          <div className="absolute top-4 right-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(race.difficulty)}`}>
              {race.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-700">
              {getTypeLabel(race.race_type)}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {race.name}
          </h3>

          <div className="flex items-center gap-2 text-slate-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formatDate(race.race_date)}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {race.location_city}, {race.location_province}
            </span>
          </div>

          {race.distances && race.distances.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {race.distances.slice(0, 3).map((dist: any, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                >
                  {dist.distance}
                </span>
              ))}
              {race.distances.length > 3 && (
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                  +{race.distances.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
