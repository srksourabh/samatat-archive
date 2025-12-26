import { PageHeader } from '../../components/PageHeader';

export default function HistoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{
          en: 'History & Cultural Background',
          bn: 'ইতিহাস ও সাংস্কৃতিক পটভূমি',
          hi: 'इतिहास और सांस्कृतिक पृष्ठभूमि',
        }}
        description={{
          en: 'The rich cultural heritage of Uttarpara and the birth of Samatat Sanskriti.',
          bn: 'উত্তরপাড়ার সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য এবং সমতট সংস্কৃতির জন্ম।',
          hi: 'उत्तरपाड़ा की समृद्ध सांस्कृतिक विरासत और समतट संस्कृति का जन्म।',
        }}
      />

      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <div className="prose prose-invert prose-lg">
            <h2 className="text-gold">Uttarpara: A Cultural Hub</h2>
            <p className="text-light-gray leading-relaxed">
              Uttarpara, located on the western bank of the Hooghly River in the Hooghly district of West Bengal,
              has been a significant cultural center since the 19th century. The town is renowned for its rich
              literary and artistic heritage, having been home to many notable Bengali intellectuals and artists.
            </p>

            <h2 className="text-gold mt-12">The Birth of Samatat Sanskriti</h2>
            <p className="text-light-gray leading-relaxed">
              In 1997, a group of passionate theatre enthusiasts came together with a shared vision: to create
              a platform for meaningful theatrical expression that would serve the community. Thus, Samatat
              Sanskriti was born - a name that reflects our commitment to cultural equality and artistic excellence.
            </p>

            <h2 className="text-gold mt-12">Early Years (1997-2005)</h2>
            <p className="text-light-gray leading-relaxed">
              The early years were marked by determination and community support. Starting with limited resources
              but unlimited passion, our founding members staged productions in local community halls, gradually
              building an audience that appreciated thought-provoking theatre.
            </p>

            <h2 className="text-gold mt-12">Growth & Recognition (2005-2015)</h2>
            <p className="text-light-gray leading-relaxed">
              This decade saw Samatat Sanskriti establish itself as a respected name in Bengali theatre.
              We launched our annual theatre festival, began conducting regular workshops, and received
              recognition from cultural organizations across West Bengal.
            </p>

            <h2 className="text-gold mt-12">Present Day (2015-Present)</h2>
            <p className="text-light-gray leading-relaxed">
              Today, Samatat Sanskriti continues its mission with renewed vigor. We have produced over 100
              original productions, trained thousands of aspiring theatre artists, and remain committed to
              bringing meaningful theatre to our community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
