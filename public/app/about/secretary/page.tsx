import { PageHeader } from '../../components/PageHeader';

export default function SecretaryPage() {
  return (
    <main>
      <PageHeader eyebrow="About Us" title={{ en: "Secretary's Desk", bn: 'সম্পাদকের ডেস্ক', hi: 'सचिव का डेस्क' }} description={{ en: 'Updates from our Secretary.', bn: 'আমাদের সম্পাদকের কাছ থেকে আপডেট।', hi: 'हमारे सचिव से अपडेट।' }} />
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <p className="text-light-gray leading-relaxed">Secretary updates and organizational news coming soon.</p>
        </div>
      </section>
    </main>
  );
}
