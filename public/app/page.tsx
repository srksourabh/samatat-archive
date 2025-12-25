'use client';

import { T } from './components/TranslatedContent';
import { homeContent } from '../lib/content';

export default function Home() {
  return (
    <div className="bg-black font-sans">
      {/* Hero Section - Main Stage */}
      <section className="relative stage-curtain proscenium-arch min-h-screen flex items-center justify-center overflow-hidden">
        {/* Stage Background */}
        <div className="absolute inset-0 velvet-bg opacity-50"></div>

        {/* Spotlight Effect */}
        <div className="spotlight absolute inset-0"></div>

        {/* Stage Lights - Left */}
        <div className="stage-light stage-light-left hidden lg:block"></div>

        {/* Stage Lights - Right */}
        <div className="stage-light stage-light-right hidden lg:block"></div>

        {/* Theatre Masks - Bottom Corners */}
        <div className="absolute bottom-8 left-8 hidden md:block">
          <div className="text-6xl opacity-20 filter drop-shadow-lg">🎭</div>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block">
          <div className="text-6xl opacity-20 filter drop-shadow-lg transform scale-x-[-1]">🎭</div>
        </div>

        {/* Additional Props */}
        <div className="absolute top-20 left-12 hidden xl:block">
          <div className="text-4xl opacity-15">🎪</div>
        </div>
        <div className="absolute top-32 right-16 hidden xl:block">
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
            <a href="#current" className="ornate-border bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-amber-800 shadow-2xl transition transform hover:scale-105">
              <T content={homeContent.hero.cta1} />
            </a>
            <a href="#about" className="ornate-border bg-transparent border-2 border-amber-500 text-amber-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-900/30 shadow-2xl transition transform hover:scale-105">
              <T content={homeContent.hero.cta2} />
            </a>
          </div>
        </div>

        {/* Footlights glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
      </section>

      {/* Current Announcements - Side Stage */}
      <section id="current" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Decorative masks */}
        <div className="absolute top-12 left-6 text-5xl opacity-10">🎪</div>
        <div className="absolute bottom-12 right-6 text-5xl opacity-10">🎬</div>

        <div className="max-w-6xl mx-auto relative z-10">
          <T content={homeContent.current.heading} as="h2" className="text-5xl font-bold theatre-text-gold mb-16 text-center" />

          <div className="grid md:grid-cols-3 gap-10">
            <div className="ornate-border bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">🎭</div>
              <T content={homeContent.current.productions.title} as="h3" className="text-2xl font-bold theatre-text-gold mb-4" />
              <T content={homeContent.current.productions.desc} as="p" className="text-gray-300 leading-relaxed" />
            </div>

            <div className="ornate-border bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">🎪</div>
              <T content={homeContent.current.festival.title} as="h3" className="text-2xl font-bold theatre-text-gold mb-4" />
              <T content={homeContent.current.festival.desc} as="p" className="text-gray-300 leading-relaxed" />
            </div>

            <div className="ornate-border bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">🎬</div>
              <T content={homeContent.current.workshops.title} as="h3" className="text-2xl font-bold theatre-text-gold mb-4" />
              <T content={homeContent.current.workshops.desc} as="p" className="text-gray-300 leading-relaxed" />
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="ornate-border bg-gradient-to-br from-amber-900/40 to-gray-900/80 text-white p-8 rounded-xl shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold text-xl mb-3 theatre-text-gold">
                <T content={{en: "Join as Activist", bn: "কর্মী হিসাবে যোগ দিন", hi: "कार्यकर्ता के रूप में शामिल हों"}} />
              </h3>
              <p className="text-sm mb-5 text-gray-300">
                <T content={{en: "Help organize events and activities", bn: "অনুষ্ঠান এবং কার্যক্রম সংগঠিত করতে সাহায্য করুন", hi: "कार्यक्रमों को व्यवस्थित करने में मदद करें"}} />
              </p>
              <a href="/contact" className="text-amber-400 font-semibold hover:text-amber-300 transition">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>

            <div className="ornate-border bg-gradient-to-br from-amber-900/40 to-gray-900/80 text-white p-8 rounded-xl shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-bold text-xl mb-3 theatre-text-gold">
                <T content={{en: "Join as Theatre Worker", bn: "নাট্যকর্মী হিসাবে যোগ দিন", hi: "रंगमंच कार्यकर्ता के रूप में शामिल हों"}} />
              </h3>
              <p className="text-sm mb-5 text-gray-300">
                <T content={{en: "Act, direct, design, or crew", bn: "অভিনয়, পরিচালনা, নকশা বা কারিগরি কাজ", hi: "अभिनय, निर्देशन, डिज़ाइन या तकनीकी कार्य"}} />
              </p>
              <a href="/contact" className="text-amber-400 font-semibold hover:text-amber-300 transition">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>

            <div className="ornate-border bg-gradient-to-br from-amber-900/40 to-gray-900/80 text-white p-8 rounded-xl shadow-2xl hover:shadow-amber-900/50 transition transform hover:scale-105">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-xl mb-3 theatre-text-gold">
                <T content={{en: "Attend a Workshop", bn: "কর্মশালায় অংশগ্রহণ করুন", hi: "कार्यशाला में भाग लें"}} />
              </h3>
              <p className="text-sm mb-5 text-gray-300">
                <T content={{en: "Learn theatre skills and techniques", bn: "নাট্য দক্ষতা এবং কৌশল শিখুন", hi: "रंगमंच कौशल और तकनीक सीखें"}} />
              </p>
              <a href="/workshops" className="text-amber-400 font-semibold hover:text-amber-300 transition">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-amber-800 to-amber-900 p-8 rounded-xl shadow-2xl ornate-border transform hover:scale-105 transition">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="font-bold text-xl mb-3 text-white">
                <T content={{en: "Request a Performance", bn: "পরিবেশনার অনুরোধ করুন", hi: "प्रदर्शन का अनुरोध करें"}} />
              </h3>
              <p className="text-sm mb-5 text-amber-100">
                <T content={{en: "Bring our productions to your venue", bn: "আপনার স্থানে আমাদের প্রযোজনা আনুন", hi: "अपने स्थान पर हमारी प्रस्तुतियाँ लाएं"}} />
              </p>
              <a href="/contact" className="text-white font-semibold hover:text-amber-200 transition">
                <T content={{en: "Contact Us →", bn: "যোগাযোগ করুন →", hi: "संपर्क करें →"}} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-800 to-amber-900 p-8 rounded-xl shadow-2xl ornate-border transform hover:scale-105 transition">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-bold text-xl mb-3 text-white">
                <T content={{en: "Support Our Work", bn: "আমাদের কাজে সমর্থন করুন", hi: "हमारे काम का समर्थन करें"}} />
              </h3>
              <p className="text-sm mb-5 text-amber-100">
                <T content={{en: "Donate to sustain our programs", bn: "আমাদের কর্মসূচি টিকিয়ে রাখতে দান করুন", hi: "हमारे कार्यक्रमों को बनाए रखने के लिए दान करें"}} />
              </p>
              <a href="/contact" className="text-white font-semibold hover:text-amber-200 transition">
                <T content={{en: "Donate →", bn: "দান করুন →", hi: "दान करें →"}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
