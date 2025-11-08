'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RacesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvince, setSelectedProvince] = useState('All');

  const categories = ['All', 'Trail Running', 'Road Running', 'Obstacle Course Racing', 'Triathlon', 'Cycling', 'Open Water Swimming'];
  const provinces = ['All', 'Western Cape', 'Gauteng', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West'];

  const races = [
    { id: 1, name: "Table Mountain Challenge", location: "Western Cape, Cape Town", date: "2025-12-15", distance: "28km", elevation: "1800m", category: "Trail Running", price: "R450", color: "from-[#4A7BA7] to-[#5A7247]" },
    { id: 2, name: "Two Oceans Marathon", location: "Western Cape, Cape Town", date: "2026-04-18", distance: "56km", elevation: "350m", category: "Road Running", price: "R580", color: "from-[#CC7722] to-[#E67E22]" },
    { id: 3, name: "Otter Trail Run", location: "Western Cape, Garden Route", date: "2026-05-10", distance: "42km", elevation: "2400m", category: "Trail Running", price: "R650", color: "from-[#5A7247] to-[#4A7BA7]" },
    { id: 4, name: "Comrades Marathon", location: "KwaZulu-Natal, Durban to PMB", date: "2026-06-14", distance: "87km", elevation: "900m", category: "Road Running", price: "R520", color: "from-[#D4526E] to-[#E67E22]" },
    { id: 5, name: "Midmar Mile", location: "KwaZulu-Natal, Howick", date: "2026-02-08", distance: "1.6km", elevation: "0m", category: "Open Water Swimming", price: "R250", color: "from-[#4A7BA7] to-[#CC7722]" },
    { id: 6, name: "Warrior Race Pretoria", location: "Gauteng, Pretoria", date: "2026-03-22", distance: "8km", elevation: "150m", category: "Obstacle Course Racing", price: "R380", color: "from-[#E67E22] to-[#D4526E]" },
    { id: 7, name: "Momentum 94.7 Cycle Challenge", location: "Gauteng, Johannesburg", date: "2025-11-16", distance: "94km", elevation: "600m", category: "Cycling", price: "R420", color: "from-[#5A7247] to-[#CC7722]" },
    { id: 8, name: "Wild Coast Trail Run", location: "Eastern Cape, Coffee Bay", distance: "21km", date: "2026-07-05", elevation: "1200m", category: "Trail Running", price: "R400", color: "from-[#4A7BA7] to-[#5A7247]" },
    { id: 9, name: "Ironman South Africa", location: "Eastern Cape, Nelson Mandela Bay", date: "2026-04-05", distance: "226km", elevation: "1500m", category: "Triathlon", price: "R3500", color: "from-[#CC7722] to-[#D4526E]" },
  ];

  const filteredRaces = races.filter(race => {
    const categoryMatch = selectedCategory === 'All' || race.category === selectedCategory;
    const provinceMatch = selectedProvince === 'All' || race.location.includes(selectedProvince);
    return categoryMatch && provinceMatch;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF7F0]/95 backdrop-blur-sm z-50 border-b border-[#C2B280]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#CC7722] to-[#E67E22] rounded-lg"></div>
              <span className="text-2xl font-bold text-[#2D2D2D]">RaceRadar</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">Home</Link>
              <Link href="/races" className="text-[#CC7722] font-semibold">Discover Races</Link>
              <Link href="/about" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">About</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-[#4A7BA7]/10 via-[#FAF7F0] to-[#5A7247]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-[#2D2D2D] mb-4">
              Discover Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CC7722] to-[#E67E22]">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto">
              Explore {filteredRaces.length} races across South Africa's most stunning landscapes
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center">
              <div className="flex-1 flex items-center space-x-3 px-4">
                <svg className="w-5 h-5 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for races, locations, or events..."
                  className="flex-1 py-3 outline-none text-[#2D2D2D]"
                />
              </div>
              <button className="bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#CC7722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#2D2D2D] mb-3 text-sm uppercase tracking-wide">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-xl transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white shadow-md'
                          : 'bg-[#FAF7F0] text-[#2D2D2D] hover:bg-[#C2B280]/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Province Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#2D2D2D] mb-3 text-sm uppercase tracking-wide">Province</h4>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border-2 border-[#C2B280]/20 text-[#2D2D2D] focus:border-[#CC7722] focus:outline-none"
                >
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              {/* Distance Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#2D2D2D] mb-3 text-sm uppercase tracking-wide">Distance</h4>
                <div className="space-y-2">
                  {['< 10km', '10-21km', '21-42km', '42km+', 'Ultra'].map(distance => (
                    <label key={distance} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-[#C2B280] text-[#CC7722] focus:ring-[#CC7722]" />
                      <span className="text-[#2D2D2D]">{distance}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedProvince('All');
                }}
                className="w-full border-2 border-[#C2B280]/30 text-[#5A5A5A] py-3 rounded-xl hover:bg-[#FAF7F0] transition-all font-semibold"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Race Cards Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#5A5A5A]">
                Showing <span className="font-semibold text-[#CC7722]">{filteredRaces.length}</span> races
              </p>
              <select className="px-4 py-2 rounded-xl bg-white border-2 border-[#C2B280]/20 text-[#2D2D2D] focus:border-[#CC7722] focus:outline-none">
                <option>Sort: Upcoming</option>
                <option>Sort: Distance</option>
                <option>Sort: Price</option>
                <option>Sort: Popularity</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredRaces.map(race => (
                <div key={race.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`h-48 bg-gradient-to-br ${race.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                      [Race Image: {race.name}]
                    </div>
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="bg-white/90 backdrop-blur-sm text-[#2D2D2D] px-3 py-1 rounded-full text-sm font-medium">
                        {race.category}
                      </span>
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all">
                        <svg className="w-5 h-5 text-[#CC7722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#CC7722] transition-colors">
                      {race.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-[#5A5A5A]">
                        <svg className="w-4 h-4 text-[#CC7722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="truncate">{race.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#5A5A5A]">
                        <svg className="w-4 h-4 text-[#CC7722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(race.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#5A5A5A]">
                        <svg className="w-4 h-4 text-[#CC7722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>{race.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#5A5A5A]">
                        <svg className="w-4 h-4 text-[#CC7722] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span>{race.elevation} gain</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#C2B280]/20">
                      <div>
                        <div className="text-2xl font-bold text-[#CC7722]">{race.price}</div>
                        <div className="text-xs text-[#5A5A5A]">Entry fee</div>
                      </div>
                      <button className="bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold">
                        View Race
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="border-2 border-[#CC7722] text-[#CC7722] px-8 py-4 rounded-full hover:bg-[#CC7722] hover:text-white transition-all font-semibold">
                Load More Races
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-white/70">
            © 2025 RaceRadar. Built with ❤️ for South African athletes.
          </div>
        </div>
      </footer>
    </div>
  );
}