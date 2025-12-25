export default function FestivalsPage() {
  const festivals = [
    { year: 2024, title: "Annual Theatre Festival 2024", dates: "March 15-22, 2024", groups: 12 },
    { year: 2023, title: "Annual Theatre Festival 2023", dates: "March 10-17, 2023", groups: 10 },
    { year: 2022, title: "Annual Theatre Festival 2022", dates: "March 12-19, 2022", groups: 8 },
    { year: 2021, title: "Annual Theatre Festival 2021", dates: "March 14-21, 2021", groups: 7 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Theatre Festival</h1>
          <p className="text-xl text-gray-600">Annual celebration since 2000</p>
        </div>
      </section>

      {/* About Festival */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Festival</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Since 2000, Samatat Sanskriti has hosted an annual theatre festival that brings together groups from across West Bengal and beyond. The festival serves as a platform for artistic exchange, showcasing diverse theatrical styles and traditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Each year, we welcome established companies and emerging artists, creating a space where innovation meets tradition, and where audiences can experience the full spectrum of contemporary Bengali theatre.
            </p>
          </div>
        </div>
      </section>

      {/* Festival List */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Festival Archive</h2>

          <div className="space-y-6">
            {festivals.map((fest, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-amber-600 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="text-3xl font-bold text-amber-600 mb-2">{fest.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{fest.title}</h3>
                    <p className="text-gray-600 mb-2">{fest.dates}</p>
                    <p className="text-sm text-gray-500">{fest.groups} participating theatre groups</p>
                  </div>
                  <div>
                    <a href="#" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Explore our complete festival history from 2000 to present</p>
            <a href="/archive" className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
              Full Archive →
            </a>
          </div>
        </div>
      </section>

      {/* Participate */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Participate in Our Festival</h2>
          <p className="text-xl text-amber-50 mb-8">
            Are you a theatre group interested in performing at our next festival?
          </p>
          <a href="/contact" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  );
}
