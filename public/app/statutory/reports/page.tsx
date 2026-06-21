'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

const reports = [
  { year: '2025-2026', title: 'Annual Activity Report', status: 'Available', color: 'gold', url: 'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/documents%2Freports%2Fbarshik_protibedan_2026.pdf?alt=media' },
  { year: '2023-2024', title: 'Annual Activity Report', status: 'Available', color: 'gray', url: '#' },
  { year: '2022-2023', title: 'Annual Activity Report', status: 'Available', color: 'gray', url: '#' },
  { year: '2021-2022', title: 'Annual Activity Report', status: 'Available', color: 'gray', url: '#' },
];

export default function ReportsPage() {
  useLanguage(); // Hook call for consistency
  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Compliance"
        title={{ en: 'Annual Reports', bn: 'বার্ষিক প্রতিবেদন', hi: 'वार्षिक रिपोर्ट' }}
        description={{ en: 'Transparency through yearly activity and financial disclosures.', bn: 'বার্ষিক কার্যক্রম এবং আর্থিক প্রকাশের মাধ্যমে স্বচ্ছতা।', hi: 'वार्षिक गतिविधि और वित्तीय खुलासे के माध्यम से पारदर्शिता।' }}
        compact
      />
      
      <section className="section section-dark relative">
        <BackgroundPhotos variant="scattered" opacity={0.05} />
        <div className="container max-w-4xl relative z-10">
          <div className="space-y-4">
            {reports.map((report, i) => (
              <div key={i} className="card p-6 flex flex-col md:flex-row items-center justify-between group hover:border-gold/30 transition-all">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="text-3xl">📄</div>
                  <div>
                    <h3 className="text-white text-lg font-medium">{report.title} {report.year}</h3>
                    <p className="text-gray text-sm">Official publication of Samatat Sanskriti</p>
                  </div>
                </div>
                <a 
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs py-2 px-6"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
