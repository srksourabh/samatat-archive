'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';
import Link from 'next/link';

type Language = 'en' | 'bn' | 'hi';

const content = {
  eyebrow: { en: 'Festival', bn: 'উৎসব', hi: 'उत्सव' },
  title: { en: '26th Samatat Natyamela 2025', bn: '২৬তম সমতট নাট্যমেলা ২০২৫', hi: '26वां समतट नाट्यमेला 2025' },
  description: {
    en: '15 Days, 17 Plays - A celebration of Bengali theatre at Ganabhaban, Uttarpara',
    bn: '১৫ দিন, ১৭টি নাটক - গণভবন, উত্তরপাড়ায় বাংলা নাটকের উৎসব',
    hi: '15 दिन, 17 नाटक - गणभवन, उत्तरपाड़ा में बांग्ला रंगमंच का उत्सव'
  },
  schedule: { en: 'Festival Schedule', bn: 'উৎসবের সময়সূচী', hi: 'उत्सव कार्यक्रम' },
  festivalInfo: { en: 'Festival Information', bn: 'উৎসবের তথ্য', hi: 'उत्सव जानकारी' },
  venue: { en: 'Venue', bn: 'স্থান', hi: 'स्थान' },
  venueText: { en: 'Ganabhaban, Uttarpara', bn: 'গণভবন, উত্তরপাড়া', hi: 'गणभवन, उत्तरपाड़ा' },
  dates: { en: 'Dates', bn: 'তারিখ', hi: 'तारीख' },
  datesText: { en: 'December 16 - 30, 2025', bn: '১৬ - ৩০ ডিসেম্বর, ২০২৫', hi: '16 - 30 दिसंबर, 2025' },
  time: { en: 'Show Time', bn: 'শোয়ের সময়', hi: 'शो का समय' },
  timeText: { en: '6:30 PM Daily', bn: 'প্রতিদিন সন্ধ্যা ৬:৩০', hi: 'प्रतिदिन शाम 6:30 बजे' },
  totalPlays: { en: 'Total Plays', bn: 'মোট নাটক', hi: 'कुल नाटक' },
  director: { en: 'Director', bn: 'পরিচালক', hi: 'निर्देशक' },
  playwright: { en: 'Playwright', bn: 'নাট্যকার', hi: 'नाटककार' },
  cast: { en: 'Cast', bn: 'কুশীলব', hi: 'कलाकार' },
  group: { en: 'Group', bn: 'দল', hi: 'दल' },
  backToFestivals: { en: '← Back to Festivals', bn: '← উৎসবে ফিরুন', hi: '← उत्सवों पर वापस' },
};

interface Play {
  date: string;
  dateBn: string;
  time: string;
  title: { en: string; bn: string; hi: string };
  group: { en: string; bn: string; hi: string };
  director: string;
  playwright?: string;
  cast?: string[];
  isSpecial?: boolean;
}

const plays: Play[] = [
  {
    date: 'December 16',
    dateBn: '১৬ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Alor Pother Jatri', bn: 'আলোর পথের যাত্রী', hi: 'आलोर पथेर जात्री' },
    group: { en: 'Samatat Sanskriti, Uttarpara', bn: 'সমতট সংস্কৃতি, উত্তরপাড়া', hi: 'समतट संस्कृति, उत्तरपाड़ा' },
    director: 'Dipankar Saha',
    playwright: 'Dipankar Saha',
    cast: ['Sudipta Chakraborty', 'Dipak Das', 'Anirban Roy'],
    isSpecial: true,
  },
  {
    date: 'December 17',
    dateBn: '১৭ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Khela', bn: 'খেলা', hi: 'खेला' },
    group: { en: 'Rangayan, Kolkata', bn: 'রঙ্গায়ন, কলকাতা', hi: 'रंगायन, कोलकाता' },
    director: 'Shyamal Chakraborty',
    playwright: 'Rabindranath Tagore',
    cast: ['Tapas Paul', 'Supriya Devi'],
  },
  {
    date: 'December 18',
    dateBn: '১৮ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Banchara', bn: 'বাঁচারা', hi: 'बांचारा' },
    group: { en: 'Sanglap, Hooghly', bn: 'সংলাপ, হুগলী', hi: 'संगलाप, हुगली' },
    director: 'Partha Pratim Das',
    playwright: 'Manoj Mitra',
    cast: ['Sudip Mukherjee', 'Rita Koley'],
  },
  {
    date: 'December 19',
    dateBn: '১৯ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Natun Yehudi', bn: 'নতুন ইয়েহুদি', hi: 'नतुन येहुदी' },
    group: { en: 'Sanhati, Serampore', bn: 'সম্মতি, শ্রীরামপুর', hi: 'सम्मति, सेरामपुर' },
    director: 'Bibhas Chakraborty',
    playwright: 'D.L. Roy',
    cast: ['Koushik Sen', 'Sreelekha Mitra'],
  },
  {
    date: 'December 20',
    dateBn: '২০ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Chander Pahar', bn: 'চাঁদের পাহাড়', hi: 'चांदेर पहाड़' },
    group: { en: 'Theatre Unit, Chandannagar', bn: 'থিয়েটার ইউনিট, চন্দননগর', hi: 'थिएटर यूनिट, चंदननगर' },
    director: 'Sanjay Ghosh',
    playwright: 'Bibhutibhushan Bandyopadhyay',
    cast: ['Rahul Banerjee', 'Sujan Mukherjee'],
  },
  {
    date: 'December 21',
    dateBn: '২১ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Kinu Kaharer Thetre', bn: 'কিনু কাহারের থেটার', hi: 'किनु काहारेर थेटर' },
    group: { en: 'Chetana, Rishra', bn: 'চেতনা, রিষড়া', hi: 'चेतना, रिषड़ा' },
    director: 'Ashok Mukherjee',
    playwright: 'Shaoli Mitra',
    cast: ['Debashish Mondal', 'Puja Roy'],
  },
  {
    date: 'December 22',
    dateBn: '২২ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Raja', bn: 'রাজা', hi: 'राजा' },
    group: { en: 'Nandikar, Kolkata', bn: 'নান্দীকার, কলকাতা', hi: 'नांदीकार, कोलकाता' },
    director: 'Rudraprasad Sengupta',
    playwright: 'Rabindranath Tagore',
    cast: ['Sohini Sengupta', 'Bratya Basu'],
  },
  {
    date: 'December 23',
    dateBn: '২৩ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Mareech Sambad', bn: 'মারীচ সংবাদ', hi: 'मारीच संबाद' },
    group: { en: 'Swapnasandhani, Kolkata', bn: 'স্বপ্নসন্ধানী, কলকাতা', hi: 'स्वप्नसंधानी, कोलकाता' },
    director: 'Kaushik Sen',
    playwright: 'Arun Mukherjee',
    cast: ['Kaushik Sen', 'Reshmi Sen'],
  },
  {
    date: 'December 24',
    dateBn: '২৪ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Sei Shomoy', bn: 'সেই সময়', hi: 'सेई समय' },
    group: { en: 'Sayak, Burdwan', bn: 'সায়ক, বর্ধমান', hi: 'सायक, बर्धमान' },
    director: 'Dipankar Ghosh',
    playwright: 'Sunil Gangopadhyay',
    cast: ['Tanmay Dey', 'Moumita Chakraborty'],
  },
  {
    date: 'December 25',
    dateBn: '২৫ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Meghe Dhaka Tara', bn: 'মেঘে ঢাকা তারা', hi: 'मेघे ढाका तारा' },
    group: { en: 'Prachya, Durgapur', bn: 'প্রাচ্য, দুর্গাপুর', hi: 'प्राच्य, दुर्गापुर' },
    director: 'Subrata Mukhopadhyay',
    playwright: 'Shaktipada Rajguru',
    cast: ['Sangita Sinha', 'Anup Kumar'],
  },
  {
    date: 'December 26',
    dateBn: '২৬ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Aguner Poroshmoni', bn: 'আগুনের পরশমণি', hi: 'आगुनेर परशमणि' },
    group: { en: 'Utsa, Howrah', bn: 'উৎস, হাওড়া', hi: 'उत्स, हावड़ा' },
    director: 'Probir Guha',
    playwright: 'Humayun Ahmed',
    cast: ['Biplab Ganguly', 'Shreya Das'],
  },
  {
    date: 'December 27',
    dateBn: '২৭ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Raktakarabi', bn: 'রক্তকরবী', hi: 'रक्तकरबी' },
    group: { en: 'Bohurupee, Kolkata', bn: 'বহুরূপী, কলকাতা', hi: 'बहुरूपी, कोलकाता' },
    director: 'Sohag Sen',
    playwright: 'Rabindranath Tagore',
    cast: ['Debshankar Halder', 'Poulomi Bose'],
  },
  {
    date: 'December 28',
    dateBn: '২৮ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Gharer Baire', bn: 'ঘরে বাইরে', hi: 'घरे बाइरे' },
    group: { en: 'Gandharva, Barrackpore', bn: 'গন্ধর্ব, ব্যারাকপুর', hi: 'गंधर्व, बैरकपुर' },
    director: 'Anirban Roy',
    playwright: 'Rabindranath Tagore',
    cast: ['Suman Mukhopadhyay', 'Arpita Chatterjee'],
  },
  {
    date: 'December 29',
    dateBn: '২৯ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Muktodhara', bn: 'মুক্তধারা', hi: 'मुक्तधारा' },
    group: { en: 'Natya Bharati, Asansol', bn: 'নাট্য ভারতী, আসানসোল', hi: 'नाट्य भारती, आसानसोल' },
    director: 'Gautam Halder',
    playwright: 'Rabindranath Tagore',
    cast: ['Rituparna Sengupta', 'Sabyasachi Chakraborty'],
  },
  {
    date: 'December 29',
    dateBn: '২৯ ডিসেম্বর',
    time: '3:00 PM',
    title: { en: 'Special Matinee Show', bn: 'বিশেষ মাটিনি শো', hi: 'विशेष मैटिनी शो' },
    group: { en: 'Youth Group Performance', bn: 'যুব দলের অভিনয়', hi: 'युवा समूह प्रदर्शन' },
    director: 'Various Directors',
    isSpecial: true,
  },
  {
    date: 'December 30',
    dateBn: '৩০ ডিসেম্বর',
    time: '6:30 PM',
    title: { en: 'Bisarjan', bn: 'বিসর্জন', hi: 'बिसर्जन' },
    group: { en: 'Samatat Sanskriti, Uttarpara', bn: 'সমতট সংস্কৃতি, উত্তরপাড়া', hi: 'समतट संस्कृति, उत्तरपाड़ा' },
    director: 'Dipankar Saha',
    playwright: 'Rabindranath Tagore',
    cast: ['Sreelekha Mitra', 'Kaushik Sen', 'Ensemble Cast'],
    isSpecial: true,
  },
  {
    date: 'December 30',
    dateBn: '৩০ ডিসেম্বর',
    time: '9:00 PM',
    title: { en: 'Closing Ceremony & Awards', bn: 'সমাপনী অনুষ্ঠান ও পুরস্কার বিতরণ', hi: 'समापन समारोह और पुरस्कार' },
    group: { en: 'Festival Committee', bn: 'উৎসব কমিটি', hi: 'उत्सव समिति' },
    director: 'Festival Committee',
    isSpecial: true,
  },
];

export default function Festival2025Page() {
  const lang = useLanguage() as Language;

  return (
    <main>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        compact
      />

      {/* Festival Info Banner */}
      <section className="section-padding bg-gradient-to-r from-amber-900/30 to-red-900/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📍</div>
              <div className="text-sm text-gray-400">{content.venue[lang]}</div>
              <div className="text-white font-semibold">{content.venueText[lang]}</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-sm text-gray-400">{content.dates[lang]}</div>
              <div className="text-white font-semibold">{content.datesText[lang]}</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⏰</div>
              <div className="text-sm text-gray-400">{content.time[lang]}</div>
              <div className="text-white font-semibold">{content.timeText[lang]}</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎭</div>
              <div className="text-sm text-gray-400">{content.totalPlays[lang]}</div>
              <div className="text-white font-semibold text-2xl">17</div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Schedule */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title mb-12">{content.schedule[lang]}</h2>

          <div className="space-y-6">
            {plays.map((play, index) => (
              <div
                key={index}
                className={`card p-6 border-l-4 ${play.isSpecial ? 'border-l-amber-500 bg-amber-900/10' : 'border-l-red-500'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Date and Time */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="text-amber-400 font-semibold text-lg">
                      {lang === 'bn' ? play.dateBn : play.date}
                    </div>
                    <div className="text-gray-400">{play.time}</div>
                  </div>

                  {/* Play Details */}
                  <div className="flex-grow">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {play.title[lang]}
                      {lang !== 'bn' && play.title.bn !== play.title.en && (
                        <span className="text-gray-400 text-base ml-2">({play.title.bn})</span>
                      )}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">{content.group[lang]}: </span>
                        <span className="text-gray-300">{play.group[lang]}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{content.director[lang]}: </span>
                        <span className="text-gray-300">{play.director}</span>
                      </div>
                      {play.playwright && (
                        <div>
                          <span className="text-gray-500">{content.playwright[lang]}: </span>
                          <span className="text-gray-300">{play.playwright}</span>
                        </div>
                      )}
                    </div>

                    {play.cast && play.cast.length > 0 && (
                      <div className="mt-2 text-sm">
                        <span className="text-gray-500">{content.cast[lang]}: </span>
                        <span className="text-gray-400">{play.cast.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/festivals"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              {content.backToFestivals[lang]}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
