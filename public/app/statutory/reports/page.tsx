'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Annual Reports', bn: 'বার্ষিক প্রতিবেদন', hi: 'वार्षिक रिपोर्ट' },
  description: { en: 'Yearly activity and financial reports.', bn: 'বার্ষিক কার্যক্রম এবং আর্থিক প্রতিবেদন।', hi: 'वार्षिक गतिविधि और वित्तीय रिपोर्ट।' },
  comingSoon: { en: 'Annual reports coming soon.', bn: 'বার্ষিক প্রতিবেদন শীঘ্রই আসছে।', hi: 'वार्षिक रिपोर्ट जल्द आ रही है।' }
};

export default function ReportsPage() {
  const lang = useLanguage();
  return (
    <main>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />
      <section className="section section-charcoal">
        <div className="container"><p className="text-center text-light-gray">{content.comingSoon[lang]}</p></div>
      </section>
    </main>
  );
}
