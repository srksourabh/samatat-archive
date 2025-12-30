'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { useLanguage, Language } from '../components/LanguageSwitcher';

type TranslatedText = Record<Language, string>;

const WORKSHOP_BASE = 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/workshops';

// Workshop types with real descriptions based on Samatat's work
interface Workshop {
  id: string;
  title: TranslatedText;
  date: string;
  duration: TranslatedText;
  status: 'upcoming' | 'ongoing' | 'completed';
  image: string;
  description: TranslatedText;
  topics: TranslatedText[];
  instructor?: string;
  capacity?: number;
  level: TranslatedText;
}

// Real workshop data reflecting Samatat's training programs
const workshops: Workshop[] = [
  {
    id: 'acting-fundamentals-2025',
    title: {
      en: 'Acting Fundamentals Workshop',
      bn: 'অভিনয়ের মূল বিষয় কর্মশালা',
      hi: 'अभिनय की मूल बातें कार्यशाला'
    },
    date: 'February 1-15, 2025',
    duration: { en: '2 Weeks', bn: '২ সপ্তাহ', hi: '2 सप्ताह' },
    status: 'upcoming',
    image: `${WORKSHOP_BASE}/IMG_6706.JPG`,
    description: {
      en: 'A comprehensive 2-week intensive workshop for beginners and intermediate actors. Learn voice projection, body movement, emotional expression, and scene work with experienced theatre practitioners.',
      bn: 'শিক্ষানবিশ এবং মধ্যবর্তী অভিনেতাদের জন্য ২ সপ্তাহের নিবিড় কর্মশালা। অভিজ্ঞ নাট্য শিল্পীদের সাথে কণ্ঠ প্রক্ষেপণ, শারীরিক নড়াচড়া, আবেগ প্রকাশ এবং দৃশ্য কাজ শিখুন।',
      hi: 'शुरुआती और मध्यवर्ती अभिनेताओं के लिए 2 सप्ताह की गहन कार्यशाला। अनुभवी रंगमंच कलाकारों के साथ आवाज़ प्रक्षेपण, शारीरिक गति, भावनात्मक अभिव्यक्ति और दृश्य कार्य सीखें।'
    },
    topics: [
      { en: 'Voice & Diction', bn: 'কণ্ঠ ও উচ্চারণ', hi: 'आवाज़ और उच्चारण' },
      { en: 'Body Movement', bn: 'শারীরিক নড়াচড়া', hi: 'शारीरिक गति' },
      { en: 'Improvisation', bn: 'ইম্প্রোভাইজেশন', hi: 'आशु अभिनय' },
      { en: 'Scene Work', bn: 'দৃশ্য কাজ', hi: 'दृश्य कार्य' }
    ],
    instructor: 'Senior Samatat Directors',
    capacity: 25,
    level: { en: 'Beginner to Intermediate', bn: 'শিক্ষানবিশ থেকে মধ্যবর্তী', hi: 'शुरुआती से मध्यवर्ती' }
  },
  {
    id: 'stagecraft-2024',
    title: {
      en: 'Stagecraft & Technical Theatre',
      bn: 'মঞ্চশিল্প ও প্রযুক্তিগত নাট্য',
      hi: 'मंच कला और तकनीकी रंगमंच'
    },
    date: 'December 10-15, 2024',
    duration: { en: '6 Days', bn: '৬ দিন', hi: '6 दिन' },
    status: 'completed',
    image: `${WORKSHOP_BASE}/DSC_3540.JPG`,
    description: {
      en: 'Learn the essential skills of stage management, lighting design, sound operation, and set construction. This hands-on workshop covers everything from basic rigging to advanced technical cues.',
      bn: 'মঞ্চ ব্যবস্থাপনা, আলোক সজ্জা, শব্দ পরিচালনা এবং সেট নির্মাণের প্রয়োজনীয় দক্ষতা শিখুন। এই হ্যান্ডস-অন কর্মশালায় মৌলিক রিগিং থেকে উন্নত প্রযুক্তিগত কিউ পর্যন্ত সবকিছু কভার করা হয়।',
      hi: 'मंच प्रबंधन, प्रकाश डिज़ाइन, ध्वनि संचालन और सेट निर्माण के आवश्यक कौशल सीखें। यह व्यावहारिक कार्यशाला बुनियादी रिगिंग से लेकर उन्नत तकनीकी क्यू तक सब कुछ कवर करती है।'
    },
    topics: [
      { en: 'Stage Lighting', bn: 'মঞ্চ আলো', hi: 'मंच प्रकाश' },
      { en: 'Sound Design', bn: 'শব্দ ডিজাইন', hi: 'ध्वनि डिज़ाइन' },
      { en: 'Set Construction', bn: 'সেট নির্মাণ', hi: 'सेट निर्माण' },
      { en: 'Stage Management', bn: 'মঞ্চ ব্যবস্থাপনা', hi: 'मंच प्रबंधन' }
    ],
    level: { en: 'All Levels', bn: 'সকল স্তর', hi: 'सभी स्तर' }
  },
  {
    id: 'playwriting-2024',
    title: {
      en: 'Playwriting Masterclass',
      bn: 'নাটক রচনা মাস্টারক্লাস',
      hi: 'नाटक लेखन मास्टरक्लास'
    },
    date: 'October 20-25, 2024',
    duration: { en: '6 Days', bn: '৬ দিন', hi: '6 दिन' },
    status: 'completed',
    image: `${WORKSHOP_BASE}/Picture-03.jpg`,
    description: {
      en: 'From concept to script - learn the art of dramatic writing. Explore structure, dialogue, character development, and staging considerations with guidance from established Bengali playwrights.',
      bn: 'ধারণা থেকে স্ক্রিপ্ট পর্যন্ত - নাটকীয় লেখার শিল্প শিখুন। প্রতিষ্ঠিত বাংলা নাট্যকারদের গাইডেন্সে কাঠামো, সংলাপ, চরিত্র উন্নয়ন এবং মঞ্চায়ন বিবেচনা অন্বেষণ করুন।',
      hi: 'अवधारणा से स्क्रिप्ट तक - नाटकीय लेखन की कला सीखें। स्थापित बंगाली नाटककारों के मार्गदर्शन में संरचना, संवाद, चरित्र विकास और मंचन विचारों का अन्वेषण करें।'
    },
    topics: [
      { en: 'Story Structure', bn: 'গল্পের কাঠামো', hi: 'कहानी संरचना' },
      { en: 'Dialogue Writing', bn: 'সংলাপ লেখা', hi: 'संवाद लेखन' },
      { en: 'Character Creation', bn: 'চরিত্র সৃষ্টি', hi: 'चरित्र निर्माण' },
      { en: 'Script Analysis', bn: 'স্ক্রিপ্ট বিশ্লেষণ', hi: 'स्क्रिप्ट विश्लेषण' }
    ],
    level: { en: 'Intermediate to Advanced', bn: 'মধ্যবর্তী থেকে উন্নত', hi: 'मध्यवर्ती से उन्नत' }
  },
  {
    id: 'childrens-theatre-2024',
    title: {
      en: "Children's Theatre Workshop",
      bn: 'শিশু নাট্য কর্মশালা',
      hi: 'बाल रंगमंच कार्यशाला'
    },
    date: 'Summer 2024',
    duration: { en: '3 Weeks', bn: '৩ সপ্তাহ', hi: '3 सप्ताह' },
    status: 'completed',
    image: `${WORKSHOP_BASE}/samatat014.jpg`,
    description: {
      en: 'A specially designed program for young artists aged 8-16. Through games, storytelling, and collaborative performance, children discover the joy of theatre while building confidence and creativity.',
      bn: '৮-১৬ বছর বয়সী তরুণ শিল্পীদের জন্য বিশেষভাবে ডিজাইন করা প্রোগ্রাম। খেলা, গল্প বলা এবং সহযোগী পরিবেশনার মাধ্যমে শিশুরা আত্মবিশ্বাস ও সৃজনশীলতা তৈরি করতে করতে নাট্যের আনন্দ আবিষ্কার করে।',
      hi: '8-16 वर्ष की आयु के युवा कलाकारों के लिए विशेष रूप से डिज़ाइन किया गया कार्यक्रम। खेल, कहानी सुनाना और सहयोगी प्रदर्शन के माध्यम से, बच्चे आत्मविश्वास और रचनात्मकता का निर्माण करते हुए रंगमंच का आनंद खोजते हैं।'
    },
    topics: [
      { en: 'Creative Games', bn: 'সৃজনশীল খেলা', hi: 'रचनात्मक खेल' },
      { en: 'Storytelling', bn: 'গল্প বলা', hi: 'कहानी सुनाना' },
      { en: 'Group Performance', bn: 'দলগত অভিনয়', hi: 'सामूहिक प्रदर्शन' },
      { en: 'Stage Confidence', bn: 'মঞ্চে আত্মবিশ্বাস', hi: 'मंच पर आत्मविश्वास' }
    ],
    capacity: 30,
    level: { en: 'Ages 8-16', bn: '৮-১৬ বছর', hi: '8-16 वर्ष' }
  },
  {
    id: 'direction-2023',
    title: {
      en: 'Theatre Direction Workshop',
      bn: 'নাট্য পরিচালনা কর্মশালা',
      hi: 'रंगमंच निर्देशन कार्यशाला'
    },
    date: 'November 2023',
    duration: { en: '1 Week', bn: '১ সপ্তাহ', hi: '1 सप्ताह' },
    status: 'completed',
    image: `${WORKSHOP_BASE}/DSC05159.JPG`,
    description: {
      en: 'An advanced workshop for aspiring directors. Learn script interpretation, blocking, working with actors, and developing your unique directorial vision through hands-on practice.',
      bn: 'উচ্চাকাঙ্ক্ষী পরিচালকদের জন্য একটি উন্নত কর্মশালা। হ্যান্ডস-অন অনুশীলনের মাধ্যমে স্ক্রিপ্ট ব্যাখ্যা, ব্লকিং, অভিনেতাদের সাথে কাজ এবং আপনার অনন্য পরিচালনার দৃষ্টিভঙ্গি বিকাশ শিখুন।',
      hi: 'महत्वाकांक्षी निर्देशकों के लिए एक उन्नत कार्यशाला। व्यावहारिक अभ्यास के माध्यम से स्क्रिप्ट व्याख्या, ब्लॉकिंग, अभिनेताओं के साथ काम करना और अपनी अनूठी निर्देशकीय दृष्टि विकसित करना सीखें।'
    },
    topics: [
      { en: 'Script Analysis', bn: 'স্ক্রিপ্ট বিশ্লেষণ', hi: 'स्क्रिप्ट विश्लेषण' },
      { en: 'Actor Direction', bn: 'অভিনেতা পরিচালনা', hi: 'अभिनेता निर्देशन' },
      { en: 'Blocking & Movement', bn: 'ব্লকিং ও নড়াচড়া', hi: 'ब्लॉकिंग और गति' },
      { en: 'Production Planning', bn: 'প্রযোজনা পরিকল্পনা', hi: 'प्रोडक्शन योजना' }
    ],
    level: { en: 'Advanced', bn: 'উন্নত', hi: 'उन्नत' }
  },
  {
    id: 'voice-movement-2023',
    title: {
      en: 'Voice & Movement Intensive',
      bn: 'কণ্ঠ ও গতি নিবিড় প্রশিক্ষণ',
      hi: 'आवाज़ और गति गहन प्रशिक्षण'
    },
    date: 'August 2023',
    duration: { en: '10 Days', bn: '১০ দিন', hi: '10 दिन' },
    status: 'completed',
    image: `${WORKSHOP_BASE}/IMG_6840.JPG`,
    description: {
      en: 'An intensive exploration of the actor\'s two primary instruments: voice and body. Learn breath control, vocal projection, physical expressiveness, and the integration of voice and movement.',
      bn: 'অভিনেতার দুটি প্রাথমিক যন্ত্রের নিবিড় অন্বেষণ: কণ্ঠ এবং শরীর। শ্বাস নিয়ন্ত্রণ, কণ্ঠ প্রক্ষেপণ, শারীরিক অভিব্যক্তি এবং কণ্ঠ ও গতির একীকরণ শিখুন।',
      hi: 'अभिनेता के दो प्राथमिक उपकरणों का गहन अन्वेषण: आवाज़ और शरीर। श्वास नियंत्रण, स्वर प्रक्षेपण, शारीरिक अभिव्यक्ति और आवाज़ और गति का एकीकरण सीखें।'
    },
    topics: [
      { en: 'Breath Control', bn: 'শ্বাস নিয়ন্ত্রণ', hi: 'श्वास नियंत्रण' },
      { en: 'Vocal Projection', bn: 'কণ্ঠ প্রক্ষেপণ', hi: 'स्वर प्रक्षेपण' },
      { en: 'Physical Theatre', bn: 'শারীরিক নাট্য', hi: 'शारीरिक रंगमंच' },
      { en: 'Expression', bn: 'অভিব্যক্তি', hi: 'अभिव्यक्ति' }
    ],
    level: { en: 'All Levels', bn: 'সকল স্তর', hi: 'सभी स्तर' }
  }
];

// Page content translations
const content = {
  title: { en: 'Workshops & Training', bn: 'কর্মশালা ও প্রশিক্ষণ', hi: 'कार्यशालाएं और प्रशिक्षण' },
  subtitle: {
    en: 'Building the next generation of theatre artists through comprehensive training programs since 1999.',
    bn: '১৯৯৯ সাল থেকে ব্যাপক প্রশিক্ষণ কার্যক্রমের মাধ্যমে পরবর্তী প্রজন্মের নাট্যশিল্পীদের গড়ে তোলা।',
    hi: '1999 से व्यापक प्रशिक्षण कार्यक्रमों के माध्यम से रंगमंच कलाकारों की अगली पीढ़ी का निर्माण।'
  },
  filterAll: { en: 'All Workshops', bn: 'সকল কর্মশালা', hi: 'सभी कार्यशालाएं' },
  filterUpcoming: { en: 'Upcoming', bn: 'আসন্ন', hi: 'आगामी' },
  filterCompleted: { en: 'Completed', bn: 'সম্পন্ন', hi: 'पूर्ण' },
  register: { en: 'Register Now', bn: 'এখনই নিবন্ধন করুন', hi: 'अभी पंजीकरण करें' },
  viewDetails: { en: 'View Details', bn: 'বিস্তারিত দেখুন', hi: 'विवरण देखें' },
  completed: { en: 'Completed', bn: 'সম্পন্ন', hi: 'पूर्ण' },
  upcoming: { en: 'Upcoming', bn: 'আসন্ন', hi: 'आगामी' },
  ongoing: { en: 'Ongoing', bn: 'চলমান', hi: 'जारी' },
  topics: { en: 'Topics Covered', bn: 'বিষয়সমূহ', hi: 'विषय' },
  level: { en: 'Level', bn: 'স্তর', hi: 'स्तर' },
  duration: { en: 'Duration', bn: 'সময়কাল', hi: 'अवधि' },
  capacity: { en: 'Capacity', bn: 'ধারণক্ষমতা', hi: 'क्षमता' },
  participants: { en: 'participants', bn: 'জন অংশগ্রহণকারী', hi: 'प्रतिभागी' },
  trainingPhilosophy: {
    en: 'Our Training Philosophy',
    bn: 'আমাদের প্রশিক্ষণ দর্শন',
    hi: 'हमारा प्रशिक्षण दर्शन'
  },
  philosophyText: {
    en: 'At Samatat, we believe theatre education should be accessible, rigorous, and rooted in both tradition and innovation. Our workshops combine classical Bengali theatre techniques with contemporary methodologies, creating well-rounded artists who can perform, create, and teach.',
    bn: 'সমতটে, আমরা বিশ্বাস করি নাট্য শিক্ষা অ্যাক্সেসযোগ্য, কঠোর এবং ঐতিহ্য ও উদ্ভাবন উভয়ের মধ্যে নিহিত হওয়া উচিত। আমাদের কর্মশালাগুলি ধ্রুপদী বাংলা নাট্য কৌশলের সাথে সমসাময়িক পদ্ধতি একত্রিত করে, সুদক্ষ শিল্পী তৈরি করে যারা অভিনয়, সৃষ্টি এবং শেখাতে পারে।',
    hi: 'समतट में, हम मानते हैं कि रंगमंच शिक्षा सुलभ, कठोर और परंपरा और नवाचार दोनों में निहित होनी चाहिए। हमारी कार्यशालाएं शास्त्रीय बंगाली रंगमंच तकनीकों को समकालीन पद्धतियों के साथ जोड़ती हैं, जो प्रदर्शन, निर्माण और सिखाने में सक्षम कुशल कलाकार तैयार करती हैं।'
  },
  stats: {
    artists: { n: '500+', label: { en: 'Artists Trained', bn: 'প্রশিক্ষিত শিল্পী', hi: 'प्रशिक्षित कलाकार' } },
    workshops: { n: '100+', label: { en: 'Workshops Conducted', bn: 'পরিচালিত কর্মশালা', hi: 'आयोजित कार्यशालाएं' } },
    years: { n: '26', label: { en: 'Years of Training', bn: 'বছর প্রশিক্ষণ', hi: 'वर्ष प्रशिक्षण' } },
    schools: { n: '50+', label: { en: 'School Programs', bn: 'স্কুল কার্যক্রম', hi: 'स्कूल कार्यक्रम' } }
  },
  cta: {
    title: { en: 'Interested in Our Workshops?', bn: 'আমাদের কর্মশালায় আগ্রহী?', hi: 'हमारी कार्यशालाओं में रुचि?' },
    subtitle: {
      en: 'Join our mailing list to receive updates about upcoming training programs, early registration, and special workshops.',
      bn: 'আসন্ন প্রশিক্ষণ কার্যক্রম, প্রাথমিক নিবন্ধন এবং বিশেষ কর্মশালা সম্পর্কে আপডেট পেতে আমাদের মেইলিং তালিকায় যোগ দিন।',
      hi: 'आगामी प्रशिक्षण कार्यक्रमों, प्रारंभिक पंजीकरण और विशेष कार्यशालाओं के बारे में अपडेट प्राप्त करने के लिए हमारी मेलिंग सूची में शामिल हों।'
    },
    button: { en: 'Contact Us', bn: 'যোগাযোগ করুন', hi: 'संपर्क करें' }
  },
  noWorkshops: { en: 'No workshops found for this filter.', bn: 'এই ফিল্টারের জন্য কোনো কর্মশালা পাওয়া যায়নি।', hi: 'इस फ़िल्टर के लिए कोई कार्यशाला नहीं मिली।' }
};

export default function WorkshopsPage() {
  const lang = useLanguage();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const filteredWorkshops = filter === 'all'
    ? workshops
    : workshops.filter(w => w.status === filter);

  const getStatusBadge = (status: Workshop['status']) => {
    switch (status) {
      case 'upcoming':
        return { text: content.upcoming[lang], color: 'bg-green-600' };
      case 'ongoing':
        return { text: content.ongoing[lang], color: 'bg-blue-600' };
      case 'completed':
        return { text: content.completed[lang], color: 'bg-gray-600' };
    }
  };

  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Training Programs"
        title={content.title}
        description={content.subtitle}
        compact
      />

      {/* Stats Section */}
      <section className="py-12 section-dark border-b border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(content.stats).map(([key, stat]) => (
              <div key={key} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-gold mb-2">{stat.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-light-gray/60">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 section-charcoal">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-gold text-black'
                  : 'bg-white/5 text-light-gray hover:bg-white/10 border border-white/10'
              }`}
            >
              {content.filterAll[lang]}
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                filter === 'upcoming'
                  ? 'bg-gold text-black'
                  : 'bg-white/5 text-light-gray hover:bg-white/10 border border-white/10'
              }`}
            >
              {content.filterUpcoming[lang]}
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                filter === 'completed'
                  ? 'bg-gold text-black'
                  : 'bg-white/5 text-light-gray hover:bg-white/10 border border-white/10'
              }`}
            >
              {content.filterCompleted[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12 section-charcoal">
        <div className="container">
          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📚</div>
              <p className="text-light-gray text-lg">{content.noWorkshops[lang]}</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-gold hover:text-gold-light transition-colors"
              >
                {content.filterAll[lang]}
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => {
                const badge = getStatusBadge(workshop.status);
                return (
                  <div
                    key={workshop.id}
                    className="group bg-black/40 rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={workshop.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Status Badge */}
                      <span className={`absolute top-4 right-4 ${badge.color} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                        {badge.text}
                      </span>

                      {/* Level Badge */}
                      <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {workshop.level[lang]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-gold/80 text-sm mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{workshop.date}</span>
                        <span className="text-white/30">·</span>
                        <span>{workshop.duration[lang]}</span>
                      </div>

                      <h3 className="text-xl font-light text-white mb-3 group-hover:text-gold transition-colors">
                        {workshop.title[lang]}
                      </h3>

                      <p className="text-light-gray/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {workshop.description[lang]}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {workshop.topics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="bg-white/5 text-light-gray/80 text-xs px-2 py-1 rounded">
                            {topic[lang]}
                          </span>
                        ))}
                        {workshop.topics.length > 3 && (
                          <span className="text-light-gray/50 text-xs py-1">+{workshop.topics.length - 3}</span>
                        )}
                      </div>

                      {/* Capacity */}
                      {workshop.capacity && (
                        <div className="flex items-center gap-2 text-light-gray/50 text-sm mb-4">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{workshop.capacity} {content.participants[lang]}</span>
                        </div>
                      )}

                      {/* CTA */}
                      {workshop.status === 'upcoming' ? (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-medium px-5 py-2.5 rounded-lg transition-colors"
                        >
                          {content.register[lang]}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-light-gray/50 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {content.completed[lang]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-16 section-dark border-t border-white/5">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
              {content.trainingPhilosophy[lang]}
            </h2>
            <p className="text-light-gray leading-relaxed text-lg">
              {content.philosophyText[lang]}
            </p>
          </div>

          {/* Training Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: '🎭', title: { en: 'Acting', bn: 'অভিনয়', hi: 'अभिनय' }, desc: { en: 'Voice, movement & emotion', bn: 'কণ্ঠ, গতি ও আবেগ', hi: 'आवाज़, गति और भावना' } },
              { icon: '📝', title: { en: 'Writing', bn: 'লেখা', hi: 'लेखन' }, desc: { en: 'Playwriting & adaptation', bn: 'নাটক রচনা ও অভিযোজন', hi: 'नाट्य लेखन और रूपांतरण' } },
              { icon: '🎬', title: { en: 'Direction', bn: 'পরিচালনা', hi: 'निर्देशन' }, desc: { en: 'Vision & leadership', bn: 'দৃষ্টি ও নেতৃত্ব', hi: 'दृष्टि और नेतृत्व' } },
              { icon: '💡', title: { en: 'Technical', bn: 'প্রযুক্তিগত', hi: 'तकनीकी' }, desc: { en: 'Lights, sound & stage', bn: 'আলো, শব্দ ও মঞ্চ', hi: 'प्रकाश, ध्वनि और मंच' } }
            ].map((area, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-black/40 border border-white/5 hover:border-gold/20 transition-colors">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="text-gold font-medium uppercase tracking-wider text-sm mb-2">{area.title[lang]}</h3>
                <p className="text-light-gray/60 text-sm">{area.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-charcoal border-t border-white/5">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            {content.cta.title[lang]}
          </h2>
          <p className="text-light-gray mb-8">
            {content.cta.subtitle[lang]}
          </p>
          <Link href="/contact" className="btn btn-primary px-8 py-3">
            {content.cta.button[lang]}
          </Link>
        </div>
      </section>
    </main>
  );
}
