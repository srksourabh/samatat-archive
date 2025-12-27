'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएँ' },
  title: { en: '2023 Workshops', bn: '২০২৩ কর্মশালা', hi: '2023 कार्यशालाएँ' },
  description: { en: 'Acting fundamentals and voice training workshops.', bn: 'অভিনয় মৌলিক এবং কণ্ঠ প্রশিক্ষণ কর্মশালা।', hi: 'अभिनय मूल बातें और आवाज प्रशिक्षण कार्यशालाएँ।' },
  comingSoon: { en: '2023 workshop details coming soon.', bn: '২০২৩ কর্মশালার বিবরণ শীঘ্রই আসছে।', hi: '2023 कार्यशाला विवरण जल्द आ रहा है।' }
};

export default function Workshop2023Page() {
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
