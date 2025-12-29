'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' },
  title: { en: 'Children Film Festival', bn: 'শিশু চলচ্চিত্র উৎসব', hi: 'बाल फिल्म महोत्सव' },
  description: { en: 'Annual film festival showcasing cinema for young audiences.', bn: 'তরুণ দর্শকদের জন্য সিনেমা প্রদর্শনী বার্ষিক চলচ্চিত্র উৎসব।', hi: 'युवा दर्शकों के लिए सिनेमा प्रदर्शित करने वाला वार्षिक फिल्म महोत्सव।' },
  comingSoon: { en: 'Film festival details and photos coming soon.', bn: 'চলচ্চিত্র উৎসবের বিবরণ এবং ছবি শীঘ্রই আসছে।', hi: 'फिल्म महोत्सव विवरण और तस्वीरें जल्द आ रही हैं।' }
};

export default function FilmFestivalPage() {
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
