import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF7F0]/95 backdrop-blur-sm z-50 border-b border-[#C2B280]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="RaceRadar Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-[#2D2D2D]">RaceRadar</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">Home</Link>
              <Link href="/races" className="text-[#2D2D2D] hover:text-[#CC7722] transition-colors">Discover Races</Link>
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background with organic shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4526E]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A7BA7]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-[#5A7247]/10 text-[#5A7247] px-4 py-2 rounded-full text-sm font-medium">
                  South Africa's Race Discovery Platform
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-6 leading-tight">
                Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CC7722] to-[#E67E22]">
                  Adventure
                </span>
                Awaits
              </h1>
              <p className="text-xl text-[#5A5A5A] mb-8 leading-relaxed">
                From the Drakensberg peaks to the Wild Coast trails, discover races that match your passion. 
                Trail runs, road races, OCR challenges – all in one place.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/races" className="bg-gradient-to-r from-[#CC7722] to-[#E67E22] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all text-center font-semibold">
                  Explore Races
                </Link>
                <button className="border-2 border-[#CC7722] text-[#CC7722] px-8 py-4 rounded-full hover:bg-[#CC7722] hover:text-white transition-all font-semibold">
                  List Your Race
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#C2B280]/30">
                <div>
                  <div className="text-3xl font-bold text-[#CC7722]">500+</div>
                  <div className="text-sm text-[#5A5A5A]">Active Races</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#CC7722]">9</div>
                  <div className="text-sm text-[#5A5A5A]">Provinces</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#CC7722]">8</div>
                  <div className="text-sm text-[#5A5A5A]">Categories</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#4A7BA7] to-[#5A7247]">
                  <Image
                    src="/images/hero-image-table-mountain.jpg"
                    alt="Trail runner with Table Mountain backdrop"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4526E] to-[#E67E22] rounded-xl"></div>
                  <div>
                    <div className="font-semibold text-[#2D2D2D]">Otter Trail Run</div>
                    <div className="text-sm text-[#5A5A5A]">Garden Route • 42km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Why RaceRadar?</h2>
            <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto">
              Built by South African runners, for South African runners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#FAF7F0] p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A7BA7] to-[#5A7247] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Smart Discovery</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Filter by location, distance, terrain, and date. Find races that match your goals, from your first 5k to ultra marathons.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FAF7F0] p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC7722] to-[#E67E22] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Local Focus</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Every race, every province, every terrain. From Cape Town beaches to Gauteng roads to KZN trails.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FAF7F0] p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4526E] to-[#CC7722] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Easy Registration</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                One click to official race registration. No more hunting through multiple sites to find entry forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Races */}
      <section className="py-20 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#2D2D2D] mb-2">Featured Races</h2>
              <p className="text-[#5A5A5A]">Upcoming highlights you won't want to miss</p>
            </div>
            <Link href="/races" className="text-[#CC7722] hover:text-[#E67E22] font-semibold flex items-center space-x-2">
              <span>View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hout Bay Trail Challenge",
                location: "Western Cape",
                date: "15 Dec 2025",
                distance: "21km",
                category: "Trail Running",
                color: "from-[#4A7BA7] to-[#5A7247]"
              },
              {
                name: "Midmar Mile",
                location: "KwaZulu-Natal",
                date: "8 Feb 2026",
                distance: "1.6km",
                category: "Open Water Swimming",
                color: "from-[#CC7722] to-[#E67E22]"
              },
              {
                name: "Warrior Race Gauteng",
                location: "Gauteng",
                date: "22 Mar 2026",
                distance: "8km",
                category: "Obstacle Course Racing",
                color: "from-[#D4526E] to-[#E67E22]"
              }
            ].map((race, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group">
                <div className={`h-48 bg-gradient-to-br ${race.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                    [Race Image]
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2D2D2D] px-3 py-1 rounded-full text-sm font-medium">
                      {race.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#CC7722] transition-colors">
                    {race.name}
                  </h3>
                  <div className="space-y-2 text-sm text-[#5A5A5A] mb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-[#CC7722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{race.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-[#CC7722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-[#CC7722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>{race.distance}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#FAF7F0] hover:bg-[#CC7722] hover:text-white text-[#2D2D2D] py-3 rounded-xl font-semibold transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#CC7722] to-[#E67E22] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Next Challenge?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of South African athletes discovering races they love
          </p>
          <Link href="/races" className="inline-block bg-white text-[#CC7722] px-8 py-4 rounded-full hover:shadow-xl transition-all font-semibold">
            Start Exploring Races
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#CC7722] to-[#E67E22] rounded-lg"></div>
                <span className="text-xl font-bold">RaceRadar</span>
              </div>
              <p className="text-white/70 text-sm">
                South Africa's premier race discovery platform. Find your next adventure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Discover</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/races" className="hover:text-white transition-colors">Browse Races</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Organizers</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/list-race" className="hover:text-white transition-colors">List Your Race</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            © 2025 RaceRadar. Built with ❤️ for South African athletes.
          </div>
        </div>
      </footer>
    </div>
  );
}