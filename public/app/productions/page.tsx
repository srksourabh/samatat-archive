import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';

const productionYears = [
  { year: '2024', description: 'Current season productions', href: '/productions/2024' },
  { year: '2023', description: 'Recent productions and performances', href: '/productions/2023' },
];

export default function ProductionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Work"
        title={{ en: 'Theatre Productions', bn: 'থিয়েটার প্রযোজনা', hi: 'थिएटर प्रोडक्शन' }}
        description={{ en: 'Over 100 original productions since 1997, bringing meaningful stories to audiences across West Bengal.', bn: '১৯৯৭ সাল থেকে ১০০টিরও বেশি মৌলিক প্রযোজনা, পশ্চিমবঙ্গ জুড়ে দর্শকদের কাছে অর্থবহ গল্প নিয়ে আসছে।', hi: '1997 से 100 से अधिक मूल प्रोडक्शन, पश्चिम बंगाल भर में दर्शकों के लिए सार्थक कहानियां लाते हैं।' }}
      />

      {/* Current Season */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-8">Current Season</h2>
          <Link href="/productions/current" className="featured-banner min-h-[300px]" style={{ backgroundImage: 'linear-gradient(135deg, var(--color-dark-gray), var(--color-charcoal))' }}>
            <div className="featured-content">
              <span className="card-eyebrow">Now Showing</span>
              <h3 className="text-3xl text-white mb-2">Current Productions</h3>
              <p className="text-light-gray">View our current season lineup and upcoming performances.</p>
              <span className="btn-text mt-4 inline-block">View current season</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Production Archive by Year */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title mb-8">Production Archive</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {productionYears.map((item) => (
              <Link key={item.year} href={item.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-gold text-3xl font-light">{item.year}</span>
                <p className="card-description mt-2">{item.description}</p>
                <span className="btn-text mt-4 inline-block">View productions</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/productions/archive" className="btn btn-secondary">View Full Archive</Link>
          </div>
        </div>
      </section>

      {/* Request Performance */}
      <section className="section section-charcoal">
        <div className="container text-center">
          <h2 className="section-title mb-4">Request a Performance</h2>
          <p className="section-description mx-auto mb-8">Interested in bringing our productions to your venue or event?</p>
          <Link href="/contact#performance" className="btn btn-primary">Request Performance</Link>
        </div>
      </section>
    </main>
  );
}
