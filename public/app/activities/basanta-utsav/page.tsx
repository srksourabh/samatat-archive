'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' },
  title: { en: 'Basanta Utsav', bn: 'বসন্ত উৎসব', hi: 'बसंत उत्सव' },
  description: { en: 'Spring festival celebrating art, music, and cultural expression.', bn: 'শিল্প, সঙ্গীত এবং সাংস্কৃতিক অভিব্যক্তি উদযাপনকারী বসন্ত উৎসব।', hi: 'कला, संगीत और सांस्कृतिक अभिव्यक्ति का जश्न मनाने वाला वसंत उत्सव।' },
  comingSoon: { en: 'Basanta Utsav details and photos coming soon.', bn: 'বসন্ত উৎসবের বিবরণ এবং ছবি শীঘ্রই আসছে।', hi: 'बसंत उत्सव विवरण और तस्वीरें जल्द आ रही हैं।' }
};

export default function BasantaUtsavPage() {
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
