// src/app/page.tsx
import Link from 'next/link'
import { Search, Calendar, Users, Trophy, MapPin, Bell } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">RaceRadar</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/races" className="text-slate-600 hover:text-slate-900 font-medium">
              Find Races
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
              About
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 font-medium">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Find Your Next
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              {' '}Race
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            Every trail run, road race, triathlon, and cycling event in South Africa.
            <br />
            One platform. Zero hassle.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-lg border border-slate-200">
              <input
                type="text"
                placeholder="Search races, locations, or dates..."
                className="flex-1 px-6 py-4 text-lg rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span><strong className="text-slate-900">200+</strong> upcoming races</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span><strong className="text-slate-900">10,000+</strong> athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span><strong className="text-slate-900">All 9</strong> provinces</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Race
            </h2>
            <p className="text-xl text-slate-600">
              More than just a race calendar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Smart Search
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Filter by distance, terrain, difficulty, and location. Find exactly the race you're looking for in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Your Race Calendar
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Save races you're interested in. Track your race history. Plan your entire racing season in one place.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Find Race Buddies
              </h3>
              <p className="text-slate-600 leading-relaxed">
                See who's racing. Connect with other athletes. Find training partners for your next big challenge.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Never Miss Entries
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Get notified when entries open. Alerts for races you're watching. No more sold-out disappointments.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Race Reviews
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Read honest reviews from real athletes. Make informed decisions. Share your own race experiences.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Discover New Routes
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Explore races you've never heard of. Find hidden gems in your province. Expand your racing horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Race Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              All Race Types, One Place
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Trail Running', 'Road Running', 'Ultra Marathon', 'Cycling', 'Mountain Biking', 'Triathlon', 'Obstacle Course', 'Swimming'].map((type) => (
              <Link
                key={type}
                href={`/races?type=${type.toLowerCase()}`}
                className="px-6 py-3 bg-white rounded-full border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 font-medium transition-colors"
              >
                {type}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Next Race?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of South African athletes using RaceRadar to discover and plan their racing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Create Free Account
            </Link>
            <Link
              href="/races"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2 border-2 border-blue-400"
            >
              Browse Races
              <Search className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RaceRadar</span>
              </div>
              <p className="text-sm">
                South Africa's comprehensive race discovery platform.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/races" className="hover:text-white">Find Races</Link></li>
                <li><Link href="/calendar" className="hover:text-white">Race Calendar</Link></li>
                <li><Link href="/organizers" className="hover:text-white">For Organizers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/guides" className="hover:text-white">Race Guides</Link></li>
                <li><Link href="/training" className="hover:text-white">Training Tips</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 RaceRadar. Built with ❤️ for South African athletes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
