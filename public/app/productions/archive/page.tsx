'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Productions', bn: 'প্রযোজনা', hi: 'प्रस्तुतियाँ' },
  title: { en: 'Production Archive', bn: 'প্রযোজনা আর্কাইভ', hi: 'प्रस्तुति संग्रह' },
  description: { en: 'Complete archive of our theatrical productions since Arshi Desh.', bn: 'আর্শি দেশ থেকে আমাদের থিয়েটার প্রযোজনার সম্পূর্ণ আর্কাইভ।', hi: 'आर्शी देश से हमारी नाट्य प्रस्तुतियों का पूर्ण संग्रह।' },
  comingSoon: { en: 'Historical production archive coming soon.', bn: 'ঐতিহাসিক প্রযোজনা আর্কাইভ শীঘ্রই আসছে।', hi: 'ऐतिहासिक प्रस्तुति संग्रह जल्द आ रहा है।' }
};

export default function ProductionsArchivePage() {
  const lang = useLanguage();
  return (
    <main>
      <PageHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />
      <section className="section section-charcoal">
        <div className="container"><p className="text-center text-light-gray">{content.comingSoon[lang]}</p></div>
      </section>
    </main>
  );
}
