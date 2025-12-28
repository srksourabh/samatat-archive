'use client';

import { useState } from 'react';
import { useLanguage, Language } from '../components/LanguageSwitcher';
import Link from 'next/link';

type TranslatedText = Record<Language, string>;

// Mock Data
const workshops: {
  id: string;
  title: TranslatedText;
  date: string;
  status: string;
  image: string;
  description: TranslatedText;
}[] = [
  {
    id: 'ws-2025',
    title: { en: 'Acting Intensive 2025', bn: 'অভিনয় কর্মশালা ২০২৫', hi: 'अभिनय गहन 2025' },
    date: 'March 15-20, 2025',
    status: 'upcoming',
    image: '/images/workshop-2025.jpg',
    description: { en: 'A 5-day intensive workshop focusing on voice and body movement.', bn: '৫ দিনের নিবিড় কর্মশালা যা কণ্ঠ ও শারীরিক নড়াচড়ার উপর ফোকাস করবে।', hi: 'आवाज और शारीरिक गतिविधि पर केंद्रित 5 दिवसीय गहन कार्यशाला।' }
  },
  {
    id: 'ws-2023',
    title: { en: 'Lighting Design Basics', bn: 'আলোক সজ্জার প্রাথমিক ধারণা', hi: 'प्रकाश डिजाइन मूल बातें' },
    date: 'November 10, 2023',
    status: 'completed',
    image: '/images/workshop-light.jpg',
    description: { en: 'Understanding the fundamentals of stage lighting.', bn: 'মঞ্চ আলোর মৌলিক বিষয়গুলি বোঝা।', hi: 'मंच प्रकाश की मूल बातें समझना।' }
  },
  {
    id: 'ws-2022',
    title: { en: 'Playwriting Masterclass', bn: 'নাটক রচনা মাস্টারক্লাস', hi: 'नाटक लेखन मास्टरक्लास' },
    date: 'June 5, 2022',
    status: 'completed',
    image: '/images/workshop-write.jpg',
    description: { en: 'From concept to script with renowned playwrights.', bn: 'বিখ্যাত নাট্যকারদের সাথে ধারণা থেকে স্ক্রিপ্ট পর্যন্ত।', hi: 'प्रसिद्ध नाटककारों के साथ अवधारणा से स्क्रिप्ट तक।' }
  }
];

export default function WorkshopsPage() {
  const lang = useLanguage();
  const [selectedYear, setSelectedYear] = useState('all');

  const content = {
    title: { en: 'Workshops & Training', bn: 'কর্মশালা ও প্রশিক্ষণ', hi: 'कार्यशाला और प्रशिक्षण' },
    subtitle: { en: 'Nurturing the next generation of theatre artists.', bn: 'ভবিষ্যৎ নাট্যশিল্পীদের গড়ে তোলা।', hi: 'रंगमंच कलाकारों की अगली पीढ़ी का पोषण।' },
    all: { en: 'All', bn: 'সব', hi: 'सभी' },
    register: { en: 'Register Now', bn: 'এখনই নিবন্ধন করুন', hi: 'अभी पंजीकरण करें' },
    open: { en: 'Open', bn: 'খোলা', hi: 'खुला' },
    completed: { en: 'Completed', bn: 'সমাপ্ত', hi: 'पूर्ण' },
    interested: { en: 'Interested in Future Workshops?', bn: 'ভবিষ্যতের কর্মশালায় আগ্রহী?', hi: 'भविष्य की कार्यशालाओं में रुचि?' },
    mailingList: { en: 'Join our mailing list to get notified when new training programs are announced.', bn: 'নতুন প্রশিক্ষণ কর্মসূচি ঘোষণা করা হলে বিজ্ঞপ্তি পেতে আমাদের মেইলিং তালিকায় যোগ দিন।', hi: 'नए प्रशिक्षण कार्यक्रमों की घोषणा होने पर सूचित होने के लिए हमारी मेलिंग सूची में शामिल हों।' },
    getNotified: { en: 'Get Notified', bn: 'বিজ্ঞপ্তি পান', hi: 'सूचित करें' },
    noWorkshops: { en: 'No workshops found for this period.', bn: 'এই সময়ের জন্য কোনো কর্মশালা পাওয়া যায়নি।', hi: 'इस अवधि के लिए कोई कार्यशाला नहीं मिली।' }
  };

  const filteredWorkshops = selectedYear === 'all'
    ? workshops
    : workshops.filter(w => w.date.includes(selectedYear));

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-center">
        <h1 className="text-5xl md:text-6xl font-bold theatre-text-gold mb-6">{content.title[lang]}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{content.subtitle[lang]}</p>
      </section>

      {/* Filter & List Section */}
      <section className="container mx-auto px-6 py-12">
        {/* Simple Year Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-4 py-2 rounded-full border ${selectedYear === 'all' ? 'bg-amber-600 border-amber-600 text-white' : 'border-gray-600 text-gray-400 hover:border-amber-500'}`}
          >
            {content.all[lang]}
          </button>
          <button
            onClick={() => setSelectedYear('2025')}
            className={`px-4 py-2 rounded-full border ${selectedYear === '2025' ? 'bg-amber-600 border-amber-600 text-white' : 'border-gray-600 text-gray-400 hover:border-amber-500'}`}
          >
            2025
          </button>
          <button
             onClick={() => setSelectedYear('2023')}
             className={`px-4 py-2 rounded-full border ${selectedYear === '2023' ? 'bg-amber-600 border-amber-600 text-white' : 'border-gray-600 text-gray-400 hover:border-amber-500'}`}
          >
            2023
          </button>
        </div>

        {/* Workshop Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((ws) => (
            <div key={ws.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-amber-600 transition group">
              <div className="h-48 bg-gray-800 relative">
                 {/* Placeholder for Image */}
                 <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">📚</div>
                 {ws.status === 'upcoming' && (
                   <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">
                     {content.open[lang]}
                   </span>
                 )}
              </div>
              <div className="p-6">
                <div className="text-amber-500 text-sm font-semibold mb-2">{ws.date}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition">{ws.title[lang]}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{ws.description[lang]}</p>

                {ws.status === 'upcoming' ? (
                  <Link href="/contact" className="inline-block bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition">
                    {content.register[lang]}
                  </Link>
                ) : (
                  <button className="text-gray-500 cursor-not-allowed text-sm">
                    {content.completed[lang]}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            {content.noWorkshops[lang]}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">
          {content.interested[lang]}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {content.mailingList[lang]}
        </p>
        <Link href="/contact" className="btn btn-primary bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
          {content.getNotified[lang]}
        </Link>
      </section>
    </main>
  );
}
