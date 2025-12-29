'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Festival', bn: 'উৎসব', hi: 'उत्सव' },
  title: { en: 'Past Festivals', bn: 'অতীত উৎসব', hi: 'पिछले उत्सव' },
  description: { en: 'Archive of all theatre festivals since 2000.', bn: '২০০০ সাল থেকে সমস্ত থিয়েটার উৎসবের আর্কাইভ।', hi: '2000 से सभी रंगमंच उत्सवों का संग्रह।' },
  comingSoon: { en: 'Festival archive coming soon.', bn: 'উৎসব আর্কাইভ শীঘ্রই আসছে।', hi: 'उत्सव संग्रह जल्द आ रहा है।' }
};

export default function FestivalArchivePage() {
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
