export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Samatat Sanskriti</h1>
          <p className="text-xl text-gray-600">26 Years of Theatre Excellence</p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our History</h2>

          <div className="space-y-12">
            {/* Timeline */}
            <div className="border-l-4 border-amber-600 pl-8 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 bg-amber-600 rounded-full -ml-[42px]"></div>
                  <span className="text-2xl font-bold text-amber-600">1999</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                <p className="text-gray-700">Samatat Sanskriti was founded in Uttarpara with a vision to create meaningful theatre that speaks to the community.</p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 bg-amber-600 rounded-full -ml-[42px]"></div>
                  <span className="text-2xl font-bold text-amber-600">2000</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">First Festival</h3>
                <p className="text-gray-700">Launched our annual theatre festival, creating a platform for diverse theatrical voices from across West Bengal.</p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 bg-amber-600 rounded-full -ml-[42px]"></div>
                  <span className="text-2xl font-bold text-amber-600">2000-Present</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                <p className="text-gray-700">Over 26 years of original productions, workshops, and cultural programs serving audiences across Bengal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading cultural institution that preserves theatrical traditions while innovating for contemporary audiences, fostering community through the transformative power of theatre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-rose-600">
              <h3 className="text-2xl font-bold text-rose-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create original theatrical works, provide education and training, preserve our cultural heritage, and serve as a gathering place for artists and audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Artistic Director</h3>
              <p className="text-gray-600 mb-2">Founding Member</p>
              <p className="text-sm text-gray-500">Leading the artistic vision since 1999</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Managing Director</h3>
              <p className="text-gray-600 mb-2">Operations & Development</p>
              <p className="text-sm text-gray-500">Overseeing programs and community outreach</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Technical Director</h3>
              <p className="text-gray-600 mb-2">Production & Design</p>
              <p className="text-sm text-gray-500">Managing technical aspects of all productions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">26+</div>
              <p className="text-gray-700 font-semibold">Years of Service</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Productions</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Workshops</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Students Trained</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
