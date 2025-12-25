'use client';

import { T } from './components/TranslatedContent';
import { homeContent } from '../lib/content';

export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <T content={homeContent.hero.title} as="h1" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" />
          <T content={homeContent.hero.subtitle} as="p" className="text-2xl text-gray-700 mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#current" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              <T content={homeContent.hero.cta1} />
            </a>
            <a href="#about" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
              <T content={homeContent.hero.cta2} />
            </a>
          </div>
        </div>
      </section>

      {/* Current Announcements */}
      <section id="current" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <T content={homeContent.current.heading} as="h2" className="text-4xl font-bold text-gray-900 mb-8 text-center" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <T content={homeContent.current.productions.title} as="h3" className="text-xl font-bold text-amber-600 mb-3" />
              <T content={homeContent.current.productions.desc} as="p" className="text-gray-600" />
            </div>
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <T content={homeContent.current.festival.title} as="h3" className="text-xl font-bold text-amber-600 mb-3" />
              <T content={homeContent.current.festival.desc} as="p" className="text-gray-600" />
            </div>
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <T content={homeContent.current.workshops.title} as="h3" className="text-xl font-bold text-amber-600 mb-3" />
              <T content={homeContent.current.workshops.desc} as="p" className="text-gray-600" />
            </div>
          </div>
        </div>
      </section>

      {/* About Samatat */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <T content={homeContent.about.heading} as="h2" className="text-4xl font-bold text-gray-900 mb-6 text-center" />

          {/* Formal Tone */}
          <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-amber-600">
            <T content={homeContent.about.formalTitle} as="p" className="text-sm font-semibold text-amber-600 mb-2" />
            <T content={homeContent.about.formalP1} as="p" className="text-gray-700 leading-relaxed mb-4" />
            <T content={homeContent.about.formalP2} as="p" className="text-gray-700 leading-relaxed" />
          </div>

          {/* Warm Tone */}
          <div className="p-6 bg-white rounded-lg border-l-4 border-rose-400">
            <T content={homeContent.about.communityTitle} as="p" className="text-sm font-semibold text-rose-600 mb-2" />
            <T content={homeContent.about.communityP1} as="p" className="text-gray-700 leading-relaxed mb-4" />
            <T content={homeContent.about.communityP2} as="p" className="text-gray-700 leading-relaxed" />
          </div>
        </div>
      </section>

      {/* Engage with Us */}
      <section className="py-16 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <T content={homeContent.engage.heading} as="h2" className="text-4xl font-bold mb-8" />
          <T content={homeContent.engage.subtitle} as="p" className="text-xl mb-12 text-amber-50" />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                <T content={{en: "Join as Activist", bn: "কর্মী হিসাবে যোগ দিন", hi: "कार्यकर्ता के रूप में शामिल हों"}} />
              </h3>
              <p className="text-sm mb-4">
                <T content={{en: "Help organize events and activities", bn: "অনুষ্ঠান এবং কার্যক্রম সংগঠিত করতে সাহায্য করুন", hi: "कार्यक्रमों को व्यवस्थित करने में मदद करें"}} />
              </p>
              <a href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                <T content={{en: "Join as Theatre Worker", bn: "নাট্যকর্মী হিসাবে যোগ দিন", hi: "रंगमंच कार्यकर्ता के रूप में शामिल हों"}} />
              </h3>
              <p className="text-sm mb-4">
                <T content={{en: "Act, direct, design, or crew", bn: "অভিনয়, পরিচালনা, নকশা বা কারিগরি কাজ", hi: "अभिनय, निर्देशन, डिज़ाइन या तकनीकी कार्य"}} />
              </p>
              <a href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                <T content={{en: "Attend a Workshop", bn: "কর্মশালায় অংশগ্রহণ করুন", hi: "कार्यशाला में भाग लें"}} />
              </h3>
              <p className="text-sm mb-4">
                <T content={{en: "Learn theatre skills and techniques", bn: "নাট্য দক্ষতা এবং কৌশল শিখুন", hi: "रंगमंच कौशल और तकनीक सीखें"}} />
              </p>
              <a href="/workshops" className="text-amber-600 font-semibold hover:text-amber-700">
                <T content={{en: "Learn More →", bn: "আরও জানুন →", hi: "और जानें →"}} />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-700 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                <T content={{en: "Request a Performance", bn: "পরিবেশনার অনুরোধ করুন", hi: "प्रदर्शन का अनुरोध करें"}} />
              </h3>
              <p className="text-sm mb-4">
                <T content={{en: "Bring our productions to your venue", bn: "আপনার স্থানে আমাদের প্রযোজনা আনুন", hi: "अपने स्थान पर हमारी प्रस्तुतियाँ लाएं"}} />
              </p>
              <a href="/contact" className="text-white font-semibold hover:text-amber-100">
                <T content={{en: "Contact Us →", bn: "যোগাযোগ করুন →", hi: "संपर्क करें →"}} />
              </a>
            </div>
            <div className="bg-amber-700 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                <T content={{en: "Support Our Work", bn: "আমাদের কাজে সমর্থন করুন", hi: "हमारे काम का समर्थन करें"}} />
              </h3>
              <p className="text-sm mb-4">
                <T content={{en: "Donate to sustain our programs", bn: "আমাদের কর্মসূচি টিকিয়ে রাখতে দান করুন", hi: "हमारे कार्यक्रमों को बनाए रखने के लिए दान करें"}} />
              </p>
              <a href="/contact" className="text-white font-semibold hover:text-amber-100">
                <T content={{en: "Donate →", bn: "দান করুন →", hi: "दान करें →"}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
