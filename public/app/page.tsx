'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { T } from './components/TranslatedContent';
import { HeroCollage } from './components/HeroCollage';
import { useLanguage } from './components/LanguageSwitcher';
import { homeContent } from '../lib/content';
import { facebookSectionContent, facebookPageUrl } from '../lib/facebook-posts';

export default function Home() {
  const lang = useLanguage();
  const [randomQuote, setRandomQuote] = useState(homeContent.quotes[0]);
  const [isLoading, setIsLoading] = useState(true);

  // Select a random quote on each page load (client-side only)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * homeContent.quotes.length);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Client-side initialization
    setRandomQuote(homeContent.quotes[randomIndex]);
  }, []);

  // Facebook Page Plugin URL
  const encodedUrl = encodeURIComponent(facebookPageUrl);
  const embedUrl = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <HeroCollage />
        <div className="hero-overlay" />
        <div className="container hero-content py-32 md:py-40">
          <p className="hero-eyebrow">
            <T content={homeContent.hero.eyebrow} />
          </p>
          <h1 className="hero-title">
            <T content={homeContent.hero.title} />
          </h1>
          <p className="hero-subtitle">
            <T content={homeContent.hero.subtitle} />
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#whats-on" className="btn btn-primary">
              <T content={homeContent.hero.cta1} />
            </Link>
            <Link href="#about" className="btn btn-secondary">
              <T content={homeContent.hero.cta2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Two-Column Panel: Quote (Left) + Facebook (Right) */}
      <section className="py-10 section-charcoal" id="news">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Quote */}
            <div className="flex flex-col justify-center">
              <blockquote className="quote py-8 px-8 h-full flex flex-col justify-center">
                <svg className="w-10 h-10 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="quote-text text-xl md:text-2xl leading-relaxed mb-6">
                  &ldquo;<T content={randomQuote.text} />&rdquo;
                </p>
                <footer className="quote-author mt-auto">
                  <strong className="text-gold"><T content={randomQuote.author} /></strong>
                  <span className="mx-2 text-gray-500">—</span>
                  <span className="text-gray-400"><T content={randomQuote.role} /></span>
                </footer>
              </blockquote>
            </div>

            {/* Right Column - Facebook Feed */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gold uppercase tracking-wider mb-0.5">
                      {facebookSectionContent.eyebrow[lang]}
                    </p>
                    <h3 className="text-lg font-medium text-white">
                      {facebookSectionContent.title[lang]}
                    </h3>
                  </div>
                </div>
                <a
                  href={facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                >
                  <span className="hidden sm:inline">{facebookSectionContent.followUs[lang]}</span>
                  <span className="sm:hidden">Follow</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="relative bg-charcoal rounded-lg overflow-hidden border border-white/10 flex-grow">
                {isLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-charcoal">
                    <div className="animate-pulse flex flex-col items-center">
                      <svg className="w-10 h-10 text-blue-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-gray-400 text-sm">Loading Facebook feed...</span>
                    </div>
                  </div>
                )}
                <iframe
                  src={embedUrl}
                  width="100%"
                  height={350}
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uttarpara Cultural Heritage Section */}
      <section className="py-16 relative overflow-hidden" id="heritage">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={homeContent.uttarpara.backgroundImage}
            alt="Uttarpara Heritage"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <p className="section-eyebrow"><T content={homeContent.uttarpara.eyebrow} /></p>
              <h2 className="section-title"><T content={homeContent.uttarpara.title} /></h2>
              <p className="section-description mx-auto mt-4">
                <T content={homeContent.uttarpara.description} />
              </p>
            </div>

            {/* Two Column Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Literary Heritage */}
              <div className="bg-charcoal/80 backdrop-blur-sm rounded-lg p-6 border border-gold/10 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    <T content={homeContent.uttarpara.heritage.title} />
                  </h3>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  <T content={homeContent.uttarpara.heritage.text} />
                </p>
              </div>

              {/* Theatre Heritage */}
              <div className="bg-charcoal/80 backdrop-blur-sm rounded-lg p-6 border border-gold/10 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    <T content={homeContent.uttarpara.theatre.title} />
                  </h3>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  <T content={homeContent.uttarpara.theatre.text} />
                </p>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-charcoal/80 backdrop-blur-sm rounded-xl p-8 border border-gold/10">
              <h3 className="text-xl font-medium text-white mb-8 text-center">
                <T content={homeContent.uttarpara.landmarks.title} />
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {homeContent.uttarpara.landmarks.items.map((landmark, index) => (
                  <div key={index} className="text-center p-5 rounded-xl bg-black/40 border border-white/5 hover:border-gold/20 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{landmark.icon}</span>
                    </div>
                    <h4 className="text-white text-sm font-medium mb-2">
                      <T content={landmark.name} />
                    </h4>
                    <p className="text-gray text-xs leading-relaxed">
                      <T content={landmark.desc} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Compact */}
      <section id="about" className="py-16 section-charcoal">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-eyebrow"><T content={homeContent.about.eyebrow} /></p>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-5"><T content={homeContent.about.title} /></h2>
              <p className="text-gray leading-relaxed mb-4 text-sm">
                <T content={homeContent.about.description} />
              </p>
              <p className="text-gray leading-relaxed mb-4 text-sm">
                <T content={homeContent.about.paragraph1} />
              </p>
              <p className="text-gray leading-relaxed mb-6 text-sm">
                <T content={homeContent.about.paragraph2} />
              </p>
              <Link href="/about" className="btn-text text-sm">
                <T content={homeContent.about.cta} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded overflow-hidden">
                <img
                  src="https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1111.jpg"
                  alt="Samatat Sanskriti Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - Compact */}
      <section className="py-12 section-dark">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-eyebrow"><T content={homeContent.programs.eyebrow} /></p>
            <h2 className="text-2xl font-light text-white"><T content={homeContent.programs.title} /></h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.programs.items.map((program, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4 text-gold text-lg font-light border border-gold/20">
                  {index + 1}
                </div>
                <h3 className="text-base font-medium text-white mb-2">
                  <T content={program.title} />
                </h3>
                <p className="text-gray text-xs leading-relaxed">
                  <T content={program.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 section-charcoal">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-light text-white mb-4">
              <T content={homeContent.cta.title} />
            </h2>
            <p className="text-gray text-sm mb-8">
              <T content={homeContent.cta.description} />
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                <T content={homeContent.cta.button1} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <T content={homeContent.cta.button2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
