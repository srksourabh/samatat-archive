'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Sponsors', bn: 'স্পনসর', hi: 'प्रायोजक' },
  description: { en: 'Our sponsors and supporters.', bn: 'আমাদের স্পনসর এবং সমর্থক।', hi: 'हमारे प्रायोजक और समर्थक।' },
  comingSoon: { en: 'Sponsors information coming soon.', bn: 'স্পনসরদের তথ্য শীঘ্রই আসছে।', hi: 'प्रायोजकों की जानकारी जल्द आ रही है।' }
};

export default function SponsorsPage() {
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
