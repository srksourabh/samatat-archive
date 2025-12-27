'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएँ' },
  title: { en: '2024 Workshops', bn: '২০২৪ কর্মশালা', hi: '2024 कार्यशालाएँ' },
  description: { en: 'Current year workshop programs and upcoming sessions.', bn: 'চলতি বছরের কর্মশালা কার্যক্রম এবং আসন্ন সেশন।', hi: 'वर्तमान वर्ष की कार्यशाला कार्यक्रम और आगामी सत्र।' },
  comingSoon: { en: '2024 workshop details coming soon.', bn: '২০২৪ কর্মশালার বিবরণ শীঘ্রই আসছে।', hi: '2024 कार्यशाला विवरण जल्द आ रहा है।' }
};

export default function Workshop2024Page() {
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
