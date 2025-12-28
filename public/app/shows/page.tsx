'use client';

import { useState } from 'react';
import { useLanguage, Language } from '../components/LanguageSwitcher';
import Link from 'next/link';

type TranslatedText = Record<Language, string>;

// Mock Data
const productions: {
  id: string;
  title: TranslatedText;
  year: string;
  status: string;
  image: string;
  description: TranslatedText;
}[] = [
  {
    id: 'prod-2025-1',
    title: { en: 'The New Dawn', bn: 'নতুন প্রভাত', hi: 'नई सुबह' },
    year: '2025',
    status: 'upcoming',
    image: '/images/prod-2025.jpg',
    description: { en: 'An experimental play exploring the future of humanity.', bn: 'মানবতার ভবিষ্যৎ নিয়ে একটি পরীক্ষামূলক নাটক।', hi: 'मानवता के भविष्य की खोज करता एक प्रयोगात्मक नाटक।' }
  },
  {
    id: 'prod-2024-1',
    title: { en: 'Echoes of the River', bn: 'নদীর প্রতিধ্বনি', hi: 'नदी की गूंज' },
    year: '2024',
    status: 'ongoing',
    image: '/images/prod-river.jpg',
    description: { en: 'A musical journey through the delta history.', bn: 'বদ্বীপের ইতিহাসের মধ্য দিয়ে একটি সঙ্গীতময় যাত্রা।', hi: 'डेल्टा इतिहास के माध्यम से एक संगीतमय यात्रा।' }
  },
  {
    id: 'prod-1998-1',
    title: { en: 'The First Play', bn: 'প্রথম নাটক', hi: 'पहला नाटक' },
    year: '1998',
    status: 'archived',
    image: '/images/prod-first.jpg',
    description: { en: 'Where it all began. Our debut production.', bn: 'যেখান থেকে সব শুরু। আমাদের প্রথম প্রযোজনা।', hi: 'जहाँ से सब शुरू हुआ। हमारी पहली प्रस्तुति।' }
  }
];

export default function ProductionsPage() {
  const lang = useLanguage();
  const [filter, setFilter] = useState('all'); // all, upcoming, ongoing, archived

  const content = {
    title: { en: 'Productions', bn: 'প্রযোজনা', hi: 'प्रस्तुतियाँ' },
    subtitle: { en: '26 Years of Storytelling on Stage', bn: 'মঞ্চে ২৬ বছরের গল্প বলা', hi: 'मंच पर 26 वर्षों की कहानी' },
    filters: {
      all: { en: 'All Shows', bn: 'সব নাটক', hi: 'सभी नाटक' },
      upcoming: { en: 'Upcoming', bn: 'আসন্ন', hi: 'आगामी' },
      ongoing: { en: 'Now Showing', bn: 'এখন চলছে', hi: 'अभी चल रहा है' },
      archived: { en: 'Archive', bn: 'আর্কাইভ', hi: 'संग्रह' }
    }
  };

  const filteredProds = filter === 'all'
    ? productions
    : productions.filter(p => p.status === filter);

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-center">
        <h1 className="text-5xl md:text-6xl font-bold theatre-text-gold mb-6">{content.title[lang]}</h1>
        <p className="text-xl text-gray-300">{content.subtitle[lang]}</p>
      </section>

      <section className="container mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(content.filters).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-full border transition uppercase text-sm tracking-widest ${
                filter === key
                  ? 'bg-amber-600 border-amber-600 text-white'
                  : 'border-gray-700 text-gray-400 hover:border-amber-500 hover:text-white'
              }`}
            >
              {label[lang]}
            </button>
          ))}
        </div>

        {/* Productions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProds.map((prod) => (
            <Link key={prod.id} href={`/shows/${prod.id}`} className="group block">
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group-hover:border-amber-600 transition shadow-lg group-hover:shadow-amber-900/20">
                {/* Poster Image Area */}
                <div className="aspect-[2/3] bg-gray-800 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-10 group-hover:scale-110 transition duration-700">🎭</div>

                   {/* Status Badge */}
                   <div className="absolute top-4 right-4">
                     {prod.status === 'upcoming' && <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold uppercase">Coming Soon</span>}
                     {prod.status === 'ongoing' && <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-bold uppercase animate-pulse">Live Now</span>}
                   </div>
                </div>

                <div className="p-6">
                  <div className="text-amber-500 text-sm font-bold mb-2">{prod.year}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition">{prod.title[lang]}</h3>
                  <p className="text-gray-400 line-clamp-2">{prod.description[lang]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
