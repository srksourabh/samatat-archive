'use client';

import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { BackgroundPhotos } from '../components/BackgroundPhotos';
import { useLanguage } from '../components/LanguageSwitcher';

const productions = [
  {
    title: 'Bisarjan',
    category: { en: 'Tagore Classic', bn: 'রবীন্দ্র ক্লাসিক', hi: 'टैगोर क्लासिक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
    description: {
      en: "Rabindranath Tagore's classic play about sacrifice and devotion.",
      bn: 'ত্যাগ এবং ভক্তি সম্পর্কে রবীন্দ্রনাথ ঠাকুরের ক্লাসিক নাটক।',
      hi: 'बलिदान और भक्ति के बारे में रवींद्रनाथ टैगोर का क्लासिक नाटक।'
    }
  },
  {
    title: 'Satmar Paloan',
    category: { en: 'Cultural Drama', bn: 'সাংস্কৃতিক নাটক', hi: 'सांस्कृतिक नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
    description: {
      en: 'A powerful drama about wrestling and tradition in rural Bengal.',
      bn: 'গ্রামীণ বাংলার কুস্তি এবং ঐতিহ্য সম্পর্কে একটি শক্তিশালী নাটক।',
      hi: 'ग्रामीण बंगाल में कुश्ती और परंपरा के बारे में एक शक्तिशाली नाटक।'
    }
  },
  {
    title: 'Charandas Chor',
    category: { en: 'Classic Adaptation', bn: 'ক্লাসিক অভিযোজন', hi: 'क्लासिक रूपांतरण' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
    description: {
      en: "Habib Tanvir's legendary play about an honest thief.",
      bn: 'একজন সৎ চোর সম্পর্কে হাবিব তানভীরের কিংবদন্তি নাটক।',
      hi: 'एक ईमानदार चोर के बारे में हबीब तनवीर का प्रसिद्ध नाटक।'
    }
  },
  {
    title: 'Tota Kahini',
    category: { en: 'Satirical Drama', bn: 'ব্যঙ্গাত্মক নাটক', hi: 'व्यंग्य नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/09.jpg',
    description: {
      en: 'A satirical masterpiece that uses the metaphor of parrots to comment on society.',
      bn: 'একটি ব্যঙ্গাত্মক মাস্টারপিস যা সমাজের উপর মন্তব্য করতে তোতার রূপক ব্যবহার করে।',
      hi: 'एक व्यंग्यात्मक कृति जो समाज पर टिप्पणी करने के लिए तोतों के रूपक का उपयोग करती है।'
    }
  },
  {
    title: 'Arshi Desher Porshira',
    category: { en: 'Original Drama', bn: 'মৌলিক নাটক', hi: 'मूल नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/Picture-07.jpg',
    description: {
      en: "Our debut production that marked the beginning of Samatat's journey.",
      bn: 'আমাদের প্রথম প্রযোজনা যা সমতটের যাত্রার সূচনা করেছে।',
      hi: 'हमारी पहली प्रस्तुति जिसने समतट की यात्रा की शुरुआत की।'
    }
  },
  {
    title: 'Adharmoni',
    category: { en: 'Social Drama', bn: 'সামাজিক নাটক', hi: 'सामाजिक नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8432.jpg',
    description: {
      en: 'A compelling social drama exploring human relationships and conflicts.',
      bn: 'মানুষের সম্পর্ক এবং দ্বন্দ্ব অন্বেষণকারী একটি আকর্ষণীয় সামাজিক নাটক।',
      hi: 'मानवीय संबंधों और संघर्षों की खोज करने वाला एक आकर्षक सामाजिक नाटक।'
    }
  },
  {
    title: 'Jodi aar ekbar',
    category: { en: 'Modern Drama', bn: 'আধুনিক নাটক', hi: 'आधुनिक नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9104.jpg',
    description: {
      en: 'A contemporary exploration of life, choices, and second chances.',
      bn: 'জীবন, পছন্দ এবং দ্বিতীয় সুযোগের সমসাময়িক অন্বেষণ।',
      hi: 'जीवन, विकल्पों और दूसरे अवसरों की एक समकालीन खोज।'
    }
  },
  {
    title: 'Kagoj Kahini',
    category: { en: 'Experimental', bn: 'পরীক্ষামূলক', hi: 'प्रयोगात्मक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/Picture-08.jpg',
    description: {
      en: 'An experimental piece using paper as a central motif and storytelling tool.',
      bn: 'কাগজকে একটি কেন্দ্রীয় মোটিফ এবং গল্প বলার সরঞ্জাম হিসাবে ব্যবহার করে একটি পরীক্ষামূলক কাজ।',
      hi: 'कागज को एक केंद्रीय रूपांकन और कहानी कहने के उपकरण के रूप में उपयोग करने वाला एक प्रयोगात्मक टुकड़ा।'
    }
  },
  {
    title: 'Kaliprasanna o ora',
    category: { en: 'Historical', bn: 'ঐতিহাসিক', hi: 'ऐतिहासिक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/Picture-02.jpg',
    description: {
      en: 'A historical drama based on the life and times of Kaliprasanna Singha.',
      bn: 'কালীপ্রসন্ন সিংহের জীবন ও সময়ের ওপর ভিত্তি করে একটি ঐতিহাসিক নাটক।',
      hi: 'कालीप्रसन्न सिंह के जीवन और समय पर आधारित एक ऐतिहासिक नाटक।'
    }
  },
  {
    title: 'Podi pishi',
    category: { en: 'Comedy', bn: 'কমেডি', hi: 'कॉमेडी' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture%20370.jpg',
    description: {
      en: 'A delightful comedy that captures the eccentricities of life.',
      bn: 'জীবনের অদ্ভুততাগুলিকে ধরে রাখা একটি আনন্দদায়ক কমেডি।',
      hi: 'एक आनंदमय कॉमेडी जो जीवन की विलक्षणताओं को दर्शाती है।'
    }
  },
  {
    title: 'Roopnagarer roopkotha',
    category: { en: 'Fantasy/Folk', bn: 'কল্পকাহিনী/লোক', hi: 'काल्पनिक/लोक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/Picture-01.jpg',
    description: {
      en: 'A folk-inspired fantasy tale woven with music and magic.',
      bn: 'সঙ্গীত এবং জাদুর সাথে বোনা একটি লোক-অনুপ্রাণিত রূপকথা।',
      hi: 'संगीत और जादू से बुनी गई एक लोक-प्रेरित काल्पनिक कहानी।'
    }
  },
  {
    title: 'Swapnomoy',
    category: { en: 'Dream Drama', bn: 'স্বপ্ন নাটক', hi: 'स्वप्न नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1114.jpg',
    description: {
      en: 'A journey through dreams and the subconscious mind.',
      bn: 'স্বপ্ন এবং অবচেতন মনের মধ্য দিয়ে একটি যাত্রা।',
      hi: 'सपनों और अवचेतन मन के माध्यम से एक यात्रा।'
    }
  }
];

export default function ProductionsPage() {
  const lang = useLanguage();

  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Our Work"
        title={{ en: 'Theatre Productions', bn: 'থিয়েটার প্রযোজনা', hi: 'थिएटर प्रोडक्शन' }}
        description={{
          en: '150+ original productions since 1999, bringing meaningful stories to life',
          bn: '১৯৯৯ সাল থেকে ১৫০+ মৌলিক প্রযোজনা, অর্থবহ গল্পকে জীবন্ত করে তুলছে',
          hi: '1999 से 150+ मूल प्रोडक्शन, सार्थक कहानियों को जीवंत करते हुए'
        }}
      />

      {/* Philosophy Section */}
      <section className="section section-dark relative overflow-hidden">
        <BackgroundPhotos variant="corner" opacity={0.05} position="right" />
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Production Philosophy</h2>
            <p className="text-light-gray text-lg leading-relaxed">
              At Samatat, we bridge the gap between "Star Theatre" and "Pure Theatre." 
              Our goal is to cultivate an audience that appreciates the art form for its 
              craft, story, and direction rather than just famous faces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: '📖', label: 'Story First' },
              { icon: '👥', label: 'Ensemble' },
              { icon: '🎬', label: 'Technical' },
              { icon: '🌿', label: 'Roots' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-black/20 border border-white/5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-gold text-sm font-medium uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Gallery */}
      <section className="section section-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {productions.map((prod, i) => (
              <div key={i} className="group relative bg-black/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold/10">
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/90 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {prod.category[lang]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-light-gray/80 text-sm leading-relaxed mb-6 line-clamp-2">
                    {prod.description[lang]}
                  </p>
                  <Link 
                    href={`/productions/archive?play=${prod.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all"
                  >
                    View Details <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Legacy */}
      <section className="section section-dark text-center">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '150+', l: 'Productions' },
              { n: '26', l: 'Years' },
              { n: '500+', l: 'Performances' },
              { n: '50K+', l: 'Audience' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-light text-gold mb-2">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-light-gray/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-charcoal text-center border-t border-white/5">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-light text-white mb-6">Explore Our Full History</h2>
          <p className="text-light-gray mb-10">
            Dive into our digital archive spanning over two decades of theatrical excellence in Uttarpara.
          </p>
          <Link href="/productions/archive" className="btn btn-primary px-10">
            View Full Archive
          </Link>
        </div>
      </section>
    </main>
  );
}
