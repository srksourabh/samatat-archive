'use client';

import { T } from './components/TranslatedContent';
import { homeContent } from '../lib/content';

export default function Home() {
  return (
    <div className="bg-black font-sans">
      {/* Hero Section - Main Stage with Proscenium */}
      <section className="relative stage-curtain proscenium-arch min-h-screen flex items-center justify-center overflow-hidden">
        {/* Valance - Top Curtain Drape */}
        <div className="valance"></div>

        {/* Stage Wings - Left and Right */}
        <div className="stage-wings-left hidden lg:block"></div>
        <div className="stage-wings-right hidden lg:block"></div>

        {/* Stage Background - Deep velvet */}
        <div className="absolute inset-0 velvet-bg opacity-50"></div>

        {/* Chandelier Light */}
        <div className="chandelier-light"></div>

        {/* Spotlight Effect - Main theatrical lighting */}
        <div className="spotlight"></div>

        {/* Stage Lights - Left */}
        <div className="stage-light stage-light-left hidden lg:block"></div>

        {/* Stage Lights - Right */}
        <div className="stage-light stage-light-right hidden lg:block"></div>

        {/* Theatre Masks - Bottom Corners */}
        <div className="absolute bottom-8 left-8 hidden md:block z-30">
          <div className="text-6xl opacity-20 filter drop-shadow-lg">🎭</div>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block z-30">
          <div className="text-6xl opacity-20 filter drop-shadow-lg transform scale-x-[-1]">🎭</div>
        </div>

        {/* Additional Props */}
        <div className="absolute top-20 left-12 hidden xl:block z-30">
          <div className="text-4xl opacity-15">🎪</div>
        </div>
        <div className="absolute top-32 right-16 hidden xl:block z-30">
          <div className="text-4xl opacity-15">🎬</div>
        </div>

        {/* Main Content - Center Stage */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 py-32 text-center stage-floor footlights">
          <div className="mb-8">
            <span className="text-6xl md:text-8xl mb-6 inline-block animate-pulse">🎭</span>
          </div>

          <T content={homeContent.hero.title} as="h1" className="text-5xl md:text-7xl font-bold theatre-text-gold mb-6 tracking-wide" />
          <T content={homeContent.hero.subtitle} as="p" className="text-2xl md:text-3xl theatre-text-light mb-12 tracking-wide" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#current" className="marquee-lights">
              <span className="block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-amber-800 shadow-2xl transition transform hover:scale-105">
                <T content={homeContent.hero.cta1} />
              </span>
            </a>
            <a href="#about" className="theatre-ticket inline-block">
              <T content={homeContent.hero.cta2} />
            </a>
          </div>
        </div>

        {/* Footlights glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-900/20 to-transparent z-30"></div>
      </section>

      {/* Rope Divider */}
      <div className="rope-divider"></div>

      {/* Current Announcements - Side Stage */}
      <section id="current" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Decorative masks */}
        <div className="absolute top-12 left-6 text-5xl opacity-10">🎪</div>
        <div className="absolute bottom-12 right-6 text-5xl opacity-10">🎬</div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="stage-sign inline-block mb-16">
            <T content={homeContent.current.heading} />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="playbill-card hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105 pt-16">
              <div className="text-4xl mb-4 text-center">🎭</div>
              <T content={homeContent.current.productions.title} as="h3" className="text-2xl font-bold text-gray-900 mb-4 text-center" />
              <T content={homeContent.current.productions.desc} as="p" className="text-gray-700 leading-relaxed text-center" />
            </div>

            <div className="playbill-card hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105 pt-16">
              <div className="text-4xl mb-4 text-center">🎪</div>
              <T content={homeContent.current.festival.title} as="h3" className="text-2xl font-bold text-gray-900 mb-4 text-center" />
              <T content={homeContent.current.festival.desc} as="p" className="text-gray-700 leading-relaxed text-center" />
            </div>

            <div className="playbill-card hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105 pt-16">
              <div className="text-4xl mb-4 text-center">🎬</div>
              <T content={homeContent.current.workshops.title} as="h3" className="text-2xl font-bold text-gray-900 mb-4 text-center" />
              <T content={homeContent.current.workshops.desc} as="p" className="text-gray-700 leading-relaxed text-center" />
            </div>
          </div>
        </div>
      </section>

      {/* About Samatat - Backstage View */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black relative">
        <div className="absolute inset-0 velvet-bg opacity-30"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <T content={homeContent.about.heading} as="h2" className="text-5xl font-bold theatre-text-gold mb-12 text-center" />

          {/* Formal Tone */}
          <div className="mb-10 p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border-l-4 border-amber-500 shadow-2xl backdrop-blur-sm">
            <T content={homeContent.about.formalTitle} as="p" className="text-sm font-bold text-amber-400 mb-3 tracking-wider" />
            <T content={homeContent.about.formalP1} as="p" className="text-gray-200 leading-relaxed mb-5 text-lg" />
            <T content={homeContent.about.formalP2} as="p" className="text-gray-200 leading-relaxed text-lg" />
          </div>

          {/* Warm Tone */}
          <div className="p-8 bg-gradient-to-br from-purple-900/60 to-gray-900/80 rounded-xl border-l-4 border-rose-500 shadow-2xl backdrop-blur-sm">
            <T content={homeContent.about.communityTitle} as="p" className="text-sm font-bold text-rose-400 mb-3 tracking-wider" />
            <T content={homeContent.about.communityP1} as="p" className="text-gray-200 leading-relaxed mb-5 text-lg" />
            <T content={homeContent.about.communityP2} as="p" className="text-gray-200 leading-relaxed text-lg" />
          </div>
        </div>
      </section>

      {/* Rope Divider */}
      <div className="rope-divider"></div>

      {/* Engage with Us - Grand Finale */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-amber-950/30 to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🎭</div>
          <div className="absolute top-10 right-10 text-6xl transform scale-x-[-1]">🎭</div>
          <div className="absolute bottom-10 left-1/4 text-5xl">🎪</div>
          <div className="absolute bottom-10 right-1/4 text-5xl">🎬</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <T content={homeContent.engage.heading} as="h2" className="text-5xl font-bold theatre-text-gold mb-8" />
          <T content={homeContent.engage.subtitle} as="p" className="text-2xl theatre-text-light mb-16 tracking-wide" />

          {/* Theatre Seat Row Navigation */}
          <div className="theatre-seat-row mb-16 justify-center">
            <div className="theatre-seat vip" title="Join as Activist"></div>
            <div className="theatre-seat vip" title="Theatre Worker"></div>
            <div className="theatre-seat vip" title="Workshop"></div>
            <div className="theatre-seat occupied"></div>
            <div className="theatre-seat vip" title="Performance Request"></div>
            <div className="theatre-seat vip" title="Support"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="drama-mask">
              <div>
                <div className="font-bold text-lg mb-2">
                  <T content={{en: "Join as Activist", bn: "কর্মী হিসাবে যোগ দিন", hi: "कार्यकर्ता के रूप में शामिल हों"}} />
                </div>
                <p className="text-xs text-amber-200">
                  <T content={{en: "Help organize events", bn: "অনুষ্ঠান সংগঠিত করুন", hi: "कार्यक्रम व्यवस्थित करें"}} />
                </p>
              </div>
            </div>

            <div className="drama-mask">
              <div>
                <div className="font-bold text-lg mb-2">
                  <T content={{en: "Theatre Worker", bn: "নাট্যকর্মী", hi: "रंगमंच कार्यकर्ता"}} />
                </div>
                <p className="text-xs text-amber-200">
                  <T content={{en: "Act, direct, design", bn: "অভিনয়, পরিচালনা", hi: "अभिनय, निर्देशन"}} />
                </p>
              </div>
            </div>

            <div className="drama-mask">
              <div>
                <div className="font-bold text-lg mb-2">
                  <T content={{en: "Attend Workshop", bn: "কর্মশালা", hi: "कार्यशाला"}} />
                </div>
                <p className="text-xs text-amber-200">
                  <T content={{en: "Learn theatre skills", bn: "নাট্য দক্ষতা শিখুন", hi: "रंगमंच सीखें"}} />
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="backstage-pass transform hover:scale-105 transition cursor-pointer">
              <div className="text-4xl mb-2">🎪</div>
              <div className="font-bold text-lg mb-2">
                <T content={{en: "Request Performance", bn: "পরিবেশনার অনুরোধ", hi: "प्रदर्शन का अनुरोध"}} />
              </div>
              <p className="text-xs text-amber-300">
                <T content={{en: "Bring our shows to your venue", bn: "আপনার স্থানে আমাদের প্রযোজনা", hi: "अपने स्थान पर हमारी प्रस्तुति"}} />
              </p>
            </div>

            <div className="backstage-pass transform hover:scale-105 transition cursor-pointer">
              <div className="text-4xl mb-2">❤️</div>
              <div className="font-bold text-lg mb-2">
                <T content={{en: "Support Our Work", bn: "আমাদের সমর্থন করুন", hi: "हमारा समर्थन करें"}} />
              </div>
              <p className="text-xs text-amber-300">
                <T content={{en: "Donate to sustain programs", bn: "কর্মসূচি টিকিয়ে রাখতে দান", hi: "कार्यक्रमों के लिए दान"}} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
