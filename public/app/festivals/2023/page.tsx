'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Festival', bn: 'উৎসব', hi: 'उत्सव' },
  title: { en: '2023 Theatre Festival', bn: '২০২৩ থিয়েটার উৎসব', hi: '2023 रंगमंच उत्सव' },
  description: { en: 'Festival celebrating Bengali theatre traditions.', bn: 'বাংলা থিয়েটার ঐতিহ্য উদযাপনের উৎসব।', hi: 'बंगाली रंगमंच परंपराओं का जश्न मनाने वाला उत्सव।' },
  comingSoon: { en: '2023 festival details coming soon.', bn: '২০২৩ উৎসবের বিবরণ শীঘ্রই আসছে।', hi: '2023 उत्सव विवरण जल्द आ रहा है।' }
};

export default function Festival2023Page() {
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
