import { PageHeader } from '../../components/PageHeader';

export default function AlumniPage() {
  return (
    <main>
      <PageHeader eyebrow="About Us" title={{ en: 'Alumni Success Stories', bn: 'প্রাক্তন সদস্যদের সাফল্যের গল্প', hi: 'पूर्व छात्र सफलता की कहानियां' }} description={{ en: 'Celebrating the achievements of our former members.', bn: 'আমাদের প্রাক্তন সদস্যদের অর্জন উদযাপন।', hi: 'हमारे पूर्व सदस्यों की उपलब्धियों का जश्न।' }} />
      <section className="section section-charcoal">
        <div className="container"><p className="text-center text-light-gray">Alumni profiles coming soon.</p></div>
      </section>
    </main>
  );
}
