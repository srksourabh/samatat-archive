export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Samatat Sanskriti, Uttarpara
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            26 Years of Theatre, Culture, and Community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#current" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              See What&apos;s On
            </a>
            <a href="#about" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Current Announcements */}
      <section id="current" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Current & Upcoming</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Productions</h3>
              <p className="text-gray-600">Discover our latest original theatre works</p>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Festival</h3>
              <p className="text-gray-600">Annual theatre festival celebrating diverse voices</p>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Workshops</h3>
              <p className="text-gray-600">Training programs for aspiring theatre artists</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Samatat */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Samatat Sanskriti</h2>

          {/* Formal Tone */}
          <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-amber-600">
            <p className="text-sm font-semibold text-amber-600 mb-2">INSTITUTIONAL</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Established in 1999, Samatat Sanskriti, Uttarpara is a registered cultural organization dedicated to theatre practice, arts education, and community development. Operating continuously for over two decades, we maintain a comprehensive record of productions, festivals, workshops, and social initiatives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our work encompasses original theatre productions, annual theatre festivals since 2000, structured training programs, and cultural observances that serve audiences across West Bengal. We operate in full compliance with statutory requirements governing non-profit cultural organizations.
            </p>
          </div>

          {/* Warm Tone */}
          <div className="p-6 bg-white rounded-lg border-l-4 border-rose-400">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since 1999, theatre has been our language. Through stories told on stage, workshops filled with discovery, and festivals that bring us together, Samatat Sanskriti has grown from a dream into a living space where art and community meet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over 26 years, we&apos;ve gathered in Uttarpara to create, to learn, to celebrate. Every production is a conversation with our audience. Every workshop plants seeds. Every festival reminds us why theatre matters.
            </p>
          </div>
        </div>
      </section>

      {/* Theatre Productions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Theatre Productions</h2>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-amber-600 mb-2">INSTITUTIONAL</p>
            <p className="text-gray-700 leading-relaxed">
              Our production archive documents original theatrical works created between 1999 and present. Each production represents months of collaborative development, from script selection and adaptation to rehearsal and public performance. Productions are catalogued with complete cast, crew, and performance records.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed">
              Every play we create is a journey. From the first reading to opening night, our productions are built by hands, voices, and hearts working together. These are the stories we&apos;ve chosen to tell, the moments we&apos;ve shared with audiences across Bengal.
            </p>
          </div>
        </div>
      </section>

      {/* Theatre Festival */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Annual Theatre Festival</h2>

          <div className="mb-8 p-6 bg-white rounded-lg">
            <p className="text-sm font-semibold text-amber-600 mb-2">INSTITUTIONAL</p>
            <p className="text-gray-700 leading-relaxed">
              Since 2000, Samatat Sanskriti has organized an annual theatre festival featuring performances from groups across West Bengal and beyond. The festival serves as a platform for artistic exchange, audience development, and documentation of contemporary Bengali theatre practice.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed">
              For over two decades, our festival has been a gathering place. Theatre groups travel from near and far. Audiences return year after year. For those few days, Uttarpara becomes a home for stories, a meeting ground for artists, a celebration of what theatre can be.
            </p>
          </div>
        </div>
      </section>

      {/* Theatre Workshops */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Theatre Workshops & Training</h2>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-amber-600 mb-2">INSTITUTIONAL</p>
            <p className="text-gray-700 leading-relaxed">
              Our workshop programs provide structured training in theatre fundamentals, including acting technique, voice and movement, script analysis, and production skills. Programs are conducted by experienced practitioners and are open to students, aspiring professionals, and community members. Complete records are maintained from 2000 onwards.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed">
              Our workshops are where beginnings happen. Students discover their voices. Curiosity turns into skill. Strangers become ensemble. We teach what we&apos;ve learned from decades on stage, and we learn from every new participant who walks through our door.
            </p>
          </div>
        </div>
      </section>

      {/* Other Cultural Activities */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Cultural & Social Activities</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-amber-600 mb-2">Basanta Utsav</h3>
              <p className="text-gray-600">Annual celebration of spring through cultural programs</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-amber-600 mb-2">Children&apos;s Film Festival</h3>
              <p className="text-gray-600">Curated screenings for young audiences</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-amber-600 mb-2">Bhasha Dibas</h3>
              <p className="text-gray-600">International Mother Language Day observance</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-amber-600 mb-2">Ravindra Jayanti</h3>
              <p className="text-gray-600">Tagore birth anniversary programs</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed">
              Beyond theatre, we mark the seasons and honor our heritage. These celebrations connect us to our cultural roots and to each other, reminding us that art is not separate from life but woven through it.
            </p>
          </div>
        </div>
      </section>

      {/* Archive & Legacy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Archive & Legacy</h2>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-amber-600 mb-2">INSTITUTIONAL</p>
            <p className="text-gray-700 leading-relaxed">
              Our digital archive contains comprehensive documentation of 26 years of cultural activity. Materials include production records, festival programs, workshop curricula, photographs, publicity materials, and institutional records. The archive serves researchers, students, and cultural historians studying contemporary Bengali theatre.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-rose-600 mb-2">COMMUNITY</p>
            <p className="text-gray-700 leading-relaxed">
              Twenty-six years of moments live here. Photographs of faces lit by stage lights. Programs from festivals that brought us together. Records of every workshop, every play, every gathering. This archive is our memory, preserved so that the work continues.
            </p>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Governance & Transparency</h2>

          <div className="p-6 bg-white rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              As a registered non-profit organization, we maintain full compliance with statutory requirements. Our governance documents, annual reports, and financial statements are available for public review.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Committee Formation</h3>
                <p className="text-sm text-gray-600">Current executive body and roles</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Annual General Meetings</h3>
                <p className="text-sm text-gray-600">AGM records and resolutions</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Annual Reports</h3>
                <p className="text-sm text-gray-600">Activity and financial summaries</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">NGO Compliance</h3>
                <p className="text-sm text-gray-600">Registration and regulatory documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage with Us */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Engage With Us</h2>
          <p className="text-xl mb-12 text-amber-50">
            There are many ways to be part of Samatat Sanskriti
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Join as Activist</h3>
              <p className="text-sm mb-4">Help organize events and activities</p>
              <a href="#join" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Join as Theatre Worker</h3>
              <p className="text-sm mb-4">Act, direct, design, or crew</p>
              <a href="#join" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Attend a Workshop</h3>
              <p className="text-sm mb-4">Learn theatre skills and techniques</p>
              <a href="#workshops" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-700 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Request a Performance</h3>
              <p className="text-sm mb-4">Bring our productions to your venue</p>
              <a href="#contact" className="text-white font-semibold hover:text-amber-100">Contact Us →</a>
            </div>
            <div className="bg-amber-700 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Support Our Work</h3>
              <p className="text-sm mb-4">Donate to sustain our programs</p>
              <a href="#donate" className="text-white font-semibold hover:text-amber-100">Donate →</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
