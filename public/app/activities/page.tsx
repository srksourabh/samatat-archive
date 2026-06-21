'use client';

import { useLanguage } from '../components/LanguageSwitcher';
import { PageHeader } from '../components/PageHeader';
import { ActivitySlideshow } from '../components/ActivitySlideshow';

const EVENTS_BASE = 'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fevents?alt=media';

const content = {
  eyebrow: { en: 'Beyond Theatre', bn: 'থিয়েটারের বাইরে', hi: 'थिएटर से परे' },
  title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियाँ' },
  description: {
    en: 'Beyond theatre productions, Samatat Sanskriti organizes a rich tapestry of cultural programs throughout the year. These events celebrate Bengali heritage, honor literary legends, nurture young minds, and bring our community together in celebration of art and culture.',
    bn: 'থিয়েটার প্রযোজনার বাইরেও, সমতট সংস্কৃতি সারা বছর ধরে বিভিন্ন সাংস্কৃতিক অনুষ্ঠান আয়োজন করে। এই অনুষ্ঠানগুলি বাঙালি ঐতিহ্য উদযাপন করে, সাহিত্যিক কিংবদন্তিদের সম্মান জানায়, তরুণ মনকে লালন করে এবং শিল্প ও সংস্কৃতির উদযাপনে আমাদের সম্প্রদায়কে একত্রিত করে।',
    hi: 'थिएटर प्रोडक्शन के अलावा, समतट संस्कृति साल भर विभिन्न सांस्कृतिक कार्यक्रम आयोजित करती है। ये कार्यक्रम बंगाली विरासत का जश्न मनाते हैं, साहित्यिक किंवदंतियों का सम्मान करते हैं, युवा मन का पोषण करते हैं, और कला और संस्कृति के उत्सव में हमारे समुदाय को एक साथ लाते हैं।'
  }
};

const activities = [
  {
    id: 'basanta-utsav',
    title: { en: 'Basanta Utsav', bn: 'বসন্ত উৎসব', hi: 'बसंत उत्सव' },
    subtitle: { en: 'Spring Festival', bn: 'বসন্ত উৎসব', hi: 'वसंत उत्सव' },
    description: {
      en: 'Our annual Spring Festival celebrates the arrival of Basanta (spring) with music, dance, poetry, and colors. Inspired by Rabindranath Tagore\'s vision of celebrating nature and renewal, this festival brings together artists and audiences in a joyful celebration of life.',
      bn: 'আমাদের বার্ষিক বসন্ত উৎসব সংগীত, নৃত্য, কবিতা এবং রঙের সাথে বসন্তের আগমন উদযাপন করে। প্রকৃতি ও নবজন্মের উদযাপনে রবীন্দ্রনাথ ঠাকুরের দৃষ্টিভঙ্গি দ্বারা অনুপ্রাণিত, এই উৎসব শিল্পী এবং দর্শকদের জীবনের আনন্দময় উদযাপনে একত্রিত করে।',
      hi: 'हमारा वार्षिक बसंत उत्सव संगीत, नृत्य, कविता और रंगों के साथ बसंत के आगमन का जश्न मनाता है। प्रकृति और नवीनीकरण के उत्सव के रवींद्रनाथ टैगोर के दृष्टिकोण से प्रेरित, यह उत्सव कलाकारों और दर्शकों को जीवन के आनंदमय उत्सव में एक साथ लाता है।'
    },
    highlights: [
      { en: 'Traditional Holi celebrations with abir', bn: 'আবীর সহযোগে ঐতিহ্যবাহী হোলি উদযাপন', hi: 'अबीर के साथ पारंपरिक होली उत्सव' },
      { en: 'Rabindra Sangeet performances', bn: 'রবীন্দ্র সংগীত পরিবেশনা', hi: 'रवींद्र संगीत प्रस्तुतियाँ' },
      { en: 'Poetry recitations and cultural programs', bn: 'কবিতা আবৃত্তি ও সাংস্কৃতিক অনুষ্ঠান', hi: 'कविता पाठ और सांस्कृतिक कार्यक्रम' },
      { en: 'Community gathering and celebration', bn: 'সম্প্রদায়ের সমাবেশ ও উদযাপন', hi: 'सामुदायिक सभा और उत्सव' }
    ],
    timing: { en: 'March (during Dol Purnima)', bn: 'মার্চ (দোল পূর্ণিমার সময়)', hi: 'मार्च (दोल पूर्णिमा के दौरान)' },
    icon: '🌸',
    color: 'from-pink-500/20 to-orange-500/20',
    borderColor: 'border-pink-500/30',
    images: [
      `${EVENTS_BASE}/DSC06530.JPG`,
      `${EVENTS_BASE}/DSC06532.JPG`,
      `${EVENTS_BASE}/DSC06536.JPG`,
      `${EVENTS_BASE}/DSC06543.JPG`,
      `${EVENTS_BASE}/DSC06545.JPG`,
      `${EVENTS_BASE}/DSC06546.JPG`,
      `${EVENTS_BASE}/DSC06547.JPG`
    ]
  },
  {
    id: 'bhasha-dibos',
    title: { en: 'Bhasha Dibos', bn: 'ভাষা দিবস', hi: 'भाषा दिवस' },
    subtitle: { en: 'International Mother Language Day', bn: 'আন্তর্জাতিক মাতৃভাষা দিবস', hi: 'अंतर्राष्ट्रीय मातृभाषा दिवस' },
    description: {
      en: 'Every 21st February, we commemorate the Language Martyrs of 1952 who sacrificed their lives for the recognition of Bengali as a state language of Pakistan, leading to the creation of Bangladesh. This day, now recognized globally as International Mother Language Day, reminds us of the power of language in preserving cultural identity.',
      bn: 'প্রতি ২১শে ফেব্রুয়ারি, আমরা ১৯৫২ সালের ভাষা শহীদদের স্মরণ করি যারা বাংলাকে পাকিস্তানের রাষ্ট্রভাষা হিসেবে স্বীকৃতির জন্য প্রাণ দিয়েছিলেন, যা বাংলাদেশ সৃষ্টির দিকে পরিচালিত করেছিল। এই দিনটি, এখন আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে বিশ্বব্যাপী স্বীকৃত, আমাদের সাংস্কৃতিক পরিচয় সংরক্ষণে ভাষার শক্তি মনে করিয়ে দেয়।',
      hi: 'हर 21 फरवरी को, हम 1952 के भाषा शहीदों को याद करते हैं जिन्होंने बांग्ला को पाकिस्तान की राजभाषा के रूप में मान्यता के लिए अपने प्राण न्योछावर कर दिए, जिससे बांग्लादेश का निर्माण हुआ। यह दिन, जो अब विश्व स्तर पर अंतर्राष्ट्रीय मातृभाषा दिवस के रूप में मान्यता प्राप्त है, हमें सांस्कृतिक पहचान को संरक्षित करने में भाषा की शक्ति की याद दिलाता है।'
    },
    highlights: [
      { en: 'Tribute to Language Martyrs at Shaheed Minar replica', bn: 'শহীদ মিনারের প্রতিকৃতিতে ভাষা শহীদদের প্রতি শ্রদ্ধাঞ্জলি', hi: 'शहीद मिनार प्रतिकृति पर भाषा शहीदों को श्रद्धांजलि' },
      { en: 'Bengali poetry and literature readings', bn: 'বাংলা কবিতা ও সাহিত্য পাঠ', hi: 'बंगाली कविता और साहित्य पाठ' },
      { en: 'Cultural performances celebrating Bengali identity', bn: 'বাঙালি পরিচয় উদযাপনকারী সাংস্কৃতিক অনুষ্ঠান', hi: 'बंगाली पहचान का जश्न मनाने वाले सांस्कृतिक कार्यक्रम' },
      { en: 'Workshops on language preservation', bn: 'ভাষা সংরক্ষণ বিষয়ক কর্মশালা', hi: 'भाषा संरक्षण पर कार्यशालाएं' }
    ],
    timing: { en: '21st February every year', bn: 'প্রতি বছর ২১শে ফেব্রুয়ারি', hi: 'हर साल 21 फरवरी' },
    icon: '📚',
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    images: [
      `${EVENTS_BASE}/100_3322.JPG`,
      `${EVENTS_BASE}/100_3316.JPG`,
      `${EVENTS_BASE}/100_3317.JPG`,
      `${EVENTS_BASE}/100_3309.JPG`,
      `${EVENTS_BASE}/100_3301.JPG`,
      `${EVENTS_BASE}/100_3299.JPG`,
      `${EVENTS_BASE}/100_3278.JPG`
    ]
  },
  {
    id: 'rabindra-jayanti',
    title: { en: 'Rabindra Jayanti', bn: 'রবীন্দ্র জয়ন্তী', hi: 'রवींद्र जयंती' },
    subtitle: { en: 'Tagore Birth Anniversary', bn: 'রবীন্দ্রনাথের জন্মদিন', hi: 'टैगोर जन्म वर्षगाँठ' },
    description: {
      en: 'We celebrate the birth anniversary of Rabindranath Tagore, Bengal\'s Nobel laureate poet, philosopher, and cultural icon. Through music, dance, drama, and recitations, we pay homage to his timeless contributions to literature, art, and the spiritual awakening of India.',
      bn: 'আমরা বাংলার নোবেল বিজয়ী কবি, দার্শনিক এবং সাংস্কৃতিক আইকন রবীন্দ্রনাথ ঠাকুরের জন্মবার্ষিকী উদযাপন করি। সংগীত, নৃত্য, নাটক এবং আবৃত্তির মাধ্যমে, আমরা সাহিত্য, শিল্প এবং ভারতের আধ্যাত্মিক জাগরণে তাঁর কালজয়ী অবদানকে শ্রদ্ধা জানাই।',
      hi: 'हम बंगाल के नोबेल पुरस्कार विजेता कवि, दार्शनिक और सांस्कृतिक प्रतीक रवींद्रनाथ टैगोर की जयंती मनाते हैं। संगीत, नृत्य, नाटक और पाठ के माध्यम से, हम साहित्य, कला और भारत की आध्यात्मिक जागृति में उनके कालातीत योगदान को श्रद्धांजलि देते हैं।'
    },
    highlights: [
      { en: 'Rabindra Sangeet concerts', bn: 'রবীন্দ্র সংগীত সম্মেলন', hi: 'रवींद्र संगीत संगीत समारोह' },
      { en: 'Performances of Tagore\'s dance-dramas', bn: 'রবীন্দ্রনাথের নৃত্যনাট্যের পরিবেশনা', hi: 'टैगोर के नृत्य-नाटकों की प्रस्तुति' },
      { en: 'Poetry recitation and literary discussions', bn: 'কবিতা আবৃত্তি ও সাহিত্য আলোচনা', hi: 'कविता पाठ और साहित्यिक चर्चा' },
      { en: 'Art exhibitions inspired by Tagore', bn: 'রবীন্দ্রনাথ দ্বারা অনুপ্রাণিত শিল্প প্রদর্শনী', hi: 'टैगोर से प्रेरित कला प्रदर्शनियाँ' }
    ],
    timing: { en: '25 Boisakh (May)', bn: '২৫শে বৈশাখ (মে)', hi: '25 बैसाख (मई)' },
    icon: '🎭',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
    images: [
      `${EVENTS_BASE}/DSC_3851.JPG`,
      `${EVENTS_BASE}/DSC_3840.JPG`,
      `${EVENTS_BASE}/DSC_3861.JPG`,
      `${EVENTS_BASE}/100_3417.JPG`,
      `${EVENTS_BASE}/100_3453.JPG`
    ]
  },
  {
    id: 'film-festival',
    title: { en: 'Children Film Festival', bn: 'শিশু চলচ্চিত্র উৎসব', hi: 'বাল ফিল্ম মহোৎসব' },
    subtitle: { en: 'Cinema for Young Minds', bn: 'তরুণ মনের জন্য সিনেমা', hi: 'युवा मन के लिए सिनेमा' },
    description: {
      en: 'Our Children Film Festival introduces young audiences to the magic of cinema. We screen carefully curated films from around the world that entertain, educate, and inspire. This festival nurtures an appreciation for visual storytelling and diverse cultures among the next generation.',
      bn: 'আমাদের শিশু চলচ্চিত্র উৎসব তরুণ দর্শকদের সিনেমার জাদুর সাথে পরিচয় করিয়ে দেয়। আমরা বিশ্বের বিভিন্ন প্রান্ত থেকে সাবধানে নির্বাচিত চলচ্চিত্র প্রদর্শন করি যা বিনোদন দেয়, শিক্ষা দেয় এবং অনুপ্রাণিত করে। এই উৎসব পরবর্তী প্রজন্মের মধ্যে দৃশ্য গল্প বলা এবং বৈচিত্র্যময় সংস্কৃতির প্রশংসা লালন করে।',
      hi: 'हमारा बाल फिल्म महोत्सव युवा दर्शकों को सिनेमा के जादू से परिचित कराता है। हम दुनिया भर से सावधानीपूर्वक चयनित फिल्मों का प्रदर्शन करते हैं जो मनोरंजन करती हैं, शिक्षित करती हैं और प्रेरित करती हैं। यह महोत्सव अगली पीढ़ी में दृश्य कहानी कहने और विविध संस्कृतियों की सराहना को पोषित करता है।'
    },
    highlights: [
      { en: 'Screenings of award-winning children\'s films', bn: 'পুরস্কারজয়ী শিশু চলচ্চিত্রের প্রদর্শনী', hi: 'पुरस्कार विजेता बाल फिल्मों की स्क्रीनिंग' },
      { en: 'Interactive sessions with filmmakers', bn: 'চলচ্চিত্র নির্মাতাদের সাথে ইন্টারঅ্যাক্টিভ সেশন', hi: 'फिल्म निर्माताओं के साथ इंटरैक्टिव सत्र' },
      { en: 'Short film making workshops for children', bn: 'শিশুদের জন্য শর্ট ফিল্ম মেকিং ওয়ার্কশপ', hi: 'बच्चों के लिए लघु फिल्म निर्माण कार्यशालाएं' },
      { en: 'Animation and storytelling sessions', bn: 'অ্যানিমেশন এবং গল্প বলার সেশন', hi: 'एनीमेशन और कहानी सुनाने के सत्र' }
    ],
    timing: { en: 'November (Children\'s Day week)', bn: 'নভেম্বর (শিশু দিবস সপ্তাহ)', hi: 'नवंबर (बाल दिवस सप्ताह)' },
    icon: '🎬',
    color: 'from-red-500/20 to-pink-500/20',
    borderColor: 'border-red-500/30',
    images: [
      `${EVENTS_BASE}/DSC00064.JPG`,
      `${EVENTS_BASE}/DSC00076.JPG`,
      `${EVENTS_BASE}/DSC00077.JPG`,
      `${EVENTS_BASE}/DSC00078.JPG`,
      `${EVENTS_BASE}/DSC00032.JPG`,
      `${EVENTS_BASE}/DSC00033.JPG`,
      `${EVENTS_BASE}/DSC00044.JPG`,
      `${EVENTS_BASE}/DSC00015.JPG`
    ]
  }
];

const otherActivities = {
  title: { en: 'Other Cultural Programs', bn: 'অন্যান্য সাংস্কৃতিক অনুষ্ঠান', hi: 'অন্যান্য সাংস্কৃতিক কার্যক্রম' },
  items: [
    {
      name: { en: 'Samatat Choir', bn: 'সমতট সমবেত সংগীত দল', hi: 'সमतट गाना बजाना' },
      description: { en: 'Musical ensemble performing choral works and traditional Bengali songs.', bn: 'সমবেত সংগীত এবং ঐতিহ্যবাহী বাংলা গান পরিবেশনকারী সংগীত দল।', hi: 'कोरल कार्य और पारंपरिक बंगाली गीत प्रस्तुत करने वाला संगीत समूह।' }
    },
    {
      name: { en: 'District Theatre Fest', bn: 'জেলা নাট্য উৎসব', hi: 'जिला रंगमंच उत्सव' },
      description: { en: 'A regional celebration of theatrical arts across the district.', bn: 'জেলা জুড়ে নাট্য শিল্পের একটি আঞ্চলিক উদযাপন।', hi: 'पूरे जिले में नाट्य कला का एक क्षेत्रीय उत्सव।' }
    },
    {
      name: { en: 'Anti-War Publication', bn: 'যুদ্ধবিরোধী প্রকাশনা', hi: 'युद्ध विरोधी प्रकाशन' },
      description: { en: 'Literary works and newsletters promoting peace and anti-war awareness.', bn: 'শান্তি এবং যুদ্ধবিরোধী সচেতনতা প্রচারকারী সাহিত্যকর্ম ও নিউজলেটার।', hi: 'शांति और युद्ध-विरोधी जागरूकता को बढ़ावा देने वाली साहित्यिक रचनाएँ और समाचार पत्र।' }
    },
    {
      name: { en: 'Community Services', bn: 'জনসেবামূলক কাজ', hi: 'सामुदायिक सेवाएं' },
      description: { en: 'Social initiatives and outreach programs for local community development.', bn: 'স্থানীয় সম্প্রদায়ের উন্নয়নের জন্য সামাজিক উদ্যোগ এবং আউটরিচ প্রোগ্রাম।', hi: 'स्थानीय सामुदायिक विकास के लिए सामाजिक पहल और आउटरीच कार्यक्रम।' }
    }
  ]
};

const socialLinks = {
  title: { en: 'Follow Our Journey', bn: 'আমাদের যাত্রা অনুসরণ করুন', hi: 'हमारी यात्रा का अनुसरण करें' },
  description: {
    en: 'Stay connected with Samatat Sanskriti through our social media channels. Watch videos of our performances, see photos from our events, and stay updated on upcoming programs.',
    bn: 'আমাদের সোশ্যাল মিডিয়া চ্যানেলের মাধ্যমে সমতট সংস্কৃতির সাথে সংযুক্ত থাকুন। আমাদের পরিবেশনার ভিডিও দেখুন, আমাদের ইভেন্টের ছবি দেখুন এবং আসন্ন প্রোগ্রাম সম্পর্কে আপডেট থাকুন।',
    hi: 'हमारे सोशल मीडिया चैनलों के माध्यम से समतट संस्कृति से जुड़े रहें। हमारी प्रस्तुतियों के वीडियो देखें, हमारे कार्यक्रमों की तस्वीरें देखें और आगामी कार्यक्रमों पर अपडेट रहें।'
  }
};

export default function ActivitiesPage() {
  const lang = useLanguage();

  return (
    <main>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        compact
      />

      {/* Main Activities - Alternating Left/Right Layout */}
      <section className="section section-dark">
        <div className="container">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              id={activity.id}
              className={`mb-20 last:mb-0 scroll-mt-24`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${activity.color} border ${activity.borderColor} mb-6`}>
                    <span className="text-2xl">{activity.icon}</span>
                    <span className="text-sm text-white/80">{activity.subtitle[lang]}</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                    {activity.title[lang]}
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {activity.description[lang]}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-gold text-sm uppercase tracking-wider mb-3">
                      {lang === 'en' ? 'Highlights' : lang === 'bn' ? 'বিশেষ আকর্ষণ' : 'मुख्य आकर्षण'}
                    </h3>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-gold mt-1">✦</span>
                          <span>{highlight[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{activity.timing[lang]}</span>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br ${activity.color} border ${activity.borderColor}`}>
                    <ActivitySlideshow
                      images={activity.images}
                      alt={activity.title[lang]}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-4xl">{activity.icon}</span>
                    </div>
                    <div className="absolute bottom-12 left-0 right-0 z-10 pointer-events-none">
                      <div className="text-white font-medium text-lg text-center drop-shadow-md px-4">
                        {activity.title[lang]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider between activities */}
              {index < activities.length - 1 && (
                <div className="mt-20 border-t border-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Other Activities Grid */}
      <section className="section section-charcoal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">{otherActivities.title[lang]}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherActivities.items.map((item, index) => (
              <div
                key={index}
                className="card p-6 bg-white/5 border border-white/10 hover:border-gold/30 transition-all"
              >
                <h3 className="text-white font-medium mb-2">{item.name[lang]}</h3>
                <p className="text-gray-400 text-sm">{item.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-4">{socialLinks.title[lang]}</h2>
            <p className="text-gray-400 mb-8">{socialLinks.description[lang]}</p>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/Samatat2000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium">Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@SamatatSanskritiUttarpara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-red-600/20 border border-red-600/30 rounded-lg text-red-400 hover:bg-red-600/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
