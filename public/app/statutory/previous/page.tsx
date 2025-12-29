'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Previous Committees', bn: 'পূর্ববর্তী কমিটি', hi: 'पिछली समितियां' },
  description: { en: 'Archive of past committee formations.', bn: 'পূর্ববর্তী কমিটি গঠনের আর্কাইভ।', hi: 'पिछली समिति गठनों का संग्रह।' },
  comingSoon: { en: 'Previous committees archive coming soon.', bn: 'পূর্ববর্তী কমিটির আর্কাইভ শীঘ্রই আসছে।', hi: 'पिछली समितियों का संग्रह जल्द आ रहा है।' }
};

export default function PreviousCommitteesPage() {
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
