'use client';

import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Beyond Theatre', bn: 'থিয়েটারের বাইরে', hi: 'थिएटर से परे' },
  learnMore: { en: 'Learn more', bn: 'আরও জানুন', hi: 'और जानें' }
};

const activities = [
  {
    title: { en: 'Basanta Utsav', bn: 'বসন্ত উৎসব', hi: 'बसंत उत्सव' },
    description: { en: 'Spring festival celebrating art, music, and cultural expression.', bn: 'শিল্প, সঙ্গীত এবং সাংস্কৃতিক অভিব্যক্তি উদযাপনকারী বসন্ত উৎসব।', hi: 'कला, संगीत और सांस्कृतिक अभिव्यक्ति का जश्न मनाने वाला वसंत उत्सव।' },
    href: '/activities/basanta-utsav',
    icon: '🌸'
  },
  {
    title: { en: 'Children Film Festival', bn: 'শিশু চলচ্চিত্র উৎসব', hi: 'बाल फिल्म महोत्सव' },
    description: { en: 'Annual film festival showcasing cinema for young audiences.', bn: 'তরুণ দর্শকদের জন্য সিনেমা প্রদর্শনী বার্ষিক চলচ্চিত্র উৎসব।', hi: 'युवा दर्शकों के लिए सिनेमा प्रदर्शित करने वाला वार्षिक फिल्म महोत्सव।' },
    href: '/activities/film-festival',
    icon: '🎬'
  },
  {
    title: { en: 'Bhasha Dibos', bn: 'ভাষা দিবস', hi: 'भाषा दिवस' },
    description: { en: 'Celebration of International Mother Language Day honoring Bengali language.', bn: 'বাংলা ভাষাকে সম্মান জানিয়ে আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন।', hi: 'बांग्ला भाषा का सम्मान करते हुए अंतर्राष्ट्रीय मातृभाषा दिवस का उत्सव।' },
    href: '/activities/bhasha-dibos',
    icon: '📚'
  },
  {
    title: { en: 'Rabindra Jayanti', bn: 'রবীন্দ্র জয়ন্তী', hi: 'रवींद्र जयंती' },
    description: { en: 'Annual commemoration of Rabindranath Tagore through performances and readings.', bn: 'পরিবেশনা এবং পাঠের মাধ্যমে রবীন্দ্রনাথ ঠাকুরের বার্ষিক স্মরণ।', hi: 'प्रस्तुतियों और पाठों के माध्यम से रवींद्रनाथ टैगोर की वार्षिक स्मृति।' },
    href: '/activities/rabindra-jayanti',
    icon: '🎭'
  },
];

export default function ActivitiesPage() {
  const lang = useLanguage();
  return (
    <main>
      <PageHeader
        eyebrow={content.eyebrow}
        title={{ en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' }}
        description={{ en: 'Beyond theatre productions, we organize various cultural programs that celebrate Bengali heritage and foster community engagement.', bn: 'থিয়েটার প্রযোজনার বাইরেও, আমরা বিভিন্ন সাংস্কৃতিক অনুষ্ঠান আয়োজন করি যা বাঙালি ঐতিহ্য উদযাপন করে এবং সম্প্রদায়ের সম্পৃক্ততা বাড়ায়।', hi: 'थिएटर प्रोडक्शन के अलावा, हम विभिन्न सांस्कृतिक कार्यक्रम आयोजित करते हैं जो बंगाली विरासत का जश्न मनाते हैं और सामुदायिक जुड़ाव को बढ़ावा देते हैं।' }}
      />

      <section className="section section-charcoal">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Link key={activity.href} href={activity.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-4xl mb-4 block">{activity.icon}</span>
                <h2 className="card-title text-xl mb-2">{activity.title[lang]}</h2>
                <p className="card-description">{activity.description[lang]}</p>
                <span className="btn-text mt-4 inline-block">{content.learnMore[lang]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
