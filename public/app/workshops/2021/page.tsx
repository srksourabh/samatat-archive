'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएँ' },
  title: { en: '2021 Workshops', bn: '২০২১ কর্মশালা', hi: '2021 कार्यशालाएँ' },
  description: { en: 'Online and hybrid workshop series.', bn: 'অনলাইন এবং হাইব্রিড কর্মশালা সিরিজ।', hi: 'ऑनलाइन और हाइब्रिड कार्यशाला श्रृंखला।' },
  comingSoon: { en: '2021 workshop details coming soon.', bn: '২০২১ কর্মশালার বিবরণ শীঘ্রই আসছে।', hi: '2021 कार्यशाला विवरण जल्द आ रहा है।' }
};

export default function Workshop2021Page() {
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
