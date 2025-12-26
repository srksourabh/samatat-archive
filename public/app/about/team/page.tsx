import { PageHeader } from '../../components/PageHeader';

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: 'The Team', bn: 'আমাদের দল', hi: 'हमारी टीम' }}
        description={{ en: 'Meet the passionate artists and volunteers behind Samatat Sanskriti.', bn: 'সমতট সংস্কৃতির পেছনের উৎসাহী শিল্পী ও স্বেচ্ছাসেবকদের সাথে পরিচিত হন।', hi: 'समतट संस्कृति के पीछे के जुनूनी कलाकारों और स्वयंसेवकों से मिलें।' }}
      />
      <section className="section section-charcoal">
        <div className="container">
          <p className="text-center text-light-gray">Team member profiles coming soon.</p>
        </div>
      </section>
    </main>
  );
}
