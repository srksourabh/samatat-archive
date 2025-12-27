import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { BackgroundPhotos } from '../components/BackgroundPhotos';

const aboutSections = [
  {
    title: 'History & Background',
    description: 'Discover the cultural heritage of Uttarpara and how Samatat Sanskriti emerged from this rich tradition.',
    href: '/about/history',
    icon: '📜',
  },
  {
    title: 'Vision & Mission',
    description: 'Our founding principles and the vision that continues to guide our artistic journey.',
    href: '/about/vision',
    icon: '🎯',
  },
  {
    title: 'The Team',
    description: 'Meet the passionate artists, directors, and volunteers who bring our productions to life.',
    href: '/about/team',
    icon: '👥',
  },
  {
    title: 'Alumni Success Stories',
    description: 'Celebrating the achievements of our former members in theatre, film, and beyond.',
    href: '/about/alumni',
    icon: '⭐',
  },
  {
    title: "President's Message",
    description: 'A word from our President on our mission and future direction.',
    href: '/about/president',
    icon: '💬',
  },
  {
    title: "Secretary's Desk",
    description: 'Updates and insights from our Secretary on organizational matters.',
    href: '/about/secretary',
    icon: '📝',
  },
  {
    title: 'Friend Organisations',
    description: 'Our partners and collaborators in the theatre community.',
    href: '/about/friends',
    icon: '🤝',
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{
          en: 'Our Story',
          bn: 'আমাদের গল্প',
          hi: 'हमारी कहानी',
        }}
        description={{
          en: 'Since 1999, Samatat Sanskriti has been dedicated to meaningful storytelling, cultural preservation, and community development through the performing arts in Uttarpara, West Bengal.',
          bn: '১৯৯৯ সাল থেকে, সমতট সংস্কৃতি উত্তরপাড়ায় অর্থবহ গল্প বলা, সাংস্কৃতিক সংরক্ষণ এবং পারফর্মিং আর্টসের মাধ্যমে সম্প্রদায়ের উন্নয়নে নিবেদিত।',
          hi: '1999 से, समतट संस्कृति उत्तरपाड़ा में सार्थक कहानी कहने, सांस्कृतिक संरक्षण और प्रदर्शन कलाओं के माध्यम से सामुदायिक विकास के लिए समर्पित है।',
        }}
      />

      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.12} />
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="card p-6 hover:border-gold/30 border border-transparent transition-all"
              >
                <span className="text-4xl mb-4 block">{section.icon}</span>
                <h2 className="card-title text-xl mb-2">{section.title}</h2>
                <p className="card-description">{section.description}</p>
                <span className="btn-text mt-4 inline-block">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
