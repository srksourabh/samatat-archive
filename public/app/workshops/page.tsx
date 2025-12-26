import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';

const workshopYears = [
  { year: '2024', description: 'Current year workshops and upcoming programs', href: '/workshops/2024' },
  { year: '2023', description: 'Acting fundamentals and voice training workshops', href: '/workshops/2023' },
  { year: '2022', description: 'Post-pandemic revival programs', href: '/workshops/2022' },
  { year: '2021', description: 'Online and hybrid workshop series', href: '/workshops/2021' },
];

export default function WorkshopsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Theatre Training"
        title={{ en: 'Theatre Workshops', bn: 'থিয়েটার কর্মশালা', hi: 'थिएटर कार्यशालाएं' }}
        description={{ en: 'Since 2000, we have trained over 1,000 aspiring theatre artists through our comprehensive workshop programs.', bn: '২০০০ সাল থেকে, আমরা আমাদের ব্যাপক কর্মশালা কার্যক্রমের মাধ্যমে ১,০০০-এরও বেশি উচ্চাকাঙ্ক্ষী থিয়েটার শিল্পীকে প্রশিক্ষিত করেছি।', hi: '2000 से, हमने अपने व्यापक कार्यशाला कार्यक्रमों के माध्यम से 1,000 से अधिक इच्छुक थिएटर कलाकारों को प्रशिक्षित किया है।' }}
      />

      {/* What We Teach */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-8">What We Teach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <span className="text-4xl mb-4 block">🎭</span>
              <h3 className="card-title">Acting Fundamentals</h3>
              <p className="card-description">Character development, script analysis, stage presence, and improvisation techniques.</p>
            </div>
            <div className="card p-6">
              <span className="text-4xl mb-4 block">🗣️</span>
              <h3 className="card-title">Voice & Movement</h3>
              <p className="card-description">Vocal technique, breath control, physical theatre, and stage combat basics.</p>
            </div>
            <div className="card p-6">
              <span className="text-4xl mb-4 block">✍️</span>
              <h3 className="card-title">Production Skills</h3>
              <p className="card-description">Directing basics, stage management, lighting design, and costume design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Archive by Year */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title mb-8">Workshop Archive</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshopYears.map((item) => (
              <Link key={item.year} href={item.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-gold text-3xl font-light">{item.year}</span>
                <p className="card-description mt-2">{item.description}</p>
                <span className="btn-text mt-4 inline-block">View workshops</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/workshops/archive" className="btn btn-secondary">View Full Archive (2000-2020)</Link>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="section section-charcoal">
        <div className="container text-center">
          <h2 className="section-title mb-4">Interested in Our Workshops?</h2>
          <p className="section-description mx-auto mb-8">Register your interest and we will notify you about upcoming workshop programs.</p>
          <Link href="/contact#workshop" className="btn btn-primary">Register Interest</Link>
        </div>
      </section>
    </main>
  );
}
