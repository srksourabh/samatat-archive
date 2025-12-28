'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Festival', bn: 'উৎসব', hi: 'उत्सव' },
  title: { en: '2025 Theatre Festival', bn: '২০২৫ থিয়েটার উৎসব', hi: '2025 रंगमंच उत्सव' },
  description: { en: 'Samatat International Theatre Festival 2025 - A grand celebration of global theatre.', bn: 'সমতট আন্তর্জাতিক নাট্য উৎসব ২০২৫ - বিশ্ব নাটকের এক মহান উদযাপন।', hi: 'समतट अंतर्राष्ट्रीय रंगमंच उत्सव 2025 - वैश्विक रंगमंच का एक भव्य उत्सव।' },
  upcomingPlays: { en: 'Upcoming Plays', bn: 'আসন্ন নাটক', hi: 'आगामी नाटक' },
  stayTuned: { en: 'Stay tuned for the complete festival lineup and schedule.', bn: 'সম্পূর্ণ উৎসবের লাইনআপ এবং সময়সূচীর জন্য সাথে থাকুন।', hi: 'पूर्ण उत्सव लाइनअप और कार्यक्रम के लिए बने रहें।' }
};

const plays = [
  {
    title: { en: 'The New Dawn', bn: 'নতুন প্রভাত', hi: 'नई सुबह' },
    description: { en: 'A powerful drama about hope and renewal.', bn: 'আশা এবং নবায়নের উপর একটি শক্তিশালী নাটক।', hi: 'आशा और नवीनीकरण पर एक शक्तिशाली नाटक।' }
  },
  {
    title: { en: 'Hamlet: A Modern Vision', bn: 'হ্যামলেট: এক আধুনিক দৃষ্টি', hi: 'हैमलेट: एक आधुनिक दृष्टि' },
    description: { en: 'Shakespeare reimagined for contemporary audiences.', bn: 'সমসাময়িক দর্শকদের জন্য শেক্সপিয়ার পুনর্কল্পিত।', hi: 'समकालीन दर्शकों के लिए शेक्सपियर की पुनर्कल्पना।' }
  },
  {
    title: { en: 'Guest Play: Tokyo Blues', bn: 'অতিথি নাটক: টোকিও ব্লুজ', hi: 'अतिथि नाटक: टोक्यो ब्लूज' },
    description: { en: 'An international collaboration from Japan.', bn: 'জাপান থেকে একটি আন্তর্জাতিক সহযোগিতা।', hi: 'जापान से एक अंतर्राष्ट्रीय सहयोग।' }
  }
];

export default function Festival2025Page() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />

      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-8">{content.upcomingPlays[lang]}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plays.map((play, index) => (
              <div key={index} className="card p-6">
                <div className="h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl opacity-20">🎭</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{play.title[lang]}</h3>
                <p className="text-light-gray">{play.description[lang]}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-light-gray mt-12">{content.stayTuned[lang]}</p>
        </div>
      </section>
    </main>
  );
}
