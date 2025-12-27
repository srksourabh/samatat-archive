'use client';

import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { BackgroundPhotos } from '../components/BackgroundPhotos';
import { useLanguage } from '../components/LanguageSwitcher';

// Translations
const content = {
  description: {
    en: '150+ original productions since 1999, bringing meaningful stories to life',
    bn: '১৯৯৯ সাল থেকে ১৫০+ মৌলিক প্রযোজনা, অর্থবহ গল্পকে জীবন্ত করে তুলছে',
    hi: '1999 से 150+ मूल प्रोडक्शन, सार्थक कहानियों को जीवंत करते हुए'
  },
  philosophyTitle: {
    en: 'Our Production Philosophy',
    bn: 'আমাদের প্রযোজনা দর্শন',
    hi: 'हमारा प्रोडक्शन दर्शन'
  },
  philosophyDesc: {
    en: 'At Samatat, we bridge the gap between "Star Theatre" and "Pure Theatre." Our goal is to cultivate an audience that appreciates the art form for its craft, story, and direction rather than just famous faces.',
    bn: 'সমতটে, আমরা "স্টার থিয়েটার" এবং "পিওর থিয়েটার"-এর মধ্যে ব্যবধান দূর করি। আমাদের লক্ষ্য এমন দর্শক তৈরি করা যারা শুধু বিখ্যাত মুখের জন্য নয়, বরং শিল্প, গল্প এবং পরিচালনার জন্য শিল্পকলাকে মূল্যায়ন করে।',
    hi: 'समतट में, हम "स्टार थिएटर" और "प्योर थिएटर" के बीच की खाई को पाटते हैं। हमारा लक्ष्य ऐसे दर्शक तैयार करना है जो केवल प्रसिद्ध चेहरों के बजाय कला, कहानी और निर्देशन के लिए कला रूप की सराहना करें।'
  },
  storyFirst: {
    en: 'Story First',
    bn: 'গল্প প্রথম',
    hi: 'कहानी पहले'
  },
  storyDesc: {
    en: 'We believe in the power of compelling narratives. Every production begins with a story worth telling.',
    bn: 'আমরা আকর্ষণীয় বর্ণনার শক্তিতে বিশ্বাস করি। প্রতিটি প্রযোজনা একটি বলার যোগ্য গল্প দিয়ে শুরু হয়।',
    hi: 'हम आकर्षक कथाओं की शक्ति में विश्वास करते हैं। हर प्रोडक्शन एक बताने लायक कहानी से शुरू होता है।'
  },
  ensembleActing: {
    en: 'Ensemble Acting',
    bn: 'দলগত অভিনয়',
    hi: 'समूह अभिनय'
  },
  ensembleDesc: {
    en: 'Our productions showcase the collective strength of our ensemble, not individual stars.',
    bn: 'আমাদের প্রযোজনাগুলি ব্যক্তিগত তারকা নয়, আমাদের দলের সম্মিলিত শক্তি প্রদর্শন করে।',
    hi: 'हमारी प्रस्तुतियां व्यक्तिगत सितारों के बजाय हमारी टीम की सामूहिक शक्ति प्रदर्शित करती हैं।'
  },
  technicalExcellence: {
    en: 'Technical Excellence',
    bn: 'প্রযুক্তিগত উৎকর্ষ',
    hi: 'तकनीकी उत्कृष्टता'
  },
  technicalDesc: {
    en: 'From lighting to makeup, we invest in technical quality that elevates the theatrical experience.',
    bn: 'আলো থেকে মেকআপ পর্যন্ত, আমরা প্রযুক্তিগত গুণমানে বিনিয়োগ করি যা নাট্য অভিজ্ঞতাকে উন্নত করে।',
    hi: 'लाइटिंग से मेकअप तक, हम तकनीकी गुणवत्ता में निवेश करते हैं जो नाट्य अनुभव को बढ़ाती है।'
  },
  culturalRoots: {
    en: 'Cultural Roots',
    bn: 'সাংস্কৃতিক মূল',
    hi: 'सांस्कृतिक जड़ें'
  },
  culturalDesc: {
    en: 'While embracing innovation, our productions remain rooted in Bengali theatrical traditions.',
    bn: 'উদ্ভাবনকে গ্রহণ করার পাশাপাশি, আমাদের প্রযোজনাগুলি বাংলা নাট্য ঐতিহ্যে প্রোথিত থাকে।',
    hi: 'नवाचार को अपनाते हुए, हमारी प्रस्तुतियां बंगाली नाट्य परंपराओं में निहित रहती हैं।'
  },
  productions: {
    en: 'Productions',
    bn: 'প্রযোজনা',
    hi: 'प्रस्तुतियाँ'
  },
  yearsActive: {
    en: 'Years Active',
    bn: 'সক্রিয় বছর',
    hi: 'सक्रिय वर्ष'
  },
  performances: {
    en: 'Performances',
    bn: 'পরিবেশনা',
    hi: 'प्रदर्शन'
  },
  audienceReached: {
    en: 'Audience Reached',
    bn: 'দর্শক পৌঁছেছে',
    hi: 'दर्शकों तक पहुंचे'
  },
  notableProductions: {
    en: 'Notable Productions',
    bn: 'উল্লেখযোগ্য প্রযোজনা',
    hi: 'उल्लेखनीय प्रस्तुतियाँ'
  },
  notableDesc: {
    en: 'From folk epics to contemporary dramas, our productions span the full spectrum of Bengali theatre',
    bn: 'লোক মহাকাব্য থেকে সমসাময়িক নাটক পর্যন্ত, আমাদের প্রযোজনাগুলি বাংলা থিয়েটারের সম্পূর্ণ বর্ণালী জুড়ে বিস্তৃত',
    hi: 'लोक महाकाव्यों से समकालीन नाटकों तक, हमारी प्रस्तुतियां बंगाली रंगमंच के पूर्ण स्पेक्ट्रम में फैली हुई हैं'
  },
  whatWeStage: {
    en: 'What We Stage',
    bn: 'আমরা যা মঞ্চস্থ করি',
    hi: 'हम क्या मंचित करते हैं'
  },
  classicalAdaptations: {
    en: 'Classical Adaptations',
    bn: 'ধ্রুপদী অভিযোজন',
    hi: 'शास्त्रीय रूपांतरण'
  },
  classicalDesc: {
    en: 'Works of Tagore, Sarat Chandra, and other Bengali literary giants brought to life on stage with contemporary sensibilities while respecting the original vision.',
    bn: 'রবীন্দ্রনাথ, শরৎচন্দ্র এবং অন্যান্য বাংলা সাহিত্যের মহারথীদের রচনা মূল দৃষ্টিভঙ্গিকে সম্মান করে সমসাময়িক সংবেদনশীলতার সাথে মঞ্চে জীবন্ত করা হয়েছে।',
    hi: 'टैगोर, शरत चंद्र और अन्य बंगाली साहित्यिक दिग्गजों की रचनाएं मूल दृष्टि का सम्मान करते हुए समकालीन संवेदनाओं के साथ मंच पर जीवंत की गईं।'
  },
  originalScripts: {
    en: 'Original Scripts',
    bn: 'মৌলিক স্ক্রিপ্ট',
    hi: 'मूल स्क्रिप्ट'
  },
  originalDesc: {
    en: 'New plays written by our alumni and guest writers, addressing contemporary issues while maintaining the theatrical traditions we cherish.',
    bn: 'আমাদের প্রাক্তন ছাত্র এবং অতিথি লেখকদের লেখা নতুন নাটক, যা আমরা লালন করি সেই নাট্য ঐতিহ্য বজায় রেখে সমসাময়িক বিষয়গুলিকে সম্বোধন করে।',
    hi: 'हमारे पूर्व छात्रों और अतिथि लेखकों द्वारा लिखित नई नाटक, हमारी पोषित नाट्य परंपराओं को बनाए रखते हुए समकालीन मुद्दों को संबोधित करती हैं।'
  },
  folkTraditional: {
    en: 'Folk & Traditional',
    bn: 'লোক ও ঐতিহ্যবাহী',
    hi: 'लोक और पारंपरिक'
  },
  folkDesc: {
    en: "Productions rooted in Bengal's rich folk traditions, from Jatra-inspired pieces to contemporary interpretations of classical tales.",
    bn: 'বাংলার সমৃদ্ধ লোক ঐতিহ্যে প্রোথিত প্রযোজনা, যাত্রা-অনুপ্রাণিত পিস থেকে ধ্রুপদী কাহিনীর সমসাময়িক ব্যাখ্যা পর্যন্ত।',
    hi: 'बंगाल की समृद्ध लोक परंपराओं में निहित प्रस्तुतियां, जात्रा-प्रेरित टुकड़ों से लेकर शास्त्रीय कथाओं की समकालीन व्याख्याओं तक।'
  },
  currentSeason: {
    en: 'Current Season',
    bn: 'বর্তমান মরসুম',
    hi: 'वर्तमान सीजन'
  },
  nowShowing: {
    en: 'Now Showing',
    bn: 'এখন দেখানো হচ্ছে',
    hi: 'अभी दिखाया जा रहा है'
  },
  currentProductions: {
    en: '2024-2025 Productions',
    bn: '২০২৪-২০২৫ প্রযোজনা',
    hi: '2024-2025 प्रस्तुतियाँ'
  },
  viewCurrentSeason: {
    en: 'View our current season lineup and upcoming performances.',
    bn: 'আমাদের বর্তমান মরসুমের লাইনআপ এবং আসন্ন পরিবেশনা দেখুন।',
    hi: 'हमारे वर्तमान सीजन लाइनअप और आगामी प्रदर्शन देखें।'
  },
  viewSeason: {
    en: 'View current season',
    bn: 'বর্তমান মরসুম দেখুন',
    hi: 'वर्तमान सीजन देखें'
  },
  productionArchive: {
    en: 'Production Archive',
    bn: 'প্রযোজনা আর্কাইভ',
    hi: 'प्रोडक्शन संग्रह'
  },
  viewProductions: {
    en: 'View productions',
    bn: 'প্রযোজনা দেখুন',
    hi: 'प्रस्तुतियाँ देखें'
  },
  viewFullArchive: {
    en: 'View Full Archive',
    bn: 'সম্পূর্ণ আর্কাইভ দেখুন',
    hi: 'पूर्ण संग्रह देखें'
  },
  requestPerformance: {
    en: 'Request a Performance',
    bn: 'পরিবেশনার জন্য অনুরোধ করুন',
    hi: 'प्रदर्शन का अनुरोध करें'
  },
  requestDesc: {
    en: 'Interested in bringing our productions to your venue, school, or community event? We perform across West Bengal and beyond.',
    bn: 'আমাদের প্রযোজনাগুলি আপনার ভেন্যু, স্কুল বা সম্প্রদায়ের ইভেন্টে আনতে আগ্রহী? আমরা পশ্চিমবঙ্গ এবং তার বাইরে পারফর্ম করি।',
    hi: 'हमारी प्रस्तुतियों को अपने स्थान, स्कूल या सामुदायिक कार्यक्रम में लाने में रुचि रखते हैं? हम पश्चिम बंगाल और उससे आगे प्रदर्शन करते हैं।'
  }
};

const productionYears = [
  { year: '2024', description: { en: 'Current season productions', bn: 'বর্তমান মরসুমের প্রযোজনা', hi: 'वर्तमान सीजन प्रस्तुतियाँ' }, href: '/productions/2024' },
  { year: '2023', description: { en: 'Recent productions and performances', bn: 'সাম্প্রতিক প্রযোজনা ও পরিবেশনা', hi: 'हालिया प्रस्तुतियाँ और प्रदर्शन' }, href: '/productions/2023' },
];

// Notable productions with translations
const notableProductions = [
  {
    title: 'Behula',
    description: {
      en: 'An epic retelling of the Bengali folk tale, this production won the hearts of audiences across Bengal with its powerful performances and innovative staging.',
      bn: 'বাংলা লোককথার এক মহাকাব্যিক পুনঃবিবরণ, এই প্রযোজনা তার শক্তিশালী পারফরম্যান্স এবং উদ্ভাবনী মঞ্চায়নের মাধ্যমে বাংলা জুড়ে দর্শকদের হৃদয় জয় করেছে।',
      hi: 'बंगाली लोककथा का एक महाकाव्य पुनर्कथन, इस प्रस्तुति ने अपने शक्तिशाली प्रदर्शन और नवीन मंचन के साथ बंगाल भर के दर्शकों का दिल जीत लिया।'
    },
    category: { en: 'Folk Epic', bn: 'লোক মহাকাব্য', hi: 'लोक महाकाव्य' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  },
  {
    title: 'Tota Kahini',
    description: {
      en: 'A satirical masterpiece that uses the metaphor of parrots to comment on society. This production traveled extensively and received critical acclaim.',
      bn: 'একটি ব্যঙ্গাত্মক মাস্টারপিস যা সমাজের উপর মন্তব্য করতে তোতার রূপক ব্যবহার করে। এই প্রযোজনা ব্যাপকভাবে ভ্রমণ করেছে এবং সমালোচকদের প্রশংসা পেয়েছে।',
      hi: 'एक व्यंग्यात्मक कृति जो समाज पर टिप्पणी करने के लिए तोतों के रूपक का उपयोग करती है। इस प्रस्तुति ने व्यापक यात्रा की और आलोचनात्मक प्रशंसा प्राप्त की।'
    },
    category: { en: 'Satirical Drama', bn: 'ব্যঙ্গাত্মক নাটক', hi: 'व्यंग्य नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
  },
  {
    title: 'Satmar Paloan',
    description: {
      en: 'A powerful drama about wrestling and tradition, showcasing the rich cultural heritage of rural Bengal through compelling storytelling.',
      bn: 'কুস্তি এবং ঐতিহ্য সম্পর্কে একটি শক্তিশালী নাটক, আকর্ষণীয় গল্প বলার মাধ্যমে গ্রামীণ বাংলার সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য প্রদর্শন করে।',
      hi: 'कुश्ती और परंपरा के बारे में एक शक्तिशाली नाटक, आकर्षक कहानी के माध्यम से ग्रामीण बंगाल की समृद्ध सांस्कृतिक विरासत को प्रदर्शित करता है।'
    },
    category: { en: 'Cultural Drama', bn: 'সাংস্কৃতিক নাটক', hi: 'सांस्कृतिक नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
  },
  {
    title: 'Bisarjan',
    description: {
      en: "Rabindranath Tagore's classic play about sacrifice and devotion, staged with reverence for the original while bringing fresh perspectives.",
      bn: 'ত্যাগ এবং ভক্তি সম্পর্কে রবীন্দ্রনাথ ঠাকুরের ক্লাসিক নাটক, নতুন দৃষ্টিভঙ্গি আনার সাথে সাথে মূলের প্রতি শ্রদ্ধা রেখে মঞ্চস্থ।',
      hi: 'बलिदान और भक्ति के बारे में रवींद्रनाथ टैगोर का क्लासिक नाटक, मूल के प्रति सम्मान के साथ नई दृष्टि लाते हुए मंचित।'
    },
    category: { en: 'Tagore Classic', bn: 'রবীন্দ্র ক্লাসিক', hi: 'टैगोर क्लासिक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  },
  {
    title: 'Arshi Desher Porshira',
    description: {
      en: "Our debut production that marked the beginning of Samatat's journey in serious theatre. A story that resonates with audiences to this day.",
      bn: 'আমাদের প্রথম প্রযোজনা যা গুরুতর থিয়েটারে সমতটের যাত্রার সূচনা করেছে। একটি গল্প যা আজও দর্শকদের সাথে অনুরণিত হয়।',
      hi: 'हमारी पहली प्रस्तुति जिसने गंभीर रंगमंच में समतट की यात्रा की शुरुआत की। एक कहानी जो आज भी दर्शकों के साथ गूंजती है।'
    },
    category: { en: 'Original Drama', bn: 'মৌলিক নাটক', hi: 'मूल नाटक' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/Picture-07.jpg',
  },
  {
    title: 'Charandas Chor',
    description: {
      en: "Habib Tanvir's legendary play about an honest thief, performed at the Academy of Fine Arts and other prestigious venues across Kolkata.",
      bn: 'একজন সৎ চোর সম্পর্কে হাবিব তানভীরের কিংবদন্তি নাটক, একাডেমি অফ ফাইন আর্টস এবং কলকাতা জুড়ে অন্যান্য মর্যাদাপূর্ণ স্থানে পরিবেশিত।',
      hi: 'एक ईमानदार चोर के बारे में हबीब तनवीर का प्रसिद्ध नाटक, अकादमी ऑफ फाइन आर्ट्स और कोलकाता के अन्य प्रतिष्ठित स्थानों में प्रदर्शित।'
    },
    category: { en: 'Classic Adaptation', bn: 'ক্লাসিক অভিযোজন', hi: 'क्लासिक रूपांतरण' },
    image: 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
  },
];

export default function ProductionsPage() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader
        eyebrow="Our Work"
        title={{ en: 'Theatre Productions', bn: 'থিয়েটার প্রযোজনা', hi: 'थिएटर प्रोडक्शन' }}
        description={content.description}
      />

      {/* Production Philosophy */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="right" />
        <div className="container max-w-4xl">
          <h2 className="section-title mb-6">{content.philosophyTitle[lang]}</h2>
          <p className="text-light-gray text-lg leading-relaxed text-center mb-8">
            {content.philosophyDesc[lang]}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-white text-lg mb-2">{content.storyFirst[lang]}</h3>
              <p className="text-light-gray text-sm">{content.storyDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-white text-lg mb-2">{content.ensembleActing[lang]}</h3>
              <p className="text-light-gray text-sm">{content.ensembleDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-white text-lg mb-2">{content.technicalExcellence[lang]}</h3>
              <p className="text-light-gray text-sm">{content.technicalDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-white text-lg mb-2">{content.culturalRoots[lang]}</h3>
              <p className="text-light-gray text-sm">{content.culturalDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">{content.productions[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">{content.yearsActive[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{content.performances[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">{content.audienceReached[lang]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Productions */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-4">{content.notableProductions[lang]}</h2>
          <p className="section-description mx-auto mb-10">{content.notableDesc[lang]}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notableProductions.map((production) => (
              <div key={production.title} className="card overflow-hidden group">
                <div
                  className="h-48 relative"
                  style={{
                    backgroundImage: `url(${production.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 text-gold text-xs tracking-widest uppercase bg-black/60 px-3 py-1 rounded">
                    {production.category[lang]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl mb-3 group-hover:text-gold transition-colors">
                    {production.title}
                  </h3>
                  <p className="text-light-gray text-sm">{production.description[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Categories */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title mb-10">{content.whatWeStage[lang]}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 border-t-4 border-gold">
              <h3 className="text-gold text-xl mb-4">{content.classicalAdaptations[lang]}</h3>
              <p className="text-light-gray">{content.classicalDesc[lang]}</p>
            </div>

            <div className="card p-8 border-t-4 border-gold">
              <h3 className="text-gold text-xl mb-4">{content.originalScripts[lang]}</h3>
              <p className="text-light-gray">{content.originalDesc[lang]}</p>
            </div>

            <div className="card p-8 border-t-4 border-gold">
              <h3 className="text-gold text-xl mb-4">{content.folkTraditional[lang]}</h3>
              <p className="text-light-gray">{content.folkDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Season */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-8">{content.currentSeason[lang]}</h2>
          <Link href="/productions/current" className="featured-banner min-h-[300px]" style={{ backgroundImage: 'linear-gradient(135deg, var(--color-dark-gray), var(--color-charcoal))' }}>
            <div className="featured-content">
              <span className="card-eyebrow">{content.nowShowing[lang]}</span>
              <h3 className="text-3xl text-white mb-2">{content.currentProductions[lang]}</h3>
              <p className="text-light-gray">{content.viewCurrentSeason[lang]}</p>
              <span className="btn-text mt-4 inline-block">{content.viewSeason[lang]}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Production Archive by Year */}
      <section className="section section-dark section-with-photos">
        <BackgroundPhotos variant="scattered" opacity={0.1} />
        <div className="container">
          <h2 className="section-title mb-8">{content.productionArchive[lang]}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {productionYears.map((item) => (
              <Link key={item.year} href={item.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-gold text-3xl font-light">{item.year}</span>
                <p className="card-description mt-2">{item.description[lang]}</p>
                <span className="btn-text mt-4 inline-block">{content.viewProductions[lang]}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/productions/archive" className="btn btn-secondary">{content.viewFullArchive[lang]}</Link>
          </div>
        </div>
      </section>

      {/* Request Performance */}
      <section className="section section-charcoal">
        <div className="container text-center">
          <h2 className="section-title mb-4">{content.requestPerformance[lang]}</h2>
          <p className="section-description mx-auto mb-8">{content.requestDesc[lang]}</p>
          <Link href="/contact#performance" className="btn btn-primary">{content.requestPerformance[lang]}</Link>
        </div>
      </section>
    </main>
  );
}
