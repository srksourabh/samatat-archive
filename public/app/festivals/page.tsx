'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '../components/LanguageSwitcher';
import { festivalsData, getFestivalsSorted, Festival, Play } from '../lib/festivalData';
import { FestivalMosaic } from '../components/FestivalMosaic';
import { FestivalMarquee } from '../components/FestivalMarquee';
import { OptimizedImage } from '../components/OptimizedImage';

type TranslatedText = Record<Language, string>;

// Content translations
const content = {
  pageTitle: { en: 'Natyamela', bn: 'নাট্যমেলা', hi: 'नाट्यमेला' },
  pageSubtitle: {
    en: 'Annual Theatre Festival by Samatat Sanskriti since 2000',
    bn: 'সমতট সংস্কৃতি কর্তৃক ২০০০ সাল থেকে বার্ষিক নাট্য উৎসব',
    hi: 'समतट संस्कृति द्वारा 2000 से वार्षिक रंगमंच उत्सव'
  },
  selectYear: { en: 'Select Year', bn: 'বছর নির্বাচন করুন', hi: 'वर्ष चुनें' },
  upcoming: { en: 'Upcoming', bn: 'আসন্ন', hi: 'आगामी' },
  edition: { en: 'Edition', bn: 'সংস্করণ', hi: 'संस्करण' },
  plays: { en: 'Plays', bn: 'নাটক', hi: 'नाटक' },
  playwright: { en: 'Playwright', bn: 'নাট্যকার', hi: 'नाटककार' },
  director: { en: 'Director', bn: 'পরিচালক', hi: 'निर्देशक' },
  group: { en: 'Group', bn: 'দল', hi: 'समूह' },
  cast: { en: 'Cast', bn: 'অভিনয়ে', hi: 'कलाकार' },
  dates: { en: 'Dates', bn: 'তারিখ', hi: 'तारीखें' },
  venue: { en: 'Venue', bn: 'স্থান', hi: 'स्थान' },
  viewDetails: { en: 'View Festival Details', bn: 'উৎসবের বিস্তারিত দেখুন', hi: 'उत्सव विवरण देखें' },
  viewLeaflet: { en: 'View Leaflet', bn: 'লিফলেট দেখুন', hi: 'पत्रक देखें' },
  totalEditions: { en: 'editions of theatrical excellence', bn: 'সংস্করণের নাট্য শ্রেষ্ঠত্ব', hi: 'संस्करणों की नाट्य उत्कृष्टता' },
  performedPlays: { en: 'plays performed', bn: 'নাটক পরিবেশিত', hi: 'नाटक प्रदर्शित' },
  theatreGroups: { en: 'theatre groups', bn: 'নাট্যদল', hi: 'नाट्य समूह' },
  yearsOfTheatre: { en: 'years of theatre', bn: 'বছরের নাটক', hi: 'वर्षों का रंगमंच' },
  silverJubilee: { en: 'Silver Jubilee', bn: 'রজত জয়ন্তী', hi: 'रजत जयंती' },
  schedule: { en: 'Schedule', bn: 'সময়সূচী', hi: 'कार्यक्रम' }
};

// Calculate statistics
const getTotalPlays = () => festivalsData.reduce((acc, f) => acc + f.plays.length, 0);
const getUniqueGroups = () => {
  const groups = new Set<string>();
  festivalsData.forEach(f => f.plays.forEach(p => {
    if (p.group.en && p.group.en !== 'Various') groups.add(p.group.en);
  }));
  return groups.size;
};

export default function FestivalsPage() {
  const lang = useLanguage();
  const sortedFestivals = getFestivalsSorted();
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [showLeaflet, setShowLeaflet] = useState(false);

  // All festivals from data
  const allFestivals = sortedFestivals;

  // Stats
  const totalPlays = getTotalPlays();
  const uniqueGroups = getUniqueGroups();
  const totalEditions = sortedFestivals.length;
  const yearsActive = new Date().getFullYear() - 2000 + 1;

  const handleYearClick = (festival: Festival) => {
    setSelectedFestival(festival);
    setShowLeaflet(false);
  };

  const closeModal = () => {
    setSelectedFestival(null);
    setShowLeaflet(false);
  };

  return (
    <main className="section-dark min-h-screen">
      {/* Hero Section with Mosaic Background */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Animated Mosaic Backdrop */}
        <FestivalMosaic />

        <div className="relative z-30 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-gold)] mb-4">{content.pageTitle[lang]}</h1>
          <p className="text-xl md:text-2xl text-[var(--color-light-gray)] mb-8">{content.pageSubtitle[lang]}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-[var(--color-charcoal)]/70 backdrop-blur-sm rounded-lg p-4 border border-[var(--color-dark-gray)]">
              <div className="text-4xl font-bold text-[var(--color-gold)]">{totalEditions}</div>
              <div className="text-sm text-[var(--color-gray)]">{content.totalEditions[lang]}</div>
            </div>
            <div className="bg-[var(--color-charcoal)]/70 backdrop-blur-sm rounded-lg p-4 border border-[var(--color-dark-gray)]">
              <div className="text-4xl font-bold text-[var(--color-gold)]">{totalPlays}+</div>
              <div className="text-sm text-[var(--color-gray)]">{content.performedPlays[lang]}</div>
            </div>
            <div className="bg-[var(--color-charcoal)]/70 backdrop-blur-sm rounded-lg p-4 border border-[var(--color-dark-gray)]">
              <div className="text-4xl font-bold text-[var(--color-gold)]">{uniqueGroups}+</div>
              <div className="text-sm text-[var(--color-gray)]">{content.theatreGroups[lang]}</div>
            </div>
            <div className="bg-[var(--color-charcoal)]/70 backdrop-blur-sm rounded-lg p-4 border border-[var(--color-dark-gray)]">
              <div className="text-4xl font-bold text-[var(--color-gold)]">{yearsActive}</div>
              <div className="text-sm text-[var(--color-gray)]">{content.yearsOfTheatre[lang]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
          {allFestivals.map((festival) => {
            const isSilverJubilee = festival.edition === 25;
            const isLatest = festival.year === allFestivals[0]?.year;

            return (
              <button
                key={festival.year}
                onClick={() => handleYearClick(festival)}
                className={`
                  relative aspect-square rounded-xl p-3 transition-all duration-300
                  flex flex-col items-center justify-center text-center
                  hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-gold)]/20
                  border-2
                  ${isSilverJubilee
                    ? 'bg-gradient-to-br from-[var(--color-gold)]/30 to-amber-900/30 border-[var(--color-gold)] hover:border-[var(--color-gold)]'
                    : isLatest
                    ? 'bg-gradient-to-br from-amber-900/40 to-amber-800/20 border-amber-500/50 hover:border-amber-400'
                    : 'bg-[var(--color-charcoal)] border-[var(--color-dark-gray)] hover:border-[var(--color-gold)]/60'
                  }
                `}
              >
                {isSilverJubilee && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-gold)] text-[var(--color-black)] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    25
                  </span>
                )}
                <span className={`text-2xl md:text-3xl font-bold ${
                  isSilverJubilee ? 'text-[var(--color-gold)]' : isLatest ? 'text-amber-400' : 'text-[var(--color-white)]'
                }`}>
                  {festival.year}
                </span>
                <span className="text-xs text-[var(--color-gray)] mt-1">
                  {festival.plays.length} {content.plays[lang]}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Festival Modal */}
      {selectedFestival && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-[var(--color-charcoal)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[var(--color-dark-gray)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-[var(--color-gold)]/20 to-transparent p-6 border-b border-[var(--color-dark-gray)]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-black)]/50 flex items-center justify-center text-[var(--color-gray)] hover:text-[var(--color-white)] transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[var(--color-gold)]/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-3xl">🎭</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-white)]">
                      {selectedFestival.title[lang]}
                    </h2>
                    {selectedFestival.edition === 25 && (
                      <span className="bg-[var(--color-gold)] text-[var(--color-black)] text-xs px-2 py-1 rounded font-bold">
                        {content.silverJubilee[lang]}
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--color-gold)]">
                    {selectedFestival.edition > 0 && `${selectedFestival.edition}${getOrdinalSuffix(selectedFestival.edition, lang)} ${content.edition[lang]}`}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-[var(--color-light-gray)]">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedFestival.dates[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedFestival.venue[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Leaflet Toggle */}
              {selectedFestival.leafletImage && (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setShowLeaflet(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      !showLeaflet
                        ? 'bg-[var(--color-gold)] text-[var(--color-black)]'
                        : 'bg-[var(--color-black)]/30 text-[var(--color-light-gray)] hover:bg-[var(--color-black)]/50'
                    }`}
                  >
                    {content.schedule[lang]}
                  </button>
                  <button
                    onClick={() => setShowLeaflet(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      showLeaflet
                        ? 'bg-[var(--color-gold)] text-[var(--color-black)]'
                        : 'bg-[var(--color-black)]/30 text-[var(--color-light-gray)] hover:bg-[var(--color-black)]/50'
                    }`}
                  >
                    {content.viewLeaflet[lang]}
                  </button>
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {showLeaflet && selectedFestival.leafletImage ? (
                <div className="flex justify-center">
                  <OptimizedImage
                    src={selectedFestival.leafletImage}
                    alt={`${selectedFestival.title[lang]} Leaflet`}
                    width={800}
                    quality={80}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              ) : selectedFestival.plays.length > 0 ? (
                <div className="space-y-4">
                  {selectedFestival.plays.map((play, index) => (
                    <div
                      key={index}
                      className="bg-[var(--color-black)]/30 rounded-xl p-4 border border-[var(--color-dark-gray)] hover:border-[var(--color-gold)]/30 transition"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-gold)] font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-[var(--color-white)] mb-2">
                            {play.title[lang]}
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-[var(--color-gray)]">{content.group[lang]}:</span>{' '}
                              <span className="text-[var(--color-light-gray)]">{play.group[lang]}</span>
                            </div>
                            <div>
                              <span className="text-[var(--color-gray)]">{content.director[lang]}:</span>{' '}
                              <span className="text-[var(--color-light-gray)]">{play.director[lang]}</span>
                            </div>
                            {play.playwright && (
                              <div>
                                <span className="text-[var(--color-gray)]">{content.playwright[lang]}:</span>{' '}
                                <span className="text-[var(--color-light-gray)]">{play.playwright[lang]}</span>
                              </div>
                            )}
                            {play.cast && (
                              <div className="sm:col-span-2">
                                <span className="text-[var(--color-gray)]">{content.cast[lang]}:</span>{' '}
                                <span className="text-[var(--color-light-gray)]">{play.cast[lang]}</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 flex items-center gap-4 text-sm">
                            <span className="text-[var(--color-gold)] font-medium">{play.date}</span>
                            {play.time && (
                              <span className="text-[var(--color-gray)]">{play.time}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">📋</span>
                  <p className="text-[var(--color-gray)]">
                    {lang === 'bn'
                      ? 'এই বছরের তথ্য উপলব্ধ নেই।'
                      : lang === 'hi'
                      ? 'इस वर्ष की जानकारी उपलब्ध नहीं है।'
                      : 'Information not available for this year.'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Scrolling Festival Memories Marquee */}
      <FestivalMarquee />
    </main>
  );
}

// Helper function for ordinal suffix
function getOrdinalSuffix(n: number, lang: Language): string {
  if (lang === 'bn') {
    return 'তম';
  }
  if (lang === 'hi') {
    return 'वां';
  }
  // English
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
