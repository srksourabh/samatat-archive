'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएँ' },
  title: { en: '2022 Workshops', bn: '২০২২ কর্মশালা', hi: '2022 कार्यशालाएँ' },
  description: { en: 'Post-pandemic revival programs.', bn: 'মহামারী-পরবর্তী পুনরুজ্জীবন কার্যক্রম।', hi: 'महामारी के बाद पुनरुद्धार कार्यक्रम।' },
  comingSoon: { en: '2022 workshop details coming soon.', bn: '২০২২ কর্মশালার বিবরণ শীঘ্রই আসছে।', hi: '2022 कार्यशाला विवरण जल्द आ रहा है।' }
};

export default function Workshop2022Page() {
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
