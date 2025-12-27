'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Productions', bn: 'প্রযোজনা', hi: 'प्रस्तुतियाँ' },
  title: { en: '2023 Productions', bn: '২০২৩ প্রযোজনা', hi: '2023 प्रस्तुतियाँ' },
  description: { en: "Last year's theatrical productions.", bn: 'গত বছরের থিয়েটার প্রযোজনা।', hi: 'पिछले वर्ष की नाट्य प्रस्तुतियाँ।' },
  comingSoon: { en: '2023 production details coming soon.', bn: '২০২৩ প্রযোজনার বিবরণ শীঘ্রই আসছে।', hi: '2023 प्रस्तुति विवरण जल्द आ रहा है।' }
};

export default function Productions2023Page() {
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
