import { PageHeader } from '../../components/PageHeader';

export default function VisionPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: 'Vision & Mission', bn: 'দৃষ্টি ও লক্ষ্য', hi: 'विजन और मिशन' }}
        description={{ en: 'Our founding principles and guiding vision.', bn: 'আমাদের প্রতিষ্ঠার নীতি এবং পথপ্রদর্শক দৃষ্টিভঙ্গি।', hi: 'हमारे संस्थापक सिद्धांत और मार्गदर्शक दृष्टि।' }}
      />
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-gold">
              <h2 className="text-2xl text-gold mb-4">Our Vision</h2>
              <p className="text-light-gray leading-relaxed">
                To be a leading cultural institution that preserves theatrical traditions while innovating for contemporary audiences, fostering community through the transformative power of theatre.
              </p>
            </div>
            <div className="card p-8 border-l-4 border-white">
              <h2 className="text-2xl text-white mb-4">Our Mission</h2>
              <p className="text-light-gray leading-relaxed">
                To create original theatrical works, provide education and training, preserve our cultural heritage, and serve as a gathering place for artists and audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
