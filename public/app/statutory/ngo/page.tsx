'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

export default function NGOPage() {
  useLanguage(); // Hook call for consistency

  const docs = [
    { label: 'Registration Certificate', value: 'S/1L/2157 of 1999-2000' },
    { label: 'PAN Card', value: 'Available on Request' },
    { label: '12A Registration', value: 'Compliance Updated' },
    { label: '80G Status', value: 'Tax Benefit Available' },
    { label: 'CSR Registration', value: 'CSR000XXXXX' }
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Governance"
        title={{ en: 'NGO Information', bn: 'এনজিও তথ্য', hi: 'एनजीओ जानकारी' }}
        description={{ en: 'Official registration details and legal organizational status.', bn: 'অফিসিয়াল রেজিস্ট্রেশন তথ্য এবং আইনি সাংগঠনিক অবস্থা।', hi: 'आधिकारिक पंजीकरण विवरण और कानूनी संगठनात्मक स्थिति।' }}
        compact
      />

      <section className="section section-dark">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-white">Legal Status</h2>
              <div className="space-y-6">
                {docs.map((doc, i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                    <span className="text-gray text-xs uppercase tracking-widest">{doc.label}</span>
                    <p className="text-white text-lg mt-1">{doc.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8 bg-gold/5 border-gold/20">
              <h3 className="text-gold text-xl mb-4">Official Address</h3>
              <p className="text-light-gray leading-relaxed mb-6">
                Samatat Sanskriti<br />
                Uttarpara, Hooghly<br />
                West Bengal, India - 712232
              </p>
              <div className="pt-6 border-t border-gold/10">
                <p className="text-gray text-sm italic">
                  For official inquiries, please contact the General Secretary at
                  <span className="text-gold block not-italic mt-2">info@samatat.org</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
