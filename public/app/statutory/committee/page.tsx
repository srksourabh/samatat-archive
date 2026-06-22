'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

const committee = [
  { name: 'Sucharita Hui', role: { en: 'President', bn: 'সভাপতি', hi: 'अध्यक्ष' }, bio: { en: 'Leading Samatat with a vision for cultural excellence.', bn: 'সাংস্কৃতিক উৎকর্ষের লক্ষ্য নিয়ে সমতটকে নেতৃত্ব দিচ্ছেন।', hi: 'सांस्कृतिक उत्कृष्टता के दृष्टिकोण के साथ समतट का नेतृत्व कर रहे हैं।' } },
  { name: 'Sourabh Bhaumik', role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক', hi: 'महासचिव' }, bio: { en: 'Managing operations and artistic direction.', bn: 'অপারেশন এবং শৈল্পিক নির্দেশনা পরিচালনা করছেন।', hi: 'संचालन और कलात्मक निर्देशन का प्रबंधन।' } },
  { name: 'Tarun Dutta', role: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ', hi: 'कोषाध्यक्ष' }, bio: { en: 'Ensuring financial transparency and growth.', bn: 'আর্থিক স্বচ্ছতা এবং প্রবৃদ্ধি নিশ্চিত করছেন।', hi: 'वित्तीय पारदर्शिता और विकास सुनिश्चित करना।' } },
];

export default function CommitteePage() {
  const lang = useLanguage();
  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Governance"
        title={{ en: 'Executive Committee', bn: 'কার্যনির্বাহী কমিটি', hi: 'कार्यकारी समिति' }}
        description={{ en: 'The leadership team guiding Samatat Sanskriti.', bn: 'সমতট সংস্কৃতির দিকনির্দেশনা প্রদানকারী নেতৃত্ব দল।', hi: 'समतट संस्कृति का मार्गदर्शन करने वाली नेतृत्व टीम।' }}
        compact
      />
      
      <section className="section section-dark relative overflow-hidden">
        <BackgroundPhotos variant="corner" opacity={0.05} />
        <div className="container max-w-5xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {committee.map((member, i) => (
              <div key={i} className="card p-8 text-center border-t-4 border-gold">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">👤</div>
                <h3 className="text-xl text-white mb-1">{member.name}</h3>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">{member.role[lang]}</p>
                <p className="text-light-gray text-sm leading-relaxed">{member.bio[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-charcoal">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-light text-white mb-6">Organizational Structure</h2>
          <p className="text-light-gray mb-8">
            Our committee is elected every two years during the Annual General Meeting, 
            ensuring a democratic and transparent governance process.
          </p>
          <div className="p-6 bg-black/20 rounded-lg border border-white/5">
            <p className="text-gold font-medium">Next Election: June 2027</p>
          </div>
        </div>
      </section>
    </main>
  );
}
