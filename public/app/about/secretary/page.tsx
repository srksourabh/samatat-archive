'use client';

import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';
import { useLanguage } from '../../components/LanguageSwitcher';

// Translations
const content = {
  description: {
    en: 'Organizational updates and administrative information',
    bn: 'সাংগঠনিক আপডেট এবং প্রশাসনিক তথ্য',
    hi: 'संगठनात्मक अपडेट और प्रशासनिक जानकारी'
  },
  welcomeTitle: {
    en: 'Welcome to Samatat Sanskriti',
    bn: 'সমতট সংস্কৃতিতে স্বাগতম',
    hi: 'समतट संस्कृति में आपका स्वागत है'
  },
  welcomePara1: {
    en: "As the administrative hub of Samatat Sanskriti, the Secretary's office coordinates all organizational activities, from workshop registrations to festival logistics, ensuring that our artistic endeavors run smoothly.",
    bn: 'সমতট সংস্কৃতির প্রশাসনিক কেন্দ্র হিসাবে, সম্পাদকের অফিস কর্মশালা নিবন্ধন থেকে উৎসব সংক্রান্ত সকল কার্যক্রম সমন্বয় করে, যাতে আমাদের শৈল্পিক প্রয়াসগুলি সুষ্ঠুভাবে চলে।',
    hi: 'समतट संस्कृति के प्रशासनिक केंद्र के रूप में, सचिव का कार्यालय कार्यशाला पंजीकरण से लेकर उत्सव रसद तक सभी संगठनात्मक गतिविधियों का समन्वय करता है, यह सुनिश्चित करते हुए कि हमारे कलात्मक प्रयास सुचारू रूप से चलें।'
  },
  welcomePara2: {
    en: 'For 26 years, we have maintained a tradition of transparency, community service, and dedication to the theatre arts. This section provides information about our organizational structure, upcoming events, and ways to get involved.',
    bn: '২৬ বছর ধরে, আমরা স্বচ্ছতা, সম্প্রদায় সেবা এবং থিয়েটার শিল্পের প্রতি নিবেদনের ঐতিহ্য বজায় রেখেছি। এই বিভাগে আমাদের সাংগঠনিক কাঠামো, আসন্ন ইভেন্ট এবং জড়িত হওয়ার উপায় সম্পর্কে তথ্য রয়েছে।',
    hi: '26 वर्षों से, हमने पारदर्शिता, सामुदायिक सेवा और रंगमंच कलाओं के प्रति समर्पण की परंपरा बनाए रखी है। यह अनुभाग हमारी संगठनात्मक संरचना, आगामी कार्यक्रमों और शामिल होने के तरीकों के बारे में जानकारी प्रदान करता है।'
  },
  adminFunctions: {
    en: 'Administrative Functions',
    bn: 'প্রশাসনিক কার্যাবলী',
    hi: 'प्रशासनिक कार्य'
  },
  workshopCoord: {
    en: 'Workshop Coordination',
    bn: 'কর্মশালা সমন্বয়',
    hi: 'कार्यशाला समन्वय'
  },
  workshopDesc: {
    en: "Managing registrations, scheduling, and logistics for all children's and adult theatre workshops throughout the year.",
    bn: 'সারা বছর শিশু ও প্রাপ্তবয়স্কদের সকল থিয়েটার কর্মশালার জন্য নিবন্ধন, সময়সূচী এবং সরবরাহ ব্যবস্থাপনা।',
    hi: 'पूरे वर्ष बच्चों और वयस्क रंगमंच कार्यशालाओं के लिए पंजीकरण, शेड्यूलिंग और रसद का प्रबंधन।'
  },
  festivalMgmt: {
    en: 'Festival Management',
    bn: 'উৎসব ব্যবস্থাপনা',
    hi: 'उत्सव प्रबंधन'
  },
  festivalDesc: {
    en: 'Organizing the annual Samatat Natya Mela, coordinating with participating groups, and managing venue logistics.',
    bn: 'বার্ষিক সমতট নাট্য মেলা আয়োজন, অংশগ্রহণকারী দলগুলির সাথে সমন্বয় এবং স্থান সংক্রান্ত ব্যবস্থাপনা।',
    hi: 'वार्षिक समतट नाट्य मेला का आयोजन, भाग लेने वाले समूहों के साथ समन्वय और स्थल रसद का प्रबंधन।'
  },
  welfareFund: {
    en: 'Welfare Fund',
    bn: 'কল্যাণ তহবিল',
    hi: 'कल्याण कोष'
  },
  welfareDesc: {
    en: 'Administering the theatre welfare fund that supports distressed and ill theatre workers in our community.',
    bn: 'থিয়েটার কল্যাণ তহবিল পরিচালনা যা আমাদের সম্প্রদায়ের দুর্দশাগ্রস্ত এবং অসুস্থ থিয়েটার কর্মীদের সহায়তা করে।',
    hi: 'थिएटर कल्याण कोष का प्रशासन जो हमारे समुदाय में संकटग्रस्त और बीमार थिएटर कर्मियों का समर्थन करता है।'
  },
  statutory: {
    en: 'Statutory Compliance',
    bn: 'বিধিবদ্ধ সম্মতি',
    hi: 'वैधानिक अनुपालन'
  },
  statutoryDesc: {
    en: 'Maintaining organizational records, NGO compliance, and transparent financial reporting for all stakeholders.',
    bn: 'সাংগঠনিক রেকর্ড বজায় রাখা, এনজিও সম্মতি এবং সকল স্টেকহোল্ডারদের জন্য স্বচ্ছ আর্থিক প্রতিবেদন।',
    hi: 'संगठनात्मक रिकॉर्ड बनाए रखना, एनजीओ अनुपालन और सभी हितधारकों के लिए पारदर्शी वित्तीय रिपोर्टिंग।'
  },
  partnership: {
    en: 'Partnership Liaison',
    bn: 'অংশীদারিত্ব সংযোগ',
    hi: 'साझेदारी संपर्क'
  },
  partnershipDesc: {
    en: 'Coordinating with partner organizations like Nandikar, Sudrak, and government cultural bodies.',
    bn: 'নন্দীকার, সুদ্রক এবং সরকারি সাংস্কৃতিক সংস্থাগুলির মতো অংশীদার সংস্থাগুলির সাথে সমন্বয়।',
    hi: 'नंदीकार, सुद्रक और सरकारी सांस्कृतिक निकायों जैसे साझेदार संगठनों के साथ समन्वय।'
  },
  communications: {
    en: 'Communications',
    bn: 'যোগাযোগ',
    hi: 'संचार'
  },
  communicationsDesc: {
    en: 'Managing member communications, public relations, and community outreach initiatives.',
    bn: 'সদস্য যোগাযোগ, জনসম্পর্ক এবং সম্প্রদায় প্রসার উদ্যোগ পরিচালনা।',
    hi: 'सदस्य संचार, जनसंपर्क और सामुदायिक पहुंच पहल का प्रबंधन।'
  },
  announcements: {
    en: 'Latest Announcements',
    bn: 'সর্বশেষ ঘোষণা',
    hi: 'नवीनतम घोषणाएं'
  },
  natyaMela: {
    en: '26th Samatat Natya Mela 2025',
    bn: '২৬তম সমতট নাট্য মেলা ২০২৫',
    hi: '26वां समतट नाट्य मेला 2025'
  },
  natyaMelaDate: {
    en: 'December 2025',
    bn: 'ডিসেম্বর ২০২৫',
    hi: 'दिसंबर 2025'
  },
  natyaMelaDesc: {
    en: 'Preparations are underway for our 26th annual theatre festival. Theatre groups interested in participating can submit their applications through the contact form.',
    bn: 'আমাদের ২৬তম বার্ষিক নাট্য উৎসবের জন্য প্রস্তুতি চলছে। অংশগ্রহণে আগ্রহী থিয়েটার দলগুলি যোগাযোগ ফর্মের মাধ্যমে তাদের আবেদন জমা দিতে পারেন।',
    hi: 'हमारे 26वें वार्षिक रंगमंच महोत्सव की तैयारी जारी है। भाग लेने में रुचि रखने वाले थिएटर समूह संपर्क फॉर्म के माध्यम से अपने आवेदन जमा कर सकते हैं।'
  },
  childrenWorkshop: {
    en: "Children's Theatre Workshop",
    bn: 'শিশু থিয়েটার কর্মশালা',
    hi: 'बच्चों की रंगमंच कार्यशाला'
  },
  ongoing: {
    en: 'Ongoing',
    bn: 'চলমান',
    hi: 'जारी'
  },
  childrenDesc: {
    en: "Our flagship children's theatre program continues year-round. New batches begin every quarter. Contact us for registration details.",
    bn: 'আমাদের প্রধান শিশু থিয়েটার প্রোগ্রাম সারা বছর চলতে থাকে। প্রতি ত্রৈমাসিকে নতুন ব্যাচ শুরু হয়। নিবন্ধনের বিবরণের জন্য আমাদের সাথে যোগাযোগ করুন।',
    hi: 'हमारा प्रमुख बच्चों का रंगमंच कार्यक्रम पूरे वर्ष जारी रहता है। हर तिमाही में नए बैच शुरू होते हैं। पंजीकरण विवरण के लिए हमसे संपर्क करें।'
  },
  welfareContrib: {
    en: 'Welfare Fund Contributions',
    bn: 'কল্যাণ তহবিল অবদান',
    hi: 'कल्याण कोष योगदान'
  },
  alwaysOpen: {
    en: 'Always Open',
    bn: 'সর্বদা খোলা',
    hi: 'हमेशा खुला'
  },
  welfareContribDesc: {
    en: 'Support the theatre community by contributing to our welfare fund. Every contribution helps theatre artists in need.',
    bn: 'আমাদের কল্যাণ তহবিলে অবদান রেখে থিয়েটার সম্প্রদায়কে সহায়তা করুন। প্রতিটি অবদান প্রয়োজনে থিয়েটার শিল্পীদের সাহায্য করে।',
    hi: 'हमारे कल्याण कोष में योगदान देकर रंगमंच समुदाय का समर्थन करें। हर योगदान जरूरतमंद रंगमंच कलाकारों की मदद करता है।'
  },
  getInTouch: {
    en: 'Get in Touch',
    bn: 'যোগাযোগ করুন',
    hi: 'संपर्क करें'
  },
  contactDesc: {
    en: 'For organizational inquiries, workshop registrations, or festival participation, please reach out through our official channels.',
    bn: 'সাংগঠনিক অনুসন্ধান, কর্মশালা নিবন্ধন, বা উৎসবে অংশগ্রহণের জন্য, অনুগ্রহ করে আমাদের অফিসিয়াল চ্যানেলগুলির মাধ্যমে যোগাযোগ করুন।',
    hi: 'संगठनात्मक पूछताछ, कार्यशाला पंजीकरण, या उत्सव भागीदारी के लिए, कृपया हमारे आधिकारिक चैनलों के माध्यम से संपर्क करें।'
  },
  location: {
    en: 'Location',
    bn: 'অবস্থান',
    hi: 'स्थान'
  },
  contact: {
    en: 'Contact',
    bn: 'যোগাযোগ',
    hi: 'संपर्क'
  },
  visitContact: {
    en: 'Visit our Contact page',
    bn: 'আমাদের যোগাযোগ পৃষ্ঠা দেখুন',
    hi: 'हमारा संपर्क पेज देखें'
  },
  forInquiries: {
    en: 'for inquiries',
    bn: 'অনুসন্ধানের জন্য',
    hi: 'पूछताछ के लिए'
  },
  contactUs: {
    en: 'Contact Us',
    bn: 'যোগাযোগ করুন',
    hi: 'संपर्क करें'
  }
};

export default function SecretaryPage() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: "Secretary's Desk", bn: 'সম্পাদকের ডেস্ক', hi: 'सचिव का डेस्क' }}
        description={content.description}
        compact
      />

      {/* Welcome Message */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="right" />
        <div className="container max-w-4xl">
          <div className="card p-8 border-l-4 border-gold">
            <h2 className="text-gold text-2xl mb-6">{content.welcomeTitle[lang]}</h2>
            <p className="text-light-gray leading-relaxed mb-4">
              {content.welcomePara1[lang]}
            </p>
            <p className="text-light-gray leading-relaxed">
              {content.welcomePara2[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Key Functions */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-10 text-center">{content.adminFunctions[lang]}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-white text-lg mb-3">{content.workshopCoord[lang]}</h3>
              <p className="text-light-gray">{content.workshopDesc[lang]}</p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="text-white text-lg mb-3">{content.festivalMgmt[lang]}</h3>
              <p className="text-light-gray">{content.festivalDesc[lang]}</p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-white text-lg mb-3">{content.welfareFund[lang]}</h3>
              <p className="text-light-gray">{content.welfareDesc[lang]}</p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-white text-lg mb-3">{content.statutory[lang]}</h3>
              <p className="text-light-gray">{content.statutoryDesc[lang]}</p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-white text-lg mb-3">{content.partnership[lang]}</h3>
              <p className="text-light-gray">{content.partnershipDesc[lang]}</p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-4">📢</div>
              <h3 className="text-white text-lg mb-3">{content.communications[lang]}</h3>
              <p className="text-light-gray">{content.communicationsDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <h2 className="text-gold text-3xl mb-8 text-center">{content.announcements[lang]}</h2>

          <div className="space-y-6">
            <div className="card p-6 border-l-4 border-gold">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white text-lg">{content.natyaMela[lang]}</h3>
                <span className="text-gold text-sm">{content.natyaMelaDate[lang]}</span>
              </div>
              <p className="text-light-gray">{content.natyaMelaDesc[lang]}</p>
            </div>

            <div className="card p-6 border-l-4 border-gold">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white text-lg">{content.childrenWorkshop[lang]}</h3>
                <span className="text-gold text-sm">{content.ongoing[lang]}</span>
              </div>
              <p className="text-light-gray">{content.childrenDesc[lang]}</p>
            </div>

            <div className="card p-6 border-l-4 border-gold">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white text-lg">{content.welfareContrib[lang]}</h3>
                <span className="text-gold text-sm">{content.alwaysOpen[lang]}</span>
              </div>
              <p className="text-light-gray">{content.welfareContribDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section section-dark">
        <div className="container max-w-3xl text-center">
          <h2 className="text-gold text-3xl mb-6">{content.getInTouch[lang]}</h2>
          <p className="text-light-gray mb-8">{content.contactDesc[lang]}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white mb-2">{content.location[lang]}</h3>
              <p className="text-light-gray">Uttarpara, Hooghly</p>
              <p className="text-light-gray">West Bengal, India</p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-white mb-2">{content.contact[lang]}</h3>
              <p className="text-light-gray">{content.visitContact[lang]}</p>
              <p className="text-light-gray">{content.forInquiries[lang]}</p>
            </div>
          </div>

          <a href="/contact" className="btn btn-primary mt-8">{content.contactUs[lang]}</a>
        </div>
      </section>
    </main>
  );
}
