'use client';

import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';
import { useLanguage } from '../../components/LanguageSwitcher';

// Translations
const content = {
  description: {
    en: 'A message from our Director & Founder',
    bn: 'আমাদের পরিচালক ও প্রতিষ্ঠাতার কাছ থেকে একটি বার্তা',
    hi: 'हमारे निर्देशक और संस्थापक का संदेश'
  },
  role: {
    en: 'Director & Founder',
    bn: 'পরিচালক ও প্রতিষ্ঠাতা',
    hi: 'निर्देशक और संस्थापक'
  },
  location: {
    en: 'Samatat Sanskriti, Uttarpara',
    bn: 'সমতট সংস্কৃতি, উত্তরপাড়া',
    hi: 'समतट संस्कृति, उत्तरपाड़ा'
  },
  nsdAlumnus: {
    en: 'NSD Alumnus',
    bn: 'এনএসডি প্রাক্তন ছাত্র',
    hi: 'एनएसडी पूर्व छात्र'
  },
  intlDirector: {
    en: 'International Theatre Director',
    bn: 'আন্তর্জাতিক থিয়েটার পরিচালক',
    hi: 'अंतर्राष्ट्रीय रंगमंच निर्देशक'
  },
  quote: {
    en: 'My journey with theatre has been one of lifelong learning. A Pharmacy graduate by education, my soul resides on the stage.',
    bn: 'থিয়েটারের সাথে আমার যাত্রা আজীবন শেখার একটি যাত্রা। শিক্ষায় ফার্মেসি স্নাতক, কিন্তু আমার আত্মা মঞ্চে বাস করে।',
    hi: 'थिएटर के साथ मेरी यात्रा आजीवन सीखने की यात्रा रही है। शिक्षा में फार्मेसी स्नातक, लेकिन मेरी आत्मा मंच पर रहती है।'
  },
  para1: {
    en: 'My vision for Samatat was shaped by the rigorous training I received at the',
    bn: 'সমতটের জন্য আমার দৃষ্টিভঙ্গি তৈরি হয়েছিল',
    hi: 'समतट के लिए मेरी दृष्टि को आकार दिया गया'
  },
  nsd: {
    en: 'National School of Drama',
    bn: 'জাতীয় নাট্য বিদ্যালয়',
    hi: 'राष्ट्रीय नाट्य विद्यालय'
  },
  learningFrom: {
    en: ', learning from icons like',
    bn: '-এ প্রাপ্ত কঠোর প্রশিক্ষণ দ্বারা, যেখানে আমি শিখেছি',
    hi: 'में कठोर प्रशिक्षण से, जहां मैंने सीखा'
  },
  and: {
    en: 'and',
    bn: 'এবং',
    hi: 'और'
  },
  para2: {
    en: 'When I founded Samatat Sanskriti in 1999, the goal was to build a community. My international exposure in Bangladesh and Vietnam with',
    bn: '১৯৯৯ সালে যখন আমি সমতট সংস্কৃতি প্রতিষ্ঠা করি, লক্ষ্য ছিল একটি সম্প্রদায় গড়ে তোলা। বাংলাদেশ এবং ভিয়েতনামে',
    hi: 'जब मैंने 1999 में समतट संस्कृति की स्थापना की, तो लक्ष्य एक समुदाय का निर्माण करना था। बांग्लादेश और वियतनाम में'
  },
  taughtMe: {
    en: 'taught me the power of',
    bn: '-এর সাথে আমার আন্তর্জাতিক অভিজ্ঞতা আমাকে শিখিয়েছে',
    hi: 'के साथ मेरे अंतर्राष्ट्रीय अनुभव ने मुझे सिखाया'
  },
  childrenTheatre: {
    en: "Children's Theatre",
    bn: 'শিশু নাট্যের',
    hi: 'बाल रंगमंच की'
  },
  corePillar: {
    en: ', which remains a core pillar of our work.',
    bn: ' শক্তি, যা আমাদের কাজের একটি মূল স্তম্ভ হয়ে রয়েছে।',
    hi: ' शक्ति, जो हमारे काम का एक मूल स्तंभ बना हुआ है।'
  },
  para3: {
    en: 'I am proud that for 26 years, we have stood by the theatre fraternity. Our Natyamela is more than a festival; it is a commitment to our colleagues.',
    bn: 'আমি গর্বিত যে ২৬ বছর ধরে, আমরা থিয়েটার পরিবারের পাশে দাঁড়িয়েছি। আমাদের নাট্যমেলা একটি উৎসবের চেয়ে বেশি; এটি আমাদের সহকর্মীদের প্রতি একটি প্রতিশ্রুতি।',
    hi: '26 वर्षों से, हम रंगमंच बिरादरी के साथ खड़े हैं, इस पर मुझे गर्व है। हमारा नाट्यमेला एक त्योहार से अधिक है; यह हमारे सहकर्मियों के प्रति एक प्रतिबद्धता है।'
  },
  journeyTitle: {
    en: 'A Journey of Learning',
    bn: 'শেখার যাত্রা',
    hi: 'सीखने की यात्रा'
  },
  nsdTraining: {
    en: 'NSD Training',
    bn: 'এনএসডি প্রশিক্ষণ',
    hi: 'एनएसडी प्रशिक्षण'
  },
  nsdDesc: {
    en: 'Rigorous training at the National School of Drama under legendary directors shaped the artistic vision that guides Samatat today.',
    bn: 'কিংবদন্তি পরিচালকদের অধীনে জাতীয় নাট্য বিদ্যালয়ে কঠোর প্রশিক্ষণ আজ সমতটকে গাইড করে এমন শৈল্পিক দৃষ্টিভঙ্গি তৈরি করেছে।',
    hi: 'प्रसिद्ध निर्देशकों के मार्गदर्शन में राष्ट्रीय नाट्य विद्यालय में कठोर प्रशिक्षण ने उस कलात्मक दृष्टि को आकार दिया जो आज समतट का मार्गदर्शन करती है।'
  },
  intlExposure: {
    en: 'International Exposure',
    bn: 'আন্তর্জাতিক অভিজ্ঞতা',
    hi: 'अंतर्राष्ट्रीय अनुभव'
  },
  intlDesc: {
    en: "Theatre exchanges in Bangladesh and Vietnam provided insights into Children's Theatre that became a cornerstone of our methodology.",
    bn: 'বাংলাদেশ এবং ভিয়েতনামে থিয়েটার বিনিময় শিশু নাট্যের অন্তর্দৃষ্টি প্রদান করেছে যা আমাদের পদ্ধতির একটি ভিত্তিপ্রস্তর হয়ে উঠেছে।',
    hi: 'बांग्लादेश और वियतनाम में रंगमंच आदान-प्रदान ने बाल रंगमंच की अंतर्दृष्टि प्रदान की जो हमारी कार्यप्रणाली की आधारशिला बन गई।'
  },
  communityBuilding: {
    en: 'Community Building',
    bn: 'সম্প্রদায় গঠন',
    hi: 'समुदाय निर्माण'
  },
  communityDesc: {
    en: 'From 1999 to today, the focus has always been on building a supportive community for artists, technicians, and theatre lovers alike.',
    bn: '১৯৯৯ থেকে আজ পর্যন্ত, শিল্পী, প্রযুক্তিবিদ এবং থিয়েটার প্রেমীদের জন্য একটি সহায়ক সম্প্রদায় গড়ে তোলার উপর সর্বদা মনোযোগ দেওয়া হয়েছে।',
    hi: '1999 से आज तक, कलाकारों, तकनीशियनों और रंगमंच प्रेमियों के लिए एक सहायक समुदाय बनाने पर हमेशा ध्यान केंद्रित किया गया है।'
  },
  visionTitle: {
    en: 'The Vision Forward',
    bn: 'ভবিষ্যতের দৃষ্টিভঙ্গি',
    hi: 'आगे की दृष्टि'
  },
  visionText: {
    en: 'Theatre is not just an art form; it is a way of life. At Samatat, we believe in nurturing the complete artist — one who understands technique, respects tradition, and has the courage to innovate.',
    bn: 'থিয়েটার শুধু একটি শিল্প ফর্ম নয়; এটি জীবনের একটি উপায়। সমতটে, আমরা সম্পূর্ণ শিল্পীকে লালন-পালন করতে বিশ্বাস করি — যিনি কৌশল বোঝেন, ঐতিহ্যকে সম্মান করেন এবং উদ্ভাবনের সাহস রাখেন।',
    hi: 'रंगमंच सिर्फ एक कला रूप नहीं है; यह जीवन का एक तरीका है। समतट में, हम पूर्ण कलाकार को पोषित करने में विश्वास करते हैं — जो तकनीक को समझता है, परंपरा का सम्मान करता है और नवाचार करने का साहस रखता है।'
  },
  visionQuote: {
    en: 'The stage is our temple, and every performance is an offering.',
    bn: 'মঞ্চ আমাদের মন্দির, এবং প্রতিটি পরিবেশন একটি নৈবেদ্য।',
    hi: 'मंच हमारा मंदिर है, और हर प्रदर्शन एक अर्पण है।'
  },
  mentorsTitle: {
    en: 'Mentors & Influences',
    bn: 'গুরু ও প্রভাব',
    hi: 'गुरु और प्रभाव'
  },
  mentorsDesc: {
    en: 'The masters who shaped the artistic philosophy of Samatat Sanskriti',
    bn: 'যে গুরুরা সমতট সংস্কৃতির শৈল্পিক দর্শন তৈরি করেছেন',
    hi: 'वे गुरु जिन्होंने समतट संस्कृति के कलात्मक दर्शन को आकार दिया'
  },
  nsdDirector: {
    en: 'NSD Director',
    bn: 'এনএসডি পরিচালক',
    hi: 'एनएसडी निर्देशक'
  },
  pedagogy: {
    en: 'Theatre pedagogy and direction',
    bn: 'থিয়েটার শিক্ষাবিদ্যা ও পরিচালনা',
    hi: 'रंगमंच शिक्षाशास्त्र और निर्देशन'
  },
  nsdFaculty: {
    en: 'NSD Faculty',
    bn: 'এনএসডি অনুষদ',
    hi: 'एनएसडी संकाय'
  },
  actingMethod: {
    en: 'Acting methodology',
    bn: 'অভিনয় পদ্ধতি',
    hi: 'अभिनय पद्धति'
  },
  legend: {
    en: 'Theatre Legend',
    bn: 'থিয়েটার কিংবদন্তি',
    hi: 'रंगमंच किंवदंती'
  },
  thirdTheatre: {
    en: 'Third Theatre philosophy',
    bn: 'তৃতীয় থিয়েটার দর্শন',
    hi: 'तीसरा रंगमंच दर्शन'
  },
  nandikar: {
    en: 'Nandikar',
    bn: 'নন্দীকার',
    hi: 'नंदीकार'
  },
  childrenExpertise: {
    en: "Children's theatre expertise",
    bn: 'শিশু নাট্য বিশেষজ্ঞতা',
    hi: 'बाल रंगमंच विशेषज्ञता'
  }
};

export default function PresidentPage() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: "President's Message", bn: 'সভাপতির বার্তা', hi: 'अध्यक्ष का संदेश' }}
        description={content.description}
        compact
      />

      {/* Main Message */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="left" />
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo and Name */}
            <div className="lg:col-span-1">
              <div className="card p-6 text-center sticky top-8">
                <div
                  className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl border-4 border-gold/30"
                  style={{
                    backgroundImage: 'url(https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <h2 className="text-gold text-2xl mb-2">Basudeb Hui</h2>
                <p className="text-white text-lg mb-1">{content.role[lang]}</p>
                <p className="text-light-gray">{content.location[lang]}</p>
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <p className="text-sm text-gray">{content.nsdAlumnus[lang]}</p>
                  <p className="text-sm text-gray">{content.intlDirector[lang]}</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <blockquote className="text-2xl text-white italic leading-relaxed mb-8 border-l-4 border-gold pl-6">
                &ldquo;{content.quote[lang]}&rdquo;
              </blockquote>

              <div className="space-y-6 text-light-gray leading-relaxed">
                <p>
                  {content.para1[lang]}
                  <span className="text-gold"> {content.nsd[lang]}</span>
                  {content.learningFrom[lang]}
                  <span className="text-white"> Prasanna</span>, <span className="text-white">Barry John</span>,
                  {content.and[lang]} <span className="text-white">Badal Sarkar</span>।
                </p>

                <p>
                  {content.para2[lang]}
                  <span className="text-white"> Rudraprasad Sengupta</span>
                  {content.taughtMe[lang]}
                  <span className="text-gold"> {content.childrenTheatre[lang]}</span>
                  {content.corePillar[lang]}
                </p>

                <p className="text-lg text-white">
                  {content.para3[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-10 text-center">{content.journeyTitle[lang]}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-white text-lg mb-3">{content.nsdTraining[lang]}</h3>
              <p className="text-light-gray">{content.nsdDesc[lang]}</p>
            </div>

            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-white text-lg mb-3">{content.intlExposure[lang]}</h3>
              <p className="text-light-gray">{content.intlDesc[lang]}</p>
            </div>

            <div className="card p-6 text-center border-t-4 border-gold">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-white text-lg mb-3">{content.communityBuilding[lang]}</h3>
              <p className="text-light-gray">{content.communityDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section section-charcoal">
        <div className="container max-w-3xl text-center">
          <h2 className="text-gold text-3xl mb-8">{content.visionTitle[lang]}</h2>
          <p className="text-light-gray text-lg leading-relaxed mb-6">
            {content.visionText[lang]}
          </p>
          <p className="text-white text-xl italic">
            &ldquo;{content.visionQuote[lang]}&rdquo;
          </p>
          <p className="text-gold mt-4">— Basudeb Hui</p>
        </div>
      </section>

      {/* Mentors */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-8 text-center">{content.mentorsTitle[lang]}</h2>
          <p className="text-light-gray text-center mb-10 max-w-2xl mx-auto">
            {content.mentorsDesc[lang]}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h3 className="text-white text-lg mb-2">Prasanna</h3>
              <p className="text-gold text-sm mb-2">{content.nsdDirector[lang]}</p>
              <p className="text-gray text-sm">{content.pedagogy[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-white text-lg mb-2">Barry John</h3>
              <p className="text-gold text-sm mb-2">{content.nsdFaculty[lang]}</p>
              <p className="text-gray text-sm">{content.actingMethod[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-white text-lg mb-2">Badal Sarkar</h3>
              <p className="text-gold text-sm mb-2">{content.legend[lang]}</p>
              <p className="text-gray text-sm">{content.thirdTheatre[lang]}</p>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-white text-lg mb-2">Rudraprasad Sengupta</h3>
              <p className="text-gold text-sm mb-2">{content.nandikar[lang]}</p>
              <p className="text-gray text-sm">{content.childrenExpertise[lang]}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
