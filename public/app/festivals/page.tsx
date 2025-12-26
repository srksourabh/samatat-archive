import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';

const festivalYears = [
  { year: '2024', description: 'Latest festival with 12 participating groups', href: '/festivals/2024' },
  { year: '2023', description: 'Festival celebrating Bengali theatre traditions', href: '/festivals/2023' },
];

export default function FestivalsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Annual Event"
        title={{ en: 'Theatre Festival', bn: 'থিয়েটার উৎসব', hi: 'थिएटर उत्सव' }}
        description={{ en: 'Since 2000, our annual theatre festival brings together groups from across West Bengal, showcasing diverse theatrical styles and traditions.', bn: '২০০০ সাল থেকে, আমাদের বার্ষিক থিয়েটার উৎসব পশ্চিমবঙ্গ জুড়ে বিভিন্ন দলকে একত্রিত করে, বৈচিত্র্যময় নাট্য শৈলী ও ঐতিহ্য প্রদর্শন করে।', hi: '2000 से, हमारा वार्षिक थिएटर उत्सव पश्चिम बंगाल भर से समूहों को एक साथ लाता है, विविध नाट्य शैलियों और परंपराओं को प्रदर्शित करता है।' }}
      />

      {/* About Festival */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-6">About Our Festival</h2>
          <p className="text-light-gray leading-relaxed mb-4">
            Each year, we welcome established companies and emerging artists, creating a space where innovation meets tradition, and where audiences can experience the full spectrum of contemporary Bengali theatre.
          </p>
          <div className="stat-grid mt-8">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Productions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Theatre Groups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Archive by Year */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title mb-8">Festival Archive</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {festivalYears.map((item) => (
              <Link key={item.year} href={item.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-gold text-3xl font-light">{item.year}</span>
                <p className="card-description mt-2">{item.description}</p>
                <span className="btn-text mt-4 inline-block">View festival</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/festivals/archive" className="btn btn-secondary">View Past Festivals</Link>
          </div>
        </div>
      </section>

      {/* Participate CTA */}
      <section className="section section-charcoal">
        <div className="container text-center">
          <h2 className="section-title mb-4">Participate in Our Festival</h2>
          <p className="section-description mx-auto mb-8">Are you a theatre group interested in performing at our next festival?</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
