'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'NGO Information', bn: 'এনজিও তথ্য', hi: 'एनजीओ जानकारी' },
  description: { en: 'Registration details and organizational documents.', bn: 'নিবন্ধন বিবরণ এবং সাংগঠনিক নথি।', hi: 'पंजीकरण विवरण और संगठनात्मक दस्तावेज।' },
  comingSoon: { en: 'NGO information coming soon.', bn: 'এনজিও তথ্য শীঘ্রই আসছে।', hi: 'एनजीओ जानकारी जल्द आ रही है।' }
};

export default function NGOPage() {
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
