import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';

const statutorySections = [
  { title: 'Current Committee', description: 'Current executive committee formation and members.', href: '/statutory/committee', icon: '👥' },
  { title: 'AGM Records', description: 'Annual General Meeting minutes and resolutions.', href: '/statutory/agm', icon: '📋' },
  { title: 'Previous Committees', description: 'Archive of past committee formations.', href: '/statutory/previous', icon: '📚' },
  { title: 'NGO Information', description: 'Registration details and organizational documents.', href: '/statutory/ngo', icon: '🏛️' },
  { title: 'Annual Reports', description: 'Yearly activity and financial reports.', href: '/statutory/reports', icon: '📊' },
  { title: 'Grants & Donations', description: 'Information about grants received and donation records.', href: '/statutory/grants', icon: '💰' },
  { title: 'Sponsors', description: 'Our sponsors and supporters.', href: '/statutory/sponsors', icon: '🤝' },
];

export default function StatutoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Governance"
        title={{ en: 'Statutory Compliances', bn: 'বিধিবদ্ধ সম্মতি', hi: 'वैधानिक अनुपालन' }}
        description={{ en: 'Transparency and compliance in all our operations. Access governance documents, committee information, and official records.', bn: 'আমাদের সমস্ত কার্যক্রমে স্বচ্ছতা এবং সম্মতি। শাসন নথি, কমিটির তথ্য এবং সরকারী রেকর্ড অ্যাক্সেস করুন।', hi: 'हमारे सभी कार्यों में पारदर्शिता और अनुपालन। शासन दस्तावेज, समिति जानकारी और आधिकारिक रिकॉर्ड तक पहुंचें।' }}
        compact
      />

      <section className="section section-charcoal">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statutorySections.map((section) => (
              <Link key={section.href} href={section.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-4xl mb-4 block">{section.icon}</span>
                <h2 className="card-title text-xl mb-2">{section.title}</h2>
                <p className="card-description">{section.description}</p>
                <span className="btn-text mt-4 inline-block">View details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="section section-dark">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-8">Organization Details</h2>
          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="text-sm text-gray font-medium">Registered Name</span>
                <p className="text-white">Samatat Sanskriti, Uttarpara</p>
              </div>
              <div>
                <span className="text-sm text-gray font-medium">Established</span>
                <p className="text-white">1999</p>
              </div>
              <div>
                <span className="text-sm text-gray font-medium">Type</span>
                <p className="text-white">Non-Profit Cultural Organization</p>
              </div>
              <div>
                <span className="text-sm text-gray font-medium">Location</span>
                <p className="text-white">Uttarpara, Hooghly, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
