'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' },
  title: { en: 'Bhasha Dibos', bn: 'ভাষা দিবস', hi: 'भाषा दिवस' },
  description: { en: 'Celebration of International Mother Language Day honoring Bengali language.', bn: 'বাংলা ভাষাকে সম্মান জানিয়ে আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন।', hi: 'बांग्ला भाषा का सम्मान करते हुए अंतर्राष्ट्रीय मातृभाषा दिवस का उत्सव।' },
  comingSoon: { en: 'Bhasha Dibos details and photos coming soon.', bn: 'ভাষা দিবসের বিবরণ এবং ছবি শীঘ্রই আসছে।', hi: 'भाषा दिवस विवरण और तस्वीरें जल्द आ रही हैं।' }
};

export default function BhashaDibosPage() {
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
