export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Impact</h1>
          <p className="text-xl text-gray-600">Measuring our contribution to theatre and community</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">By the Numbers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">26+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Years of Service</p>
              <p className="text-sm text-gray-600">Since 1999</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">100+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Productions</p>
              <p className="text-sm text-gray-600">Original theatrical works</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">25</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Festival Editions</p>
              <p className="text-sm text-gray-600">Annual since 2000</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">50+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Workshops</p>
              <p className="text-sm text-gray-600">Training programs</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">1000+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Students Trained</p>
              <p className="text-sm text-gray-600">Across all workshops</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">200+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Visiting Groups</p>
              <p className="text-sm text-gray-600">At our festivals</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">50K+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Audience Members</p>
              <p className="text-sm text-gray-600">Over 26 years</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-6xl font-bold text-amber-600 mb-3">100+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Active Members</p>
              <p className="text-sm text-gray-600">Current community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Community Impact</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Arts Education</h3>
              <p className="text-gray-700 leading-relaxed">
                Through our workshop programs, we have provided accessible arts education to students, professionals, and community members of all backgrounds. Our training emphasizes both traditional Bengali theatre forms and contemporary techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Cultural Preservation</h3>
              <p className="text-gray-700 leading-relaxed">
                Our archive documents 26 years of Bengali theatre practice, preserving performances, scripts, and production materials for future generations of artists and researchers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Artist Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Many of our alumni have gone on to successful careers in theatre, film, and related fields. Our community provides mentorship, networking, and performance opportunities for emerging artists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Social Engagement</h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond entertainment, our work addresses social issues, celebrates cultural heritage, and creates spaces for community dialogue through the transformative power of theatre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Alumni Profile</h3>
              <p className="text-sm text-gray-600 mb-2">Started with us in 2010</p>
              <p className="text-gray-700">Now a professional theatre director working across Bengal</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Workshop Graduate</h3>
              <p className="text-sm text-gray-600 mb-2">Completed 5 workshops</p>
              <p className="text-gray-700">Founded their own community theatre group</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Long-time Member</h3>
              <p className="text-sm text-gray-600 mb-2">Member since 2005</p>
              <p className="text-gray-700">Directed 10 productions and mentors new members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Annual Reports</h2>
          <p className="text-center text-gray-700 mb-12">
            Detailed reports on our activities, finances, and impact
          </p>

          <div className="bg-white rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
                <div>
                  <h3 className="font-bold text-gray-900">Annual Report 2023-24</h3>
                  <p className="text-sm text-gray-600">Complete activities and financial summary</p>
                </div>
                <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">Download PDF →</a>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
                <div>
                  <h3 className="font-bold text-gray-900">Annual Report 2022-23</h3>
                  <p className="text-sm text-gray-600">Complete activities and financial summary</p>
                </div>
                <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">Download PDF →</a>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
                <div>
                  <h3 className="font-bold text-gray-900">Annual Report 2021-22</h3>
                  <p className="text-sm text-gray-600">Complete activities and financial summary</p>
                </div>
                <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">Download PDF →</a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="/statutory" className="text-amber-600 font-semibold hover:text-amber-700">
                View All Reports & Documents →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
