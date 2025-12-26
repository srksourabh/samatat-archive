import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';

const activities = [
  { title: 'Basanta Utsav', description: 'Spring festival celebrating art, music, and cultural expression.', href: '/activities/basanta-utsav', icon: '🌸' },
  { title: 'Children Film Festival', description: 'Annual film festival showcasing cinema for young audiences.', href: '/activities/film-festival', icon: '🎬' },
  { title: 'Bhasha Dibos', description: 'Celebration of International Mother Language Day honoring Bengali language.', href: '/activities/bhasha-dibos', icon: '📚' },
  { title: 'Rabindra Jayanti', description: 'Annual commemoration of Rabindranath Tagore through performances and readings.', href: '/activities/rabindra-jayanti', icon: '🎭' },
];

export default function ActivitiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Beyond Theatre"
        title={{ en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম', hi: 'सांस्कृतिक गतिविधियां' }}
        description={{ en: 'Beyond theatre productions, we organize various cultural programs that celebrate Bengali heritage and foster community engagement.', bn: 'থিয়েটার প্রযোজনার বাইরেও, আমরা বিভিন্ন সাংস্কৃতিক অনুষ্ঠান আয়োজন করি যা বাঙালি ঐতিহ্য উদযাপন করে এবং সম্প্রদায়ের সম্পৃক্ততা বাড়ায়।', hi: 'थिएटर प्रोडक्शन के अलावा, हम विभिन्न सांस्कृतिक कार्यक्रम आयोजित करते हैं जो बंगाली विरासत का जश्न मनाते हैं और सामुदायिक जुड़ाव को बढ़ावा देते हैं।' }}
      />

      <section className="section section-charcoal">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Link key={activity.href} href={activity.href} className="card p-6 border border-transparent hover:border-gold/30 transition-all">
                <span className="text-4xl mb-4 block">{activity.icon}</span>
                <h2 className="card-title text-xl mb-2">{activity.title}</h2>
                <p className="card-description">{activity.description}</p>
                <span className="btn-text mt-4 inline-block">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
