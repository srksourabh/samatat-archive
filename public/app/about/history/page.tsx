import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

// Production photos for visual storytelling
const historyPhotos = [
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/Picture-07.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
];

const LANDMARKS_BASE = 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/landmarks';

// Historical landmarks of Uttarpara
const landmarks = [
  {
    title: 'Uttarpara Railway Station',
    titleBn: 'উত্তরপাড়া রেলওয়ে স্টেশন',
    year: '1854',
    description: 'One of the oldest railway stations in Eastern India, part of the first passenger railway line in this region. A historic landmark that witnessed the arrival of modern transportation in Bengal.',
    descriptionBn: 'পূর্ব ভারতের প্রাচীনতম রেলওয়ে স্টেশনগুলির মধ্যে একটি, এই অঞ্চলের প্রথম যাত্রীবাহী রেলপথের অংশ। বাংলায় আধুনিক পরিবহনের আগমন প্রত্যক্ষ করা একটি ঐতিহাসিক স্থান।',
    image: `${LANDMARKS_BASE}/uttarpara-station.jpg`,
  },
  {
    title: 'Jaykrishna Public Library',
    titleBn: 'জয়কৃষ্ণ পাবলিক লাইব্রেরি',
    year: '1859',
    description: 'The first free public library in Asia, established by Rai Jaykrishna Mukherjee. A majestic colonial building that has been a beacon of knowledge and learning for over 165 years.',
    descriptionBn: 'এশিয়ার প্রথম বিনামূল্যে জনসাধারণের গ্রন্থাগার, রায় জয়কৃষ্ণ মুখোপাধ্যায় কর্তৃক প্রতিষ্ঠিত। একটি মহিমান্বিত ঔপনিবেশিক ভবন যা ১৬৫ বছরেরও বেশি সময় ধরে জ্ঞান ও শিক্ষার আলোকবর্তিকা।',
    image: `${LANDMARKS_BASE}/jaykrishna-library.jpg`,
  },
  {
    title: 'Vande Mataram Bhawan',
    titleBn: 'বন্দে মাতরম ভবন',
    year: '1882',
    description: 'The residence in Chinsurah where Bankim Chandra Chattopadhyay composed "Vande Mataram", the national song of India. A pilgrimage site for every Indian patriot and lover of Bengali literature.',
    descriptionBn: 'চুঁচুড়ার যে বাড়িতে বঙ্কিমচন্দ্র চট্টোপাধ্যায় ভারতের জাতীয় সংগীত "বন্দে মাতরম" রচনা করেছিলেন। প্রতিটি ভারতীয় দেশপ্রেমিক এবং বাংলা সাহিত্যপ্রেমীর তীর্থস্থান।',
    image: `${LANDMARKS_BASE}/bankim-chandra-house.jpg`,
  },
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

      {/* Heritage of Uttarpara */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-4 text-center">Heritage of Uttarpara</h2>
          <p className="text-light-gray text-center max-w-3xl mx-auto mb-12">
            Our home, Uttarpara, is steeped in history and culture. These landmarks represent the rich heritage
            that inspires our work and connects us to generations of Bengali intellectuals and freedom fighters.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {landmarks.map((landmark) => (
              <div key={landmark.title} className="card overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={landmark.image}
                    alt={landmark.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded text-sm font-bold">
                    Est. {landmark.year}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold">{landmark.title}</h3>
                    <p className="text-gold text-sm">{landmark.titleBn}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-light-gray text-sm leading-relaxed">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Stalwart's Challenge */}
      <section className="section section-charcoal">
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
                We have produced 25+ original productions with 500+ shows, hosted 25 annual theatre festivals, and trained
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
              <div className="stat-number">25+</div>
              <div className="stat-label">Productions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Annual Festivals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Shows Completed</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
