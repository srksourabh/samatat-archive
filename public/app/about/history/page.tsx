import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

// Production photos for visual storytelling
const historyPhotos = [
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/Picture-07.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
];

export default function HistoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{
          en: 'History & Background',
          bn: 'ইতিহাস ও পটভূমি',
          hi: 'इतिहास और पृष्ठभूमि',
        }}
        description={{
          en: 'From Cultural Enthusiasts to a Theatre Movement',
          bn: 'সাংস্কৃতিক উৎসাহীদের থেকে একটি থিয়েটার আন্দোলনে',
          hi: 'सांस्कृतिक उत्साही लोगों से एक रंगमंच आंदोलन तक',
        }}
        compact
      />

      {/* The Beginning */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="right" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold text-3xl mb-6">The Beginning (1999)</h2>
              <p className="text-light-gray leading-relaxed mb-4">
                Samatat Sanskriti began its journey in 1999 in Uttarpara, born from the shared vision of a group of
                like-minded youths and performing arts enthusiasts in the vicinity. While we started as a general
                cultural organization, our true endeavor in theatre began in the year 2000.
              </p>
              <p className="text-light-gray leading-relaxed">
                Uttarpara, located on the western bank of the Hooghly River in the Hooghly district of West Bengal,
                has been a significant cultural center since the 19th century. The town is renowned for its rich
                literary and artistic heritage, having been home to many notable Bengali intellectuals and artists.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${historyPhotos[1]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              <p className="absolute bottom-4 left-4 text-sm text-white/80">Arshi Desher Porsira - Our debut production</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stalwart's Challenge */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${historyPhotos[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              <p className="absolute bottom-4 left-4 text-sm text-white/80">Charandas Chor at Academy of Fine Arts</p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gold text-3xl mb-6">The Stalwart&apos;s Challenge</h2>
              <p className="text-light-gray leading-relaxed mb-4">
                Our pivot to serious theatre was marked by a pivotal moment. After a successful children&apos;s theatre
                workshop production, legendary theatre personalities <span className="text-white font-medium">Bibhash Chakraborty</span> and
                <span className="text-white font-medium"> Meghnad Bhattacharya</span> witnessed the packed auditorium.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 my-6 italic text-white">
                &ldquo;If you can draw such a massive audience for children, why not create a platform for adult theatre?&rdquo;
              </blockquote>
              <p className="text-light-gray leading-relaxed">
                Impressed by the audience response, they issued this challenge. We accepted, and with the support of the
                Uttarpara-Kotrung Municipality and Bongyo Natya Songhoti, the <span className="text-gold font-medium">Samatat Natya Mela</span> was
                born in December 2000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Continues */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <h2 className="text-gold text-3xl mb-8 text-center">The Journey Continues</h2>

          <div className="space-y-8">
            <div className="card p-6 border-l-4 border-gold">
              <h3 className="text-xl text-white mb-3">2001 - Nandikar Partnership</h3>
              <p className="text-light-gray">
                The prestigious group <span className="text-white">Nandikar</span> stepped in to supervise our children&apos;s theatre workshops,
                bringing professional training methodology and artistic excellence to our programs.
              </p>
            </div>

            <div className="card p-6 border-l-4 border-gold">
              <h3 className="text-xl text-white mb-3">2005-2015 - Growth & Recognition</h3>
              <p className="text-light-gray">
                This decade saw Samatat Sanskriti establish itself as a respected name in Bengali theatre.
                Productions like <span className="text-white">Behula</span>, <span className="text-white">Tota Kahini</span>, and
                <span className="text-white"> Satmar Paloan</span> traveled across West Bengal, receiving critical acclaim.
              </p>
            </div>

            <div className="card p-6 border-l-4 border-gold">
              <h3 className="text-xl text-white mb-3">2015-Present - A Premier Institution</h3>
              <p className="text-light-gray">
                Today, nearly three decades later, Samatat stands as a premier cultural institution in Bengal.
                We have produced over 150 original productions, hosted 25 annual theatre festivals, and trained
                hundreds of young artists who now work professionally across India&apos;s theatre industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">Years of Theatre</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Productions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Annual Festivals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Artists Trained</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
