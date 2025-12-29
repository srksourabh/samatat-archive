'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' },
  title: { en: 'Rabindra Jayanti', bn: 'রবীন্দ্র জয়ন্তী', hi: 'रवींद्र जयंती' },
  description: { en: 'Annual commemoration of Rabindranath Tagore through performances and readings.', bn: 'পরিবেশনা এবং পাঠের মাধ্যমে রবীন্দ্রনাথ ঠাকুরের বার্ষিক স্মরণ।', hi: 'प्रस्तुतियों और पाठों के माध्यम से रवींद्रनाथ टैगोर की वार्षिक स्मृति।' },
  comingSoon: { en: 'Rabindra Jayanti details and photos coming soon.', bn: 'রবীন্দ্র জয়ন্তীর বিবরণ এবং ছবি শীঘ্রই আসছে।', hi: 'रवींद्र जयंती विवरण और तस्वीरें जल्द आ रही हैं।' }
};

export default function RabindraJayantiPage() {
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
