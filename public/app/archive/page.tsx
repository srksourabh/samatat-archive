export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Digital Archive</h1>
          <p className="text-xl text-gray-600">26 years of theatre history, preserved and accessible</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search productions, people, or keywords..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All</option>
                <option>Productions</option>
                <option>Festivals</option>
                <option>Workshops</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Decade</label>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Years</option>
                <option>2020s</option>
                <option>2010s</option>
                <option>2000s</option>
                <option>1990s</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Media Type</label>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All</option>
                <option>Images</option>
                <option>Videos</option>
                <option>Documents</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Archive Contents</h2>

          {/* Timeline View */}
          <div className="space-y-12">
            {/* Year Group */}
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-6 sticky top-0 bg-white py-2">2024</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8">
                <div className="border rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-sm font-semibold text-amber-600 mb-2">PRODUCTION</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Latest Production</h4>
                  <p className="text-sm text-gray-600 mb-4">Complete production materials including cast photos, program, and reviews</p>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>📸 25 images</span>
                    <span>📄 5 docs</span>
                  </div>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-sm font-semibold text-amber-600 mb-2">FESTIVAL</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Annual Festival 2024</h4>
                  <p className="text-sm text-gray-600 mb-4">Festival program, participant list, and event photos</p>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>📸 50 images</span>
                    <span>📄 8 docs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Year Group */}
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-6 sticky top-0 bg-white py-2">2023</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8">
                <div className="border rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-sm font-semibold text-amber-600 mb-2">PRODUCTION</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">2023 Showcase</h4>
                  <p className="text-sm text-gray-600 mb-4">Annual showcase production materials</p>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>📸 30 images</span>
                    <span>🎬 2 videos</span>
                  </div>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-sm font-semibold text-amber-600 mb-2">WORKSHOP</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Acting Workshop 2023</h4>
                  <p className="text-sm text-gray-600 mb-4">Workshop curriculum and participant photos</p>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>📸 15 images</span>
                    <span>📄 3 docs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Info */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Researchers</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our digital archive serves as a resource for theatre historians, students, and researchers studying contemporary Bengali theatre. All materials are documented with metadata including dates, personnel, and context.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Archive Contents</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Production records (1999-present)</li>
                  <li>• Festival documentation</li>
                  <li>• Workshop curricula</li>
                  <li>• Photographs and videos</li>
                  <li>• Programs and publicity materials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Citation Guidelines</h3>
                <p className="text-sm text-gray-600 mb-4">
                  When citing materials from this archive, please include the production/event title, year, and archive URL.
                </p>
                <a href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">Request Access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
