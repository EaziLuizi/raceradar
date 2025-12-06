import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About RaceRadar
          </h1>
          <p className="text-xl text-orange-100">
            Your gateway to discovering incredible racing experiences across South Africa
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Mission Statement */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              RaceRadar exists to connect South African athletes with the races that inspire them. 
              Whether you're a seasoned ultra-runner tackling the Drakensberg, a road cyclist exploring 
              the Cape, or someone looking to complete their first 5K, we believe everyone deserves 
              easy access to the events that will challenge and excite them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're building a platform that celebrates South Africa's diverse racing landscape—from 
              the mountain trails of Mpumalanga to the coastal routes of KwaZulu-Natal, and everything 
              in between.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Comprehensive Discovery
                </h3>
                <p className="text-gray-700">
                  Browse hundreds of races across all disciplines—trail running, road racing, 
                  cycling, mountain biking, triathlons, and more.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Local Focus
                </h3>
                <p className="text-gray-700">
                  Every province, every terrain. Find races in your backyard or plan your next 
                  racing adventure across South Africa.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Smart Filtering
                </h3>
                <p className="text-gray-700">
                  Search by location, race type, difficulty, and dates to find exactly what 
                  you're looking for—no more endless scrolling.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <div className="text-3xl mb-3">⭐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Curated Features
                </h3>
                <p className="text-gray-700">
                  Discover standout events through our featured races and popular picks, 
                  highlighting the best South Africa has to offer.
                </p>
              </div>

            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              RaceRadar was born from a simple frustration: finding races in South Africa was harder 
              than it should be. Information was scattered across multiple platforms, event details 
              were often outdated, and discovering new races meant endless Googling and hoping you 
              hadn't missed a registration deadline.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As athletes ourselves—passionate about trail running, obstacle course racing, and 
              triathlons—we knew there had to be a better way. We envisioned a single platform where 
              South African endurance athletes could discover, compare, and plan their racing calendar 
              with confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              So we built RaceRadar: a platform designed by athletes, for athletes. We're proud to 
              celebrate the incredible diversity of South African racing, and we're just getting started.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Athletes First
                </h3>
                <p className="text-gray-700">
                  Every decision we make prioritizes the athlete experience—simple, fast, and helpful.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  South African Pride
                </h3>
                <p className="text-gray-700">
                  We celebrate the unique spirit and incredible diversity of South African racing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Trust & Accuracy
                </h3>
                <p className="text-gray-700">
                  Reliable information you can count on when planning your racing journey.
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Discover Your Next Challenge?
            </h2>
            <p className="text-xl text-orange-100 mb-6">
              Join thousands of athletes finding their perfect race on RaceRadar
            </p>
            <Link
              href="/races"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Browse All Races
            </Link>
          </div>

          {/* Contact Section */}
          <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Get In Touch
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Have questions, suggestions, or want to list your race? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hello@raceradar.co.za"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-colors"
              >
                <span>📧</span>
                hello@raceradar.co.za
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}