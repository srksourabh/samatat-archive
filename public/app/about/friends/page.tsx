import { PageHeader } from '../../components/PageHeader';

export default function FriendsPage() {
  return (
    <main>
      <PageHeader eyebrow="About Us" title={{ en: 'Friend Organisations', bn: 'বন্ধু সংগঠন', hi: 'मित्र संगठन' }} description={{ en: 'Our partners and collaborators in the theatre community.', bn: 'থিয়েটার সম্প্রদায়ে আমাদের অংশীদার ও সহযোগী।', hi: 'थिएटर समुदाय में हमारे भागीदार और सहयोगी।' }} />
      <section className="section section-charcoal">
        <div className="container"><p className="text-center text-light-gray">Partner organizations coming soon.</p></div>
      </section>
    </main>
  );
}
