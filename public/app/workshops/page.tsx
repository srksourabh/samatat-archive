'use client';

import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../components/LanguageSwitcher';
import { OptimizedImage } from '../components/OptimizedImage';

const WORKSHOP_BASE = 'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fworkshops?alt=media';

// Workshop types offered
const workshopTypes = [
  {
    category: { en: 'Acting and Performance Workshops', bn: 'অভিনয় ও পারফরম্যান্স কর্মশালা', hi: 'अभिनय और प्रदर्शन कार्यशालाएं' },
    items: [
      { en: 'Acting fundamentals', bn: 'অভিনয়ের মৌলিক বিষয়', hi: 'अभिनय की मूल बातें' },
      { en: 'Voice, movement, and character work', bn: 'কণ্ঠ, গতি ও চরিত্র নির্মাণ', hi: 'आवाज़, गति और चरित्र निर्माण' },
      { en: 'Scene exploration and ensemble acting', bn: 'দৃশ্য অন্বেষণ ও দলীয় অভিনয়', hi: 'दृश्य अन्वेषण और सामूहिक अभिनय' }
    ],
    icon: '🎭',
    image: `${WORKSHOP_BASE}/IMG_6706.JPG`
  },
  {
    category: { en: 'Theatre for Beginners', bn: 'শিক্ষানবিশদের জন্য থিয়েটার', hi: 'शुरुआती लोगों के लिए थिएटर' },
    items: [
      { en: 'Introduction to theatre language', bn: 'থিয়েটারের ভাষার পরিচয়', hi: 'थिएटर की भाषा का परिचय' },
      { en: 'Confidence building and expression', bn: 'আত্মবিশ্বাস গড়ে তোলা ও অভিব্যক্তি', hi: 'आत्मविश्वास निर्माण और अभिव्यक्ति' },
      { en: 'Playfulness and imagination', bn: 'খেলাধুলা ও কল্পনা', hi: 'चंचलता और कल्पना' }
    ],
    icon: '✨',
    image: `${WORKSHOP_BASE}/samatat014.jpg`
  },
  {
    category: { en: 'Improvisation and Devised Theatre', bn: 'ইম্প্রোভাইজেশন ও ডিভাইজড থিয়েটার', hi: 'आशु अभिनय और तैयार थिएटर' },
    items: [
      { en: 'Spontaneity and creative thinking', bn: 'স্বতঃস্ফূর্ততা ও সৃজনশীল চিন্তা', hi: 'स्वतःस्फूर्तता और रचनात्मक सोच' },
      { en: 'Collective storytelling', bn: 'সম্মিলিত গল্প বলা', hi: 'सामूहिक कहानी सुनाना' },
      { en: 'Collaboration and listening', bn: 'সহযোগিতা ও শোনা', hi: 'सहयोग और सुनना' }
    ],
    icon: '💡',
    image: `${WORKSHOP_BASE}/IMG_6840.JPG`
  },
  {
    category: { en: 'Script Reading and Text Analysis', bn: 'স্ক্রিপ্ট পাঠ ও টেক্সট বিশ্লেষণ', hi: 'स्क्रिप्ट पाठ और पाठ विश्लेषण' },
    items: [
      { en: 'Understanding characters and subtext', bn: 'চরিত্র ও সাবটেক্সট বোঝা', hi: 'चरित्र और उप-पाठ को समझना' },
      { en: 'Reading drama critically', bn: 'সমালোচনামূলক নাটক পাঠ', hi: 'नाटक का आलोचनात्मक पाठ' },
      { en: 'Interpreting classical and contemporary texts', bn: 'ধ্রুপদী ও সমসাময়িক টেক্সট ব্যাখ্যা', hi: 'शास्त्रीय और समकालीन ग्रंथों की व्याख्या' }
    ],
    icon: '📚',
    image: `${WORKSHOP_BASE}/Picture-03.jpg`
  },
  {
    category: { en: 'School and College Theatre Programs', bn: 'স্কুল ও কলেজ থিয়েটার প্রোগ্রাম', hi: 'स्कूल और कॉलेज थिएटर कार्यक्रम' },
    items: [
      { en: 'Personality development', bn: 'ব্যক্তিত্ব বিকাশ', hi: 'व्यक्तित्व विकास' },
      { en: 'Communication and leadership', bn: 'যোগাযোগ ও নেতৃত্ব', hi: 'संचार और नेतृत्व' },
      { en: 'Theatre-based learning modules', bn: 'থিয়েটার-ভিত্তিক শিক্ষা মডিউল', hi: 'थिएटर-आधारित सीखने के मॉड्यूल' }
    ],
    icon: '🏫',
    image: `${WORKSHOP_BASE}/DSC05159.JPG`
  },
  {
    category: { en: 'Community and Social Theatre', bn: 'কমিউনিটি ও সামাজিক থিয়েটার', hi: 'सामुदायिक और सामाजिक थिएटर' },
    items: [
      { en: 'Theatre for social awareness', bn: 'সামাজিক সচেতনতার জন্য থিয়েটার', hi: 'सामाजिक जागरूकता के लिए थिएटर' },
      { en: 'Community storytelling', bn: 'কমিউনিটি গল্প বলা', hi: 'सामुदायिक कहानी सुनाना' },
      { en: 'Participatory performance models', bn: 'অংশগ্রহণমূলক পরিবেশনা মডেল', hi: 'भागीदारी प्रदर्शन मॉडल' }
    ],
    icon: '🤝',
    image: `${WORKSHOP_BASE}/DSC_3540.JPG`
  }
];

// Children impact points
const childrenImpact = [
  { en: 'Express emotions safely and creatively', bn: 'নিরাপদে ও সৃজনশীলভাবে আবেগ প্রকাশ', hi: 'सुरक्षित और रचनात्मक रूप से भावनाएं व्यक्त करें' },
  { en: 'Build self-confidence and self-esteem', bn: 'আত্মবিশ্বাস ও আত্মসম্মান গড়ে তোলা', hi: 'आत्मविश्वास और आत्म-सम्मान का निर्माण' },
  { en: 'Improve focus, memory, and listening skills', bn: 'মনোযোগ, স্মৃতি ও শোনার দক্ষতা উন্নতি', hi: 'ध्यान, स्मृति और सुनने की क्षमता में सुधार' },
  { en: 'Develop empathy and perspective-taking', bn: 'সহানুভূতি ও দৃষ্টিভঙ্গি গ্রহণের বিকাশ', hi: 'सहानुभूति और परिप्रेक्ष्य का विकास' },
  { en: 'Strengthen language and communication naturally', bn: 'স্বাভাবিকভাবে ভাষা ও যোগাযোগ শক্তিশালী করা', hi: 'स्वाभाविक रूप से भाषा और संचार को मजबूत करें' }
];

// Life skills from theatre
const lifeSkills = [
  { en: 'Communication and articulation', bn: 'যোগাযোগ ও স্পষ্ট প্রকাশ', hi: 'संचार और स्पष्ट अभिव्यक्ति' },
  { en: 'Emotional intelligence', bn: 'আবেগীয় বুদ্ধিমত্তা', hi: 'भावनात्मक बुद्धिमत्ता' },
  { en: 'Confidence and presence', bn: 'আত্মবিশ্বাস ও উপস্থিতি', hi: 'आत्मविश्वास और उपस्थिति' },
  { en: 'Creative and critical thinking', bn: 'সৃজনশীল ও সমালোচনামূলক চিন্তা', hi: 'रचनात्मक और आलोचनात्मक सोच' },
  { en: 'Teamwork and leadership', bn: 'দলগত কাজ ও নেতৃত্ব', hi: 'टीमवर्क और नेतृत्व' }
];

// Generation benefits
const generationBenefits = [
  {
    gen: 'Gen Z',
    color: 'from-purple-500/20 to-blue-500/20',
    borderColor: 'border-purple-500/30',
    benefits: [
      { en: 'Builds confidence beyond digital identity', bn: 'ডিজিটাল পরিচয়ের বাইরে আত্মবিশ্বাস তৈরি করে', hi: 'डिजिटल पहचान से परे आत्मविश्वास बनाता है' },
      { en: 'Encourages authentic expression', bn: 'সত্যিকারের অভিব্যক্তিকে উৎসাহিত করে', hi: 'प्रामाणिक अभिव्यक्ति को प्रोत्साहित करता है' },
      { en: 'Develops social awareness and critical thinking', bn: 'সামাজিক সচেতনতা ও সমালোচনামূলক চিন্তার বিকাশ ঘটায়', hi: 'सामाजिक जागरूकता और आलोचनात्मक सोच विकसित करता है' }
    ]
  },
  {
    gen: 'Gen Alpha',
    color: 'from-cyan-500/20 to-teal-500/20',
    borderColor: 'border-cyan-500/30',
    benefits: [
      { en: 'Improves attention span and listening', bn: 'মনোযোগের সময় ও শোনার ক্ষমতা উন্নত করে', hi: 'ध्यान अवधि और सुनने की क्षमता में सुधार' },
      { en: 'Stimulates imagination beyond screens', bn: 'স্ক্রিনের বাইরে কল্পনাকে উদ্দীপিত করে', hi: 'स्क्रीन से परे कल्पना को प्रेरित करता है' },
      { en: 'Builds emotional vocabulary early', bn: 'আবেগের শব্দভাণ্ডার তাড়াতাড়ি তৈরি করে', hi: 'जल्दी भावनात्मक शब्दावली बनाता है' }
    ]
  },
  {
    gen: 'Gen Beta',
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
    benefits: [
      { en: 'Prepares for adaptability and collaboration', bn: 'অভিযোজন ও সহযোগিতার জন্য প্রস্তুত করে', hi: 'अनुकूलनशीलता और सहयोग के लिए तैयार करता है' },
      { en: 'Develops human skills beyond automation', bn: 'অটোমেশনের বাইরে মানবিক দক্ষতা বিকাশ করে', hi: 'स्वचालन से परे मानवीय कौशल विकसित करता है' },
      { en: 'Encourages creativity, empathy, and ethical thinking', bn: 'সৃজনশীলতা, সহানুভূতি ও নৈতিক চিন্তাকে উৎসাহিত করে', hi: 'रचनात्मकता, सहानुभूति और नैतिक सोच को प्रोत्साहित करता है' }
    ]
  }
];

// Workshop structure elements
const workshopStructure = [
  { en: 'Physical and vocal warm-ups', bn: 'শারীরিক ও কণ্ঠ ওয়ার্ম-আপ', hi: 'शारीरिक और स्वर वार्म-अप' },
  { en: 'Theatre games and exercises', bn: 'থিয়েটার গেম ও অনুশীলন', hi: 'थिएटर खेल और अभ्यास' },
  { en: 'Improvisation and exploration', bn: 'ইম্প্রোভাইজেশন ও অন্বেষণ', hi: 'आशु अभिनय और अन्वेषण' },
  { en: 'Reflection and group discussion', bn: 'প্রতিফলন ও দলগত আলোচনা', hi: 'चिंतन और समूह चर्चा' },
  { en: 'Optional internal sharing or showcase', bn: 'ঐচ্ছিক অভ্যন্তরীণ শেয়ারিং বা শোকেস', hi: 'वैकल्पिक आंतरिक साझाकरण या प्रदर्शन' }
];

// Who can participate
const participants = [
  { icon: '👧', text: { en: 'Children and students', bn: 'শিশু ও ছাত্রছাত্রী', hi: 'बच्चे और छात्र' } },
  { icon: '👩‍🏫', text: { en: 'Teachers and educators', bn: 'শিক্ষক ও শিক্ষাবিদ', hi: 'शिक्षक और शिक्षाविद' } },
  { icon: '🎭', text: { en: 'Theatre practitioners', bn: 'থিয়েটার শিল্পী', hi: 'थिएटर कलाकार' } },
  { icon: '💼', text: { en: 'Working professionals', bn: 'কর্মজীবী পেশাদার', hi: 'कामकाजी पेशेवर' } },
  { icon: '🏢', text: { en: 'Institutions and organizations', bn: 'প্রতিষ্ঠান ও সংস্থা', hi: 'संस्थाएं और संगठन' } }
];

// Institutional programs
const institutionalPrograms = [
  { en: 'Schools and colleges', bn: 'স্কুল ও কলেজ', hi: 'स्कूल और कॉलेज' },
  { en: 'Teacher-training programs', bn: 'শিক্ষক প্রশিক্ষণ কার্যক্রম', hi: 'शिक्षक प्रशिक्षण कार्यक्रम' },
  { en: 'Cultural institutions', bn: 'সাংস্কৃতিক প্রতিষ্ঠান', hi: 'सांस्कृतिक संस्थाएं' },
  { en: 'NGOs and community initiatives', bn: 'এনজিও ও কমিউনিটি উদ্যোগ', hi: 'NGO और सामुदायिक पहल' }
];

// Teacher workshop benefits
const teacherBenefits = [
  { en: 'Voice modulation and classroom presence', bn: 'কণ্ঠ মডুলেশন ও শ্রেণীকক্ষে উপস্থিতি', hi: 'आवाज़ मॉड्यूलेशन और कक्षा में उपस्थिति' },
  { en: 'Storytelling as an educational tool', bn: 'শিক্ষামূলক হাতিয়ার হিসেবে গল্প বলা', hi: 'शैक्षिक उपकरण के रूप में कहानी सुनाना' },
  { en: 'Managing classroom dynamics using theatre techniques', bn: 'থিয়েটার কৌশল ব্যবহার করে শ্রেণীকক্ষের গতিশীলতা পরিচালনা', hi: 'थिएटर तकनीकों का उपयोग करके कक्षा की गतिशीलता का प्रबंधन' },
  { en: 'Building empathy and stronger student engagement', bn: 'সহানুভূতি তৈরি ও শক্তিশালী ছাত্র সম্পৃক্ততা', hi: 'सहानुभूति और मजबूत छात्र जुड़ाव का निर्माण' },
  { en: 'Reducing burnout through creative expression', bn: 'সৃজনশীল অভিব্যক্তির মাধ্যমে বার্নআউট হ্রাস', hi: 'रचनात्मक अभिव्यक्ति के माध्यम से बर्नआउट कम करना' }
];

// Student workshop benefits
const studentBenefits = [
  { en: 'Improving public speaking and communication', bn: 'জনসাধারণে কথা বলা ও যোগাযোগ উন্নতি', hi: 'सार्वजनिक बोलने और संचार में सुधार' },
  { en: 'Encouraging teamwork and leadership', bn: 'দলগত কাজ ও নেতৃত্বকে উৎসাহিত করা', hi: 'टीमवर्क और नेतृत्व को प्रोत्साहित करना' },
  { en: 'Building curiosity and questioning ability', bn: 'কৌতূহল ও প্রশ্ন করার ক্ষমতা তৈরি', hi: 'जिज्ञासा और प्रश्न पूछने की क्षमता का निर्माण' },
  { en: 'Making learning experiential and engaging', bn: 'শিক্ষাকে অভিজ্ঞতামূলক ও আকর্ষক করা', hi: 'सीखने को अनुभवात्मक और आकर्षक बनाना' }
];

export default function WorkshopsPage() {
  const lang = useLanguage();

  return (
    <main className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <PageHeader
        eyebrow="Training Programs"
        title={{ en: 'Theatre Workshops', bn: 'থিয়েটার কর্মশালা', hi: 'थिएटर कार्यशालाएं' }}
        description={{
          en: 'Education Through Experience. Expression for a New Generation.',
          bn: 'অভিজ্ঞতার মাধ্যমে শিক্ষা। নতুন প্রজন্মের জন্য অভিব্যক্তি।',
          hi: 'अनुभव के माध्यम से शिक्षा। नई पीढ़ी के लिए अभिव्यक्ति।'
        }}
        compact
      />

      {/* Introduction */}
      <section className="py-16 section-dark border-b border-white/5">
        <div className="container max-w-4xl">
          <p className="text-xl md:text-2xl text-light-gray leading-relaxed text-center font-light">
            {lang === 'en' && 'Theatre is not just performance. It is a powerful educational tool that builds confidence, empathy, communication, and critical thinking—skills essential for children, educators, and modern generations navigating an ever-changing world.'}
            {lang === 'bn' && 'থিয়েটার শুধু অভিনয় নয়। এটি একটি শক্তিশালী শিক্ষামূলক হাতিয়ার যা আত্মবিশ্বাস, সহানুভূতি, যোগাযোগ এবং সমালোচনামূলক চিন্তাভাবনা তৈরি করে—যা শিশু, শিক্ষাবিদ এবং আধুনিক প্রজন্মের জন্য অপরিহার্য দক্ষতা।'}
            {lang === 'hi' && 'थिएटर सिर्फ प्रदर्शन नहीं है। यह एक शक्तिशाली शैक्षिक उपकरण है जो आत्मविश्वास, सहानुभूति, संचार और आलोचनात्मक सोच का निर्माण करता है—बच्चों, शिक्षकों और आधुनिक पीढ़ियों के लिए आवश्यक कौशल।'}
          </p>
        </div>
      </section>

      {/* What Makes Our Workshops Different */}
      <section className="py-16 section-charcoal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'What Makes Our Workshops Different'}
              {lang === 'bn' && 'আমাদের কর্মশালা কেন আলাদা'}
              {lang === 'hi' && 'हमारी कार्यशालाएं क्यों अलग हैं'}
            </h2>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              {lang === 'en' && 'Theatre as Education, Not Entertainment Alone'}
              {lang === 'bn' && 'শুধু বিনোদন নয়, শিক্ষা হিসেবে থিয়েটার'}
              {lang === 'hi' && 'केवल मनोरंजन नहीं, शिक्षा के रूप में थिएटर'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-light-gray leading-relaxed mb-6">
                {lang === 'en' && 'Our theatre workshops are designed as learning ecosystems where participants experience theatre as a way to understand:'}
                {lang === 'bn' && 'আমাদের থিয়েটার কর্মশালাগুলি শিক্ষার ইকোসিস্টেম হিসেবে ডিজাইন করা হয়েছে যেখানে অংশগ্রহণকারীরা থিয়েটারকে বোঝার উপায় হিসেবে অভিজ্ঞতা লাভ করে:'}
                {lang === 'hi' && 'हमारी थिएटर कार्यशालाएं सीखने के पारिस्थितिकी तंत्र के रूप में डिज़ाइन की गई हैं जहां प्रतिभागी थिएटर को समझने के तरीके के रूप में अनुभव करते हैं:'}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  {lang === 'en' && 'Self and identity'}
                  {lang === 'bn' && 'আত্ম ও পরিচয়'}
                  {lang === 'hi' && 'स्वयं और पहचान'}
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  {lang === 'en' && 'Society and relationships'}
                  {lang === 'bn' && 'সমাজ ও সম্পর্ক'}
                  {lang === 'hi' && 'समाज और रिश्ते'}
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  {lang === 'en' && 'Emotions, conflict, and collaboration'}
                  {lang === 'bn' && 'আবেগ, দ্বন্দ্ব ও সহযোগিতা'}
                  {lang === 'hi' && 'भावनाएं, संघर्ष और सहयोग'}
                </li>
              </ul>
              <p className="text-gold mt-6 font-medium">
                {lang === 'en' && 'We focus on process, reflection, and growth rather than only final performances.'}
                {lang === 'bn' && 'আমরা শুধু চূড়ান্ত পরিবেশনা নয়, প্রক্রিয়া, প্রতিফলন ও বিকাশের উপর মনোযোগ দিই।'}
                {lang === 'hi' && 'हम केवल अंतिम प्रदर्शन पर नहीं, बल्कि प्रक्रिया, चिंतन और विकास पर ध्यान केंद्रित करते हैं।'}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <OptimizedImage
                src={`${WORKSHOP_BASE}/DSC05159.JPG`}
                alt="Workshop in progress"
                width={800}
                quality={75}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Theatre in Education - Why It Matters */}
      <section className="py-16 section-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'Theatre in Education — Why It Matters'}
              {lang === 'bn' && 'শিক্ষায় থিয়েটার — কেন এটি গুরুত্বপূর্ণ'}
              {lang === 'hi' && 'शिक्षा में थिएटर — यह क्यों महत्वपूर्ण है'}
            </h2>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              {lang === 'en' && 'Theatre as a Foundational Learning Tool'}
              {lang === 'bn' && 'মৌলিক শিক্ষা হাতিয়ার হিসেবে থিয়েটার'}
              {lang === 'hi' && 'मूलभूत शिक्षण उपकरण के रूप में थिएटर'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-light-gray text-center mb-8">
              {lang === 'en' && 'Theatre strengthens essential life skills often missing in conventional education:'}
              {lang === 'bn' && 'থিয়েটার প্রচলিত শিক্ষায় প্রায়ই অনুপস্থিত অপরিহার্য জীবন দক্ষতা শক্তিশালী করে:'}
              {lang === 'hi' && 'थिएटर पारंपरिक शिक्षा में अक्सर अनुपस्थित आवश्यक जीवन कौशल को मजबूत करता है:'}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {lifeSkills.map((skill, i) => (
                <div key={i} className="bg-black/40 border border-white/10 rounded-lg p-4 text-center hover:border-gold/30 transition-colors">
                  <span className="text-white">{skill[lang]}</span>
                </div>
              ))}
            </div>

            <p className="text-gold text-center mt-8 text-lg">
              {lang === 'en' && 'By engaging the mind, body, and emotions together, theatre creates deeper and long-lasting learning.'}
              {lang === 'bn' && 'মন, শরীর ও আবেগকে একসাথে সম্পৃক্ত করে, থিয়েটার গভীর ও দীর্ঘস্থায়ী শিক্ষা তৈরি করে।'}
              {lang === 'hi' && 'मन, शरीर और भावनाओं को एक साथ जोड़कर, थिएटर गहरी और लंबे समय तक चलने वाली सीख बनाता है।'}
            </p>
          </div>
        </div>
      </section>

      {/* Impact on Children */}
      <section className="py-16 section-charcoal">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <OptimizedImage
                src={`${WORKSHOP_BASE}/samatat014.jpg`}
                alt="Children in theatre workshop"
                width={800}
                quality={75}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-gold text-3xl md:text-4xl mb-4">
                {lang === 'en' && 'Impact of Theatre on Children'}
                {lang === 'bn' && 'শিশুদের উপর থিয়েটারের প্রভাব'}
                {lang === 'hi' && 'बच्चों पर थिएटर का प्रभाव'}
              </h2>
              <p className="text-light-gray text-lg mb-6">
                {lang === 'en' && 'For children, theatre is not about acting—it is about awareness and expression.'}
                {lang === 'bn' && 'শিশুদের জন্য, থিয়েটার অভিনয় সম্পর্কে নয়—এটি সচেতনতা ও অভিব্যক্তি সম্পর্কে।'}
                {lang === 'hi' && 'बच्चों के लिए, थिएटर अभिनय के बारे में नहीं है—यह जागरूकता और अभिव्यक्ति के बारे में है।'}
              </p>

              <p className="text-light-gray mb-4">
                {lang === 'en' && 'Theatre workshops help children:'}
                {lang === 'bn' && 'থিয়েটার কর্মশালা শিশুদের সাহায্য করে:'}
                {lang === 'hi' && 'थिएटर कार्यशालाएं बच्चों की मदद करती हैं:'}
              </p>

              <ul className="space-y-3 mb-6">
                {childrenImpact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item[lang]}
                  </li>
                ))}
              </ul>

              <p className="text-gold font-medium">
                {lang === 'en' && 'Children exposed to theatre often grow into more confident, curious, and socially aware individuals.'}
                {lang === 'bn' && 'থিয়েটারের সংস্পর্শে আসা শিশুরা প্রায়ই আরও আত্মবিশ্বাসী, কৌতূহলী এবং সামাজিকভাবে সচেতন ব্যক্তি হয়ে ওঠে।'}
                {lang === 'hi' && 'थिएटर से जुड़े बच्चे अक्सर अधिक आत्मविश्वासी, जिज्ञासु और सामाजिक रूप से जागरूक व्यक्ति बनते हैं।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theatre and Modern Generations */}
      <section className="py-16 section-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'Theatre and Modern Generations'}
              {lang === 'bn' && 'থিয়েটার ও আধুনিক প্রজন্ম'}
              {lang === 'hi' && 'थिएटर और आधुनिक पीढ़ियां'}
            </h2>
            <p className="text-light-gray text-lg max-w-3xl mx-auto">
              {lang === 'en' && 'Modern generations grow up with screens, rapid information, and reduced human interaction. Theatre offers balance.'}
              {lang === 'bn' && 'আধুনিক প্রজন্ম স্ক্রিন, দ্রুত তথ্য এবং কম মানবিক মিথস্ক্রিয়ার সাথে বেড়ে ওঠে। থিয়েটার ভারসাম্য প্রদান করে।'}
              {lang === 'hi' && 'आधुनिक पीढ़ियां स्क्रीन, तेज़ जानकारी और कम मानवीय बातचीत के साथ बड़ी होती हैं। थिएटर संतुलन प्रदान करता है।'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {generationBenefits.map((gen, i) => (
              <div key={i} className={`bg-gradient-to-br ${gen.color} border ${gen.borderColor} rounded-xl p-6`}>
                <h3 className="text-white text-2xl font-bold mb-4">{gen.gen}</h3>
                <ul className="space-y-3">
                  {gen.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-light-gray text-sm">
                      <span className="text-gold mt-1">•</span>
                      {benefit[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gold text-xl mt-10 max-w-2xl mx-auto">
            {lang === 'en' && 'Theatre nurtures what technology cannot replace—human connection.'}
            {lang === 'bn' && 'থিয়েটার যা প্রযুক্তি প্রতিস্থাপন করতে পারে না তা লালন করে—মানবিক সংযোগ।'}
            {lang === 'hi' && 'थिएटर उस चीज़ का पोषण करता है जिसे तकनीक प्रतिस्थापित नहीं कर सकती—मानवीय संबंध।'}
          </p>
        </div>
      </section>

      {/* Workshops for Students & Teachers */}
      <section className="py-16 section-charcoal">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Students */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-gold text-2xl mb-2">
                {lang === 'en' && 'For Students'}
                {lang === 'bn' && 'ছাত্রদের জন্য'}
                {lang === 'hi' && 'छात्रों के लिए'}
              </h3>
              <p className="text-white text-lg mb-4">
                {lang === 'en' && 'Learning Beyond Classrooms'}
                {lang === 'bn' && 'শ্রেণীকক্ষের বাইরে শিক্ষা'}
                {lang === 'hi' && 'कक्षाओं से परे सीखना'}
              </p>
              <p className="text-light-gray text-sm mb-4">
                {lang === 'en' && 'Student-focused workshops support holistic development by:'}
                {lang === 'bn' && 'ছাত্র-কেন্দ্রিক কর্মশালা সামগ্রিক বিকাশে সহায়তা করে:'}
                {lang === 'hi' && 'छात्र-केंद्रित कार्यशालाएं समग्र विकास का समर्थन करती हैं:'}
              </p>
              <ul className="space-y-2">
                {studentBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-light-gray text-sm">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <p className="text-gray text-xs mt-4">
                {lang === 'en' && 'Workshops are designed for different age groups, from early learners to college students.'}
                {lang === 'bn' && 'কর্মশালাগুলি প্রাথমিক শিক্ষার্থী থেকে কলেজ ছাত্রদের জন্য বিভিন্ন বয়সের জন্য ডিজাইন করা হয়েছে।'}
                {lang === 'hi' && 'कार्यशालाएं विभिन्न आयु समूहों के लिए डिज़ाइन की गई हैं, प्रारंभिक शिक्षार्थियों से लेकर कॉलेज छात्रों तक।'}
              </p>
            </div>

            {/* For Teachers */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">👩‍🏫</div>
              <h3 className="text-gold text-2xl mb-2">
                {lang === 'en' && 'For Teachers & Educators'}
                {lang === 'bn' && 'শিক্ষক ও শিক্ষাবিদদের জন্য'}
                {lang === 'hi' && 'शिक्षकों और शिक्षाविदों के लिए'}
              </h3>
              <p className="text-white text-lg mb-4">
                {lang === 'en' && 'Every classroom is a stage'}
                {lang === 'bn' && 'প্রতিটি শ্রেণীকক্ষ একটি মঞ্চ'}
                {lang === 'hi' && 'हर कक्षा एक मंच है'}
              </p>
              <p className="text-light-gray text-sm mb-4">
                {lang === 'en' && 'Our workshops for educators focus on:'}
                {lang === 'bn' && 'শিক্ষাবিদদের জন্য আমাদের কর্মশালা মনোযোগ দেয়:'}
                {lang === 'hi' && 'शिक्षकों के लिए हमारी कार्यशालाएं केंद्रित हैं:'}
              </p>
              <ul className="space-y-2">
                {teacherBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-light-gray text-sm">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <p className="text-gold text-xs mt-4">
                {lang === 'en' && 'Teachers trained in theatre often become more confident, engaging, and emotionally resilient educators.'}
                {lang === 'bn' && 'থিয়েটারে প্রশিক্ষিত শিক্ষকরা প্রায়ই আরও আত্মবিশ্বাসী, আকর্ষক এবং আবেগগতভাবে স্থিতিস্থাপক শিক্ষাবিদ হয়ে ওঠেন।'}
                {lang === 'hi' && 'थिएटर में प्रशिक्षित शिक्षक अक्सर अधिक आत्मविश्वासी, आकर्षक और भावनात्मक रूप से लचीले शिक्षक बनते हैं।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Workshops */}
      <section className="py-16 section-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'Types of Workshops We Offer'}
              {lang === 'bn' && 'আমরা যে ধরনের কর্মশালা দিই'}
              {lang === 'hi' && 'हम जो कार्यशालाएं प्रदान करते हैं'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopTypes.map((type, i) => (
              <div key={i} className="group bg-black/40 rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <OptimizedImage
                    src={type.image}
                    alt={type.category[lang] as string}
                    width={600}
                    quality={60}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-3xl">{type.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white text-lg font-medium mb-3 group-hover:text-gold transition-colors">
                    {type.category[lang]}
                  </h3>
                  <ul className="space-y-2">
                    {type.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-light-gray text-sm">
                        <span className="text-gold">•</span>
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Structure */}
      <section className="py-16 section-charcoal">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'Workshop Structure'}
              {lang === 'bn' && 'কর্মশালার কাঠামো'}
              {lang === 'hi' && 'कार्यशाला की संरचना'}
            </h2>
            <p className="text-light-gray">
              {lang === 'en' && 'Most workshops include:'}
              {lang === 'bn' && 'বেশিরভাগ কর্মশালায় থাকে:'}
              {lang === 'hi' && 'अधिकांश कार्यशालाओं में शामिल हैं:'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {workshopStructure.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {i + 1}
                </div>
                <span className="text-white">{item[lang]}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-light-gray">
            {lang === 'en' && 'Workshops range from single-day intensives to long-term modules.'}
            {lang === 'bn' && 'কর্মশালাগুলি একদিনের নিবিড় প্রশিক্ষণ থেকে দীর্ঘমেয়াদী মডিউল পর্যন্ত বিস্তৃত।'}
            {lang === 'hi' && 'कार्यशालाएं एक दिन के गहन प्रशिक्षण से लेकर दीर्घकालिक मॉड्यूल तक होती हैं।'}
          </p>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-16 section-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold text-3xl md:text-4xl mb-4">
              {lang === 'en' && 'Who Can Participate'}
              {lang === 'bn' && 'কারা অংশগ্রহণ করতে পারে'}
              {lang === 'hi' && 'कौन भाग ले सकता है'}
            </h2>
            <p className="text-light-gray">
              {lang === 'en' && 'Our workshops are open to:'}
              {lang === 'bn' && 'আমাদের কর্মশালা উন্মুক্ত:'}
              {lang === 'hi' && 'हमारी कार्यशालाएं खुली हैं:'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-8">
            {participants.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-full px-5 py-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-white">{p.text[lang]}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gold">
            {lang === 'en' && 'No prior theatre experience is required unless specified.'}
            {lang === 'bn' && 'নির্দিষ্ট না থাকলে আগে থিয়েটারের অভিজ্ঞতার প্রয়োজন নেই।'}
            {lang === 'hi' && 'जब तक निर्दिष्ट न हो, पूर्व थिएटर अनुभव की आवश्यकता नहीं है।'}
          </p>
        </div>
      </section>

      {/* Our Experience & Institutional Programs */}
      <section className="py-16 section-charcoal">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Our Experience */}
            <div>
              <h2 className="text-gold text-2xl md:text-3xl mb-4">
                {lang === 'en' && 'Our Experience and Approach'}
                {lang === 'bn' && 'আমাদের অভিজ্ঞতা ও পদ্ধতি'}
                {lang === 'hi' && 'हमारा अनुभव और दृष्टिकोण'}
              </h2>
              <p className="text-light-gray leading-relaxed mb-4">
                {lang === 'en' && 'With years of theatre practice, productions, festivals, and educational initiatives, our workshops are rooted in real theatre experience.'}
                {lang === 'bn' && 'বছরের পর বছর থিয়েটার অনুশীলন, প্রযোজনা, উৎসব এবং শিক্ষামূলক উদ্যোগের সাথে, আমাদের কর্মশালাগুলি প্রকৃত থিয়েটার অভিজ্ঞতায় নিহিত।'}
                {lang === 'hi' && 'वर्षों के थिएटर अभ्यास, प्रोडक्शन, महोत्सव और शैक्षिक पहलों के साथ, हमारी कार्यशालाएं वास्तविक थिएटर अनुभव में निहित हैं।'}
              </p>
              <p className="text-white font-medium">
                {lang === 'en' && 'Facilitators are active practitioners who bring rehearsal-floor knowledge into every session.'}
                {lang === 'bn' && 'সুবিধাদাতারা সক্রিয় অনুশীলনকারী যারা প্রতিটি সেশনে রিহার্সাল-মেঝের জ্ঞান নিয়ে আসেন।'}
                {lang === 'hi' && 'सुविधाकर्ता सक्रिय अभ्यासी हैं जो हर सत्र में रिहर्सल-फ्लोर ज्ञान लाते हैं।'}
              </p>
            </div>

            {/* Institutional Programs */}
            <div>
              <h2 className="text-gold text-2xl md:text-3xl mb-4">
                {lang === 'en' && 'Institutional and Custom Programs'}
                {lang === 'bn' && 'প্রাতিষ্ঠানিক ও কাস্টম প্রোগ্রাম'}
                {lang === 'hi' && 'संस्थागत और कस्टम कार्यक्रम'}
              </h2>
              <p className="text-light-gray mb-4">
                {lang === 'en' && 'We design customized workshops for:'}
                {lang === 'bn' && 'আমরা কাস্টমাইজড কর্মশালা ডিজাইন করি:'}
                {lang === 'hi' && 'हम अनुकूलित कार्यशालाएं डिज़ाइन करते हैं:'}
              </p>
              <ul className="space-y-2 mb-4">
                {institutionalPrograms.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <p className="text-light-gray text-sm">
                {lang === 'en' && 'Programs are tailored based on age group, objectives, and duration.'}
                {lang === 'bn' && 'প্রোগ্রামগুলি বয়সের গ্রুপ, উদ্দেশ্য এবং সময়কালের উপর ভিত্তি করে তৈরি করা হয়।'}
                {lang === 'hi' && 'कार्यक्रम आयु वर्ग, उद्देश्यों और अवधि के आधार पर तैयार किए जाते हैं।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Engage */}
      <section className="py-16 section-dark">
        <div className="container max-w-3xl text-center">
          <h2 className="text-gold text-3xl md:text-4xl mb-6">
            {lang === 'en' && 'How to Engage With Us'}
            {lang === 'bn' && 'আমাদের সাথে কীভাবে যুক্ত হবেন'}
            {lang === 'hi' && 'हमसे कैसे जुड़ें'}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/40 border border-white/10 rounded-lg p-5">
              <div className="text-3xl mb-3">📅</div>
              <p className="text-light-gray text-sm">
                {lang === 'en' && 'Upcoming workshops are announced regularly'}
                {lang === 'bn' && 'আসন্ন কর্মশালা নিয়মিত ঘোষণা করা হয়'}
                {lang === 'hi' && 'आगामी कार्यशालाओं की नियमित घोषणा की जाती है'}
              </p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-5">
              <div className="text-3xl mb-3">🤝</div>
              <p className="text-light-gray text-sm">
                {lang === 'en' && 'Institutional collaborations are welcome'}
                {lang === 'bn' && 'প্রাতিষ্ঠানিক সহযোগিতা স্বাগত'}
                {lang === 'hi' && 'संस्थागत सहयोग का स्वागत है'}
              </p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-5">
              <div className="text-3xl mb-3">✨</div>
              <p className="text-light-gray text-sm">
                {lang === 'en' && 'Customized workshop requests can be discussed'}
                {lang === 'bn' && 'কাস্টমাইজড কর্মশালার অনুরোধ আলোচনা করা যায়'}
                {lang === 'hi' && 'अनुकूलित कार्यशाला अनुरोधों पर चर्चा की जा सकती है'}
              </p>
            </div>
          </div>

          <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg">
            {lang === 'en' && 'Contact Us for Enquiries'}
            {lang === 'bn' && 'অনুসন্ধানের জন্য যোগাযোগ করুন'}
            {lang === 'hi' && 'पूछताछ के लिए संपर्क करें'}
          </Link>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 section-charcoal border-t border-white/10">
        <div className="container max-w-3xl text-center">
          <p className="text-2xl md:text-3xl text-white leading-relaxed mb-4">
            {lang === 'en' && 'Theatre is not a luxury.'}
            {lang === 'bn' && 'থিয়েটার বিলাসিতা নয়।'}
            {lang === 'hi' && 'थिएटर विलासिता नहीं है।'}
          </p>
          <p className="text-2xl md:text-3xl text-gold leading-relaxed">
            {lang === 'en' && 'It is education for the heart, mind, and society.'}
            {lang === 'bn' && 'এটি হৃদয়, মন এবং সমাজের জন্য শিক্ষা।'}
            {lang === 'hi' && 'यह हृदय, मन और समाज के लिए शिक्षा है।'}
          </p>
        </div>
      </section>
    </main>
  );
}
