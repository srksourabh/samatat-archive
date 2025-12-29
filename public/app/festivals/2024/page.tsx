'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Festival', bn: 'উৎসব', hi: 'उत्सव' },
  title: { en: '2024 Theatre Festival', bn: '২০২৪ থিয়েটার উৎসব', hi: '2024 रंगमंच उत्सव' },
  description: { en: '12 participating groups showcasing Bengali theatre.', bn: 'বাংলা থিয়েটার প্রদর্শনে ১২টি অংশগ্রহণকারী দল।', hi: 'बंगाली रंगमंच का प्रदर्शन करते 12 भाग लेने वाले समूह।' },
  comingSoon: { en: '2024 festival details coming soon.', bn: '২০২৪ উৎসবের বিবরণ শীঘ্রই আসছে।', hi: '2024 उत्सव विवरण जल्द आ रहा है।' }
};

export default function Festival2024Page() {
  const lang = useLanguage();
  return (
    <main>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} compact />
      <section className="section section-charcoal">
        <div className="container"><p className="text-center text-light-gray">{content.comingSoon[lang]}</p></div>
      </section>
    </main>
  );
}
