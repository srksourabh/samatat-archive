export default function ShowsPage() {
  const productions = [
    {
      title: "Recent Production 2024",
      year: 2024,
      synopsis: "Our latest theatrical work exploring contemporary themes",
      status: "Current Season"
    },
    {
      title: "Annual Showcase 2023",
      year: 2023,
      synopsis: "A celebration of Bengali theatre traditions",
      status: "Archive"
    },
    {
      title: "Classical Revival 2022",
      year: 2022,
      synopsis: "Modern interpretation of classical Bengali drama",
      status: "Archive"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Theatre Productions</h1>
          <p className="text-xl text-gray-600">Original works from 1999 to present</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-amber-600 text-white rounded-lg font-semibold">All</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">Current</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">2020s</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">2010s</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">2000s</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">1990s</button>
        </div>
      </section>

      {/* Productions Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productions.map((prod, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-amber-600">{prod.year}</span>
                    <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full">{prod.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prod.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{prod.synopsis}</p>
                  <a href="#" className="text-amber-600 font-semibold hover:text-amber-700">View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Note */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Production Archive</h2>
          <p className="text-gray-700 mb-8">
            Browse our complete archive of productions from 1999 to present, including cast lists, crew credits, photographs, and production notes.
          </p>
          <a href="/archive" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
            Explore Archive →
          </a>
        </div>
      </section>
    </div>
  );
}
