'use client';

import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { BackgroundPhotos } from '../components/BackgroundPhotos';
import { useLanguage } from '../components/LanguageSwitcher';

// Translations
const content = {
  description: {
    en: '26 Years of Celebrating Theatre Excellence',
    bn: '২৬ বছর থিয়েটার উৎকর্ষ উদযাপন',
    hi: '26 वर्षों से थिएटर उत्कृष्टता का जश्न'
  },
  intro: {
    en: 'Launched in December 2000 with the blessings of theatre legends',
    bn: '২০০০ সালের ডিসেম্বরে থিয়েটার কিংবদন্তিদের আশীর্বাদে শুরু',
    hi: 'दिसंबर 2000 में रंगमंच किंवदंतियों के आशीर्वाद से शुरू'
  },
  and: {
    en: 'and',
    bn: 'এবং',
    hi: 'और'
  },
  supportedBy: {
    en: ', and supported by',
    bn: ', এবং সমর্থিত',
    hi: ', और समर्थित'
  },
  introEnd: {
    en: ', the Samatat Natya Mela has grown into one of the most respected suburban theatre festivals in Bengal.',
    bn: ' দ্বারা, সমতট নাট্য মেলা বাংলার সবচেয়ে সম্মানিত শহরতলি থিয়েটার উৎসবগুলির মধ্যে একটিতে পরিণত হয়েছে।',
    hi: ' द्वारा, समतट नाट्य मेला बंगाल के सबसे सम्मानित उपनगरीय रंगमंच उत्सवों में से एक बन गया है।'
  },
  legendQuote: {
    en: 'If you can draw such a massive audience for children, why not create a platform for adult theatre?',
    bn: 'যদি আপনি শিশুদের জন্য এত বিশাল দর্শক আকৃষ্ট করতে পারেন, তাহলে প্রাপ্তবয়স্ক থিয়েটারের জন্য একটি প্ল্যাটফর্ম তৈরি করবেন না কেন?',
    hi: 'यदि आप बच्चों के लिए इतने बड़े दर्शक वर्ग को आकर्षित कर सकते हैं, तो वयस्क रंगमंच के लिए एक मंच क्यों नहीं बनाते?'
  },
  years: {
    en: 'Years',
    bn: 'বছর',
    hi: 'वर्ष'
  },
  productionsStaged: {
    en: 'Productions Staged',
    bn: 'প্রযোজনা মঞ্চস্থ',
    hi: 'प्रस्तुतियाँ मंचित'
  },
  theatreGroups: {
    en: 'Theatre Groups',
    bn: 'থিয়েটার গ্রুপ',
    hi: 'रंगमंच समूह'
  },
  audienceAnnually: {
    en: 'Audience Annually',
    bn: 'বার্ষিক দর্শক',
    hi: 'वार्षिक दर्शक'
  },
  whatMakesSpecial: {
    en: 'What Makes Our Festival Special',
    bn: 'আমাদের উৎসবকে কী বিশেষ করে তোলে',
    hi: 'हमारे उत्सव को क्या विशेष बनाता है'
  },
  diverseProgramming: {
    en: 'Diverse Programming',
    bn: 'বৈচিত্র্যপূর্ণ প্রোগ্রামিং',
    hi: 'विविध प्रोग्रामिंग'
  },
  diverseDesc: {
    en: 'Each festival features 10-12 productions from groups across West Bengal, showcasing the full spectrum of Bengali theatre.',
    bn: 'প্রতিটি উৎসবে পশ্চিমবঙ্গ জুড়ে বিভিন্ন গ্রুপের ১০-১২টি প্রযোজনা থাকে, যা বাংলা থিয়েটারের সম্পূর্ণ বর্ণালী প্রদর্শন করে।',
    hi: 'प्रत्येक उत्सव में पश्चिम बंगाल के समूहों की 10-12 प्रस्तुतियां होती हैं, जो बंगाली रंगमंच का पूर्ण स्पेक्ट्रम प्रदर्शित करती हैं।'
  },
  welfareModel: {
    en: 'Welfare Model',
    bn: 'কল্যাণ মডেল',
    hi: 'कल्याण मॉडल'
  },
  welfareDesc: {
    en: 'A significant portion of festival proceeds goes to a Welfare Fund supporting distressed and ill theatre workers.',
    bn: 'উৎসবের আয়ের একটি উল্লেখযোগ্য অংশ দুর্দশাগ্রস্ত এবং অসুস্থ থিয়েটার কর্মীদের সহায়তাকারী কল্যাণ তহবিলে যায়।',
    hi: 'उत्सव की आय का एक महत्वपूर्ण हिस्सा संकटग्रस्त और बीमार रंगमंच कर्मियों का समर्थन करने वाले कल्याण कोष में जाता है।'
  },
  communityPlatform: {
    en: 'Community Platform',
    bn: 'সম্প্রদায় প্ল্যাটফর্ম',
    hi: 'सामुदायिक मंच'
  },
  communityDesc: {
    en: 'More than entertainment, the festival is a meeting ground for artists, a platform for emerging groups, and a celebration of community.',
    bn: 'বিনোদনের চেয়ে বেশি, এই উৎসব শিল্পীদের মিলনস্থল, উদীয়মান গ্রুপগুলির জন্য একটি প্ল্যাটফর্ম এবং সম্প্রদায়ের উদযাপন।',
    hi: 'मनोरंजन से अधिक, यह उत्सव कलाकारों के लिए मिलन स्थल, उभरते समूहों के लिए मंच और समुदाय का उत्सव है।'
  },
  legacyExcellence: {
    en: 'Legacy of Excellence',
    bn: 'উৎকর্ষের ঐতিহ্য',
    hi: 'उत्कृष्टता की विरासत'
  },
  legacyDesc: {
    en: '26 years of continuous festivals, making it one of the longest-running suburban theatre festivals in Bengal.',
    bn: '২৬ বছরের অবিচ্ছিন্ন উৎসব, এটিকে বাংলার দীর্ঘতম চলমান শহরতলি থিয়েটার উৎসবগুলির মধ্যে একটি করে তোলে।',
    hi: '26 वर्षों के निरंतर उत्सव, इसे बंगाल के सबसे लंबे समय से चल रहे उपनगरीय रंगमंच उत्सवों में से एक बनाते हैं।'
  },
  theatreCommunity: {
    en: 'Theatre for the Community',
    bn: 'সম্প্রদায়ের জন্য থিয়েটার',
    hi: 'समुदाय के लिए रंगमंच'
  },
  welfarePara1: {
    en: 'What sets Samatat Natya Mela apart is our commitment to giving back. A significant portion of festival proceeds goes to our',
    bn: 'সমতট নাট্য মেলাকে যা আলাদা করে তা হল ফিরিয়ে দেওয়ার প্রতি আমাদের প্রতিশ্রুতি। উৎসবের আয়ের একটি উল্লেখযোগ্য অংশ আমাদের',
    hi: 'समतट नाट्य मेला को जो अलग करता है वह है वापस देने के प्रति हमारी प्रतिबद्धता। उत्सव की आय का एक महत्वपूर्ण हिस्सा हमारे'
  },
  welfareFund: {
    en: 'Welfare Fund',
    bn: 'কল্যাণ তহবিলে',
    hi: 'कल्याण कोष'
  },
  welfareForWorkers: {
    en: 'for distressed and ill theatre workers.',
    bn: 'দুর্দশাগ্রস্ত এবং অসুস্থ থিয়েটার কর্মীদের জন্য যায়।',
    hi: 'में संकटग्रस्त और बीमार रंगमंच कर्मियों के लिए जाता है।'
  },
  welfarePara2: {
    en: 'This model ensures that while we celebrate the art, we also support the artists who dedicate their lives to it. Many senior theatre professionals who have fallen on hard times have received support through this initiative.',
    bn: 'এই মডেল নিশ্চিত করে যে আমরা শিল্প উদযাপন করার সময়, আমরা সেই শিল্পীদেরও সমর্থন করি যারা তাদের জীবন এতে উৎসর্গ করে। অনেক প্রবীণ থিয়েটার পেশাদার যারা কঠিন সময়ে পড়েছেন তারা এই উদ্যোগের মাধ্যমে সহায়তা পেয়েছেন।',
    hi: 'यह मॉडल सुनिश्चित करता है कि जब हम कला का उत्सव मनाते हैं, हम उन कलाकारों का भी समर्थन करते हैं जो इसके लिए अपना जीवन समर्पित करते हैं। कई वरिष्ठ रंगमंच पेशेवरों जो कठिन समय में पड़ गए हैं, उन्होंने इस पहल के माध्यम से समर्थन प्राप्त किया है।'
  },
  natyamelaQuote: {
    en: 'Our Natyamela is more than a festival; it is a commitment to our colleagues.',
    bn: 'আমাদের নাট্যমেলা একটি উৎসবের চেয়ে বেশি; এটি আমাদের সহকর্মীদের প্রতি একটি প্রতিশ্রুতি।',
    hi: 'हमारा नाट्यमेला एक त्योहार से अधिक है; यह हमारे सहकर्मियों के प्रति एक प्रतिबद्धता है।'
  },
  welfareImpact: {
    en: 'Welfare Fund Impact',
    bn: 'কল্যাণ তহবিলের প্রভাব',
    hi: 'कल्याण कोष का प्रभाव'
  },
  artistsSupported: {
    en: 'Artists Supported',
    bn: 'সমর্থিত শিল্পী',
    hi: 'समर्थित कलाकार'
  },
  medicalAssistance: {
    en: 'Medical Assistance',
    bn: 'চিকিৎসা সহায়তা',
    hi: 'चिकित्सा सहायता'
  },
  ongoing: {
    en: 'Ongoing',
    bn: 'চলমান',
    hi: 'जारी'
  },
  emergencyRelief: {
    en: 'Emergency Relief',
    bn: 'জরুরি ত্রাণ',
    hi: 'आपातकालीन राहत'
  },
  continuous: {
    en: 'Continuous',
    bn: 'অব্যাহত',
    hi: 'निरंतर'
  },
  familySupport: {
    en: 'Family Support',
    bn: 'পারিবারিক সহায়তা',
    hi: 'पारिवारिक सहायता'
  },
  yearRound: {
    en: 'Year-round',
    bn: 'সারা বছর',
    hi: 'साल भर'
  },
  legendsWords: {
    en: 'Words from Theatre Legends',
    bn: 'থিয়েটার কিংবদন্তিদের কথা',
    hi: 'रंगमंच किंवदंतियों के शब्द'
  },
  bibhashQuote: {
    en: 'Samatat has proven that quality theatre can thrive outside the metropolis. Their festival is a beacon for suburban cultural movements across Bengal.',
    bn: 'সমতট প্রমাণ করেছে যে মানসম্পন্ন থিয়েটার মহানগরের বাইরেও উন্নতি করতে পারে। তাদের উৎসব বাংলা জুড়ে শহরতলি সাংস্কৃতিক আন্দোলনের জন্য একটি আলোকবর্তিকা।',
    hi: 'समतट ने साबित किया है कि गुणवत्तापूर्ण रंगमंच महानगर के बाहर भी फल-फूल सकता है। उनका उत्सव बंगाल भर में उपनगरीय सांस्कृतिक आंदोलनों के लिए एक प्रकाश स्तंभ है।'
  },
  theatreDirector: {
    en: 'Theatre Director',
    bn: 'থিয়েটার পরিচালক',
    hi: 'रंगमंच निर्देशक'
  },
  meghnadQuote: {
    en: "What I admire most about Samatat is their welfare model. They don't just celebrate theatre; they take care of the theatre fraternity.",
    bn: 'সমতটের বিষয়ে আমি যা সবচেয়ে বেশি প্রশংসা করি তা হল তাদের কল্যাণ মডেল। তারা শুধু থিয়েটার উদযাপন করে না; তারা থিয়েটার পরিবারের যত্ন নেয়।',
    hi: 'समतट के बारे में जो मुझे सबसे अधिक प्रशंसा है वह है उनका कल्याण मॉडल। वे सिर्फ रंगमंच का उत्सव नहीं मनाते; वे रंगमंच बिरादरी की देखभाल करते हैं।'
  },
  theatreStalwart: {
    en: 'Theatre Stalwart',
    bn: 'থিয়েটার স্তম্ভ',
    hi: 'रंगमंच स्तंभ'
  },
  festivalArchive: {
    en: 'Festival Archive',
    bn: 'উৎসব আর্কাইভ',
    hi: 'उत्सव संग्रह'
  },
  viewFestival: {
    en: 'View festival',
    bn: 'উৎসব দেখুন',
    hi: 'उत्सव देखें'
  },
  viewPastFestivals: {
    en: 'View Past Festivals',
    bn: 'অতীত উৎসব দেখুন',
    hi: 'पिछले उत्सव देखें'
  },
  coming: {
    en: 'Coming December 2025',
    bn: 'আসছে ডিসেম্বর ২০২৫',
    hi: 'आ रहा है दिसंबर 2025'
  },
  natyaMela26: {
    en: '26th Samatat Natya Mela',
    bn: '২৬তম সমতট নাট্য মেলা',
    hi: '26वां समतट नाट्य मेला'
  },
  natyaMelaDesc: {
    en: 'Join us for another year of celebrating the best of Bengali theatre. Applications from theatre groups are now open.',
    bn: 'বাংলা থিয়েটারের সেরা উদযাপনের আরেকটি বছরের জন্য আমাদের সাথে যোগ দিন। থিয়েটার গ্রুপগুলির আবেদন এখন খোলা।',
    hi: 'बंगाली रंगमंच के सर्वश्रेष्ठ का जश्न मनाने के एक और वर्ष के लिए हमसे जुड़ें। रंगमंच समूहों के आवेदन अब खुले हैं।'
  },
  applyToParticipate: {
    en: 'Apply to Participate',
    bn: 'অংশগ্রহণের জন্য আবেদন করুন',
    hi: 'भाग लेने के लिए आवेदन करें'
  },
  bePartOfFestival: {
    en: 'Be Part of Our Festival',
    bn: 'আমাদের উৎসবের অংশ হন',
    hi: 'हमारे उत्सव का हिस्सा बनें'
  },
  participateDesc: {
    en: 'Are you a theatre group interested in performing at our next festival? We welcome applications from established and emerging groups alike.',
    bn: 'আপনি কি আমাদের পরবর্তী উৎসবে পারফর্ম করতে আগ্রহী একটি থিয়েটার গ্রুপ? আমরা প্রতিষ্ঠিত এবং উদীয়মান উভয় গ্রুপের আবেদনকে স্বাগত জানাই।',
    hi: 'क्या आप हमारे अगले उत्सव में प्रदर्शन करने में रुचि रखने वाले रंगमंच समूह हैं? हम स्थापित और उभरते दोनों समूहों के आवेदनों का स्वागत करते हैं।'
  },
  getInTouch: {
    en: 'Get in Touch',
    bn: 'যোগাযোগ করুন',
    hi: 'संपर्क करें'
  }
};

const festivalYears = [
  { year: '2024', description: { en: '25th Samatat Natya Mela with 12 participating groups', bn: '১২টি অংশগ্রহণকারী গ্রুপের সাথে ২৫তম সমতট নাট্য মেলা', hi: '12 भाग लेने वाले समूहों के साथ 25वां समतट नाट्य मेला' }, href: '/festivals/2024' },
  { year: '2023', description: { en: 'Festival celebrating Bengali theatre traditions', bn: 'বাংলা থিয়েটার ঐতিহ্য উদযাপনকারী উৎসব', hi: 'बंगाली रंगमंच परंपराओं का उत्सव' }, href: '/festivals/2023' },
];

export default function FestivalsPage() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader
        eyebrow="Annual Event"
        title={{ en: 'Samatat Natya Mela', bn: 'সমতট নাট্য মেলা', hi: 'समतट नाट्य मेला' }}
        description={content.description}
      />

      {/* Introduction */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.1} position="right" />
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-light-gray text-lg leading-relaxed mb-6">
              {content.intro[lang]} <span className="text-white">Bibhash Chakraborty</span> {content.and[lang]}
              <span className="text-white"> Meghnad Bhattacharya</span>{content.supportedBy[lang]} <span className="text-gold">Bongyo Natya Songhoti</span>
              {content.introEnd[lang]}
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-4 text-left bg-black/30 rounded-r-lg">
              <p className="text-white text-xl italic mb-2">
                &ldquo;{content.legendQuote[lang]}&rdquo;
              </p>
              <footer className="text-gold">— Bibhash Chakraborty, December 2000</footer>
            </blockquote>
          </div>

          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">{content.years[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-label">{content.productionsStaged[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{content.theatreGroups[lang]}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">{content.audienceAnnually[lang]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title mb-10">{content.whatMakesSpecial[lang]}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-white text-lg mb-3">{content.diverseProgramming[lang]}</h3>
              <p className="text-light-gray text-sm">{content.diverseDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-white text-lg mb-3">{content.welfareModel[lang]}</h3>
              <p className="text-light-gray text-sm">{content.welfareDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-white text-lg mb-3">{content.communityPlatform[lang]}</h3>
              <p className="text-light-gray text-sm">{content.communityDesc[lang]}</p>
            </div>
            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-white text-lg mb-3">{content.legacyExcellence[lang]}</h3>
              <p className="text-light-gray text-sm">{content.legacyDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Welfare Model */}
      <section className="section section-charcoal">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold text-3xl mb-6">{content.theatreCommunity[lang]}</h2>
              <p className="text-light-gray leading-relaxed mb-4">
                {content.welfarePara1[lang]} <span className="text-gold">{content.welfareFund[lang]}</span> {content.welfareForWorkers[lang]}
              </p>
              <p className="text-light-gray leading-relaxed mb-6">
                {content.welfarePara2[lang]}
              </p>
              <blockquote className="text-white italic border-l-4 border-gold pl-4">
                &ldquo;{content.natyamelaQuote[lang]}&rdquo;
                <footer className="text-gold mt-2">— Basudeb Hui</footer>
              </blockquote>
            </div>
            <div className="card p-8 bg-black/50">
              <h3 className="text-gold text-xl mb-6 text-center">{content.welfareImpact[lang]}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                  <span className="text-light-gray">{content.artistsSupported[lang]}</span>
                  <span className="text-white">50+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                  <span className="text-light-gray">{content.medicalAssistance[lang]}</span>
                  <span className="text-white">{content.ongoing[lang]}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                  <span className="text-light-gray">{content.emergencyRelief[lang]}</span>
                  <span className="text-white">{content.continuous[lang]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-gray">{content.familySupport[lang]}</span>
                  <span className="text-white">{content.yearRound[lang]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Words from Legends */}
      <section className="section section-dark">
        <div className="container max-w-4xl">
          <h2 className="section-title mb-10">{content.legendsWords[lang]}</h2>

          <div className="space-y-8">
            <div className="card p-8 border-l-4 border-gold">
              <blockquote className="text-white text-xl italic mb-4">
                &ldquo;{content.bibhashQuote[lang]}&rdquo;
              </blockquote>
              <footer className="text-gold">— Bibhash Chakraborty, {content.theatreDirector[lang]}</footer>
            </div>

            <div className="card p-8 border-l-4 border-gold">
              <blockquote className="text-white text-xl italic mb-4">
                &ldquo;{content.meghnadQuote[lang]}&rdquo;
              </blockquote>
              <footer className="text-gold">— Meghnad Bhattacharya, {content.theatreStalwart[lang]}</footer>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Archive by Year */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-8">{content.festivalArchive[lang]}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {festivalYears.map((item) => (
              <Link key={item.year} href={item.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-gold text-3xl font-light">{item.year}</span>
                <p className="card-description mt-2">{item.description[lang]}</p>
                <span className="btn-text mt-4 inline-block">{content.viewFestival[lang]}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/festivals/archive" className="btn btn-secondary">{content.viewPastFestivals[lang]}</Link>
          </div>
        </div>
      </section>

      {/* 26th Festival Announcement */}
      <section className="section section-dark">
        <div className="container text-center">
          <div className="card p-10 border-2 border-gold/30 max-w-3xl mx-auto">
            <span className="text-gold text-sm tracking-widest uppercase mb-4 block">{content.coming[lang]}</span>
            <h2 className="text-white text-4xl mb-4">{content.natyaMela26[lang]}</h2>
            <p className="text-light-gray mb-6">{content.natyaMelaDesc[lang]}</p>
            <Link href="/contact" className="btn btn-primary">{content.applyToParticipate[lang]}</Link>
          </div>
        </div>
      </section>

      {/* Participate CTA */}
      <section className="section section-charcoal">
        <div className="container text-center">
          <h2 className="section-title mb-4">{content.bePartOfFestival[lang]}</h2>
          <p className="section-description mx-auto mb-8">{content.participateDesc[lang]}</p>
          <Link href="/contact" className="btn btn-primary">{content.getInTouch[lang]}</Link>
        </div>
      </section>
    </main>
  );
}
