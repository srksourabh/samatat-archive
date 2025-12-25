export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      title: "Introduction to Acting",
      dates: "April 1-15, 2024",
      duration: "2 weeks",
      level: "Beginner",
      spots: "15 seats available"
    },
    {
      title: "Voice and Movement",
      dates: "May 5-12, 2024",
      duration: "1 week",
      level: "Intermediate",
      spots: "10 seats available"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Theatre Workshops</h1>
          <p className="text-xl text-gray-600">Learn from experienced practitioners since 2000</p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Upcoming Workshops</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, idx) => (
              <div key={idx} className="border-2 border-amber-600 rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-amber-600 uppercase">{workshop.level}</span>
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">{workshop.spots}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700">📅 {workshop.dates}</p>
                  <p className="text-gray-700">⏱️ {workshop.duration}</p>
                </div>
                <a href="#register" className="block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                  Register Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Teach</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acting Fundamentals</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Character development</li>
                <li>• Script analysis</li>
                <li>• Stage presence</li>
                <li>• Improvisation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice & Movement</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Vocal technique</li>
                <li>• Breath control</li>
                <li>• Physical theatre</li>
                <li>• Stage combat</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Skills</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Directing basics</li>
                <li>• Stage management</li>
                <li>• Lighting design</li>
                <li>• Costume design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Approach</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Instructors</h3>
              <p className="text-gray-700">Learn from practitioners with decades of stage experience and deep knowledge of Bengali theatre traditions.</p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Learning</h3>
              <p className="text-gray-700">Every workshop emphasizes practical application through exercises, scenes, and performance opportunities.</p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-700">Limited enrollment ensures personalized attention and meaningful interaction with instructors and fellow participants.</p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-700">Workshops create lasting connections among participants and opportunities to join our theatre community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Workshop History</h2>
          <p className="text-gray-700 mb-8">
            Since 2000, we have conducted over 50 workshops training more than 1,000 students in various aspects of theatre practice.
          </p>
          <a href="/archive" className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-white transition">
            Browse Workshop Archive →
          </a>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Register for a Workshop</h2>
          <p className="text-center text-amber-50 mb-8">
            Fill out the form below or contact us for more information
          </p>

          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="Your name" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="your@email.com" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg text-gray-900" placeholder="+91 XXX XXX XXXX" />
            </div>

            <div>
              <label className="block font-semibold mb-2">Workshop Interest</label>
              <select className="w-full px-4 py-3 rounded-lg text-gray-900">
                <option>Introduction to Acting</option>
                <option>Voice and Movement</option>
                <option>Other (please specify in message)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg text-gray-900" rows={4} placeholder="Tell us about your interest in theatre..."></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
