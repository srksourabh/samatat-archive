'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Productions', bn: 'প্রযোজনা', hi: 'प्रस्तुतियाँ' },
  title: { en: '2024 Productions', bn: '২০২৪ প্রযোজনা', hi: '2024 प्रस्तुतियाँ' },
  description: { en: "This year's theatrical productions.", bn: 'এই বছরের থিয়েটার প্রযোজনা।', hi: 'इस वर्ष की नाट्य प्रस्तुतियाँ।' },
  comingSoon: { en: '2024 production details coming soon.', bn: '২০২৪ প্রযোজনার বিবরণ শীঘ্রই আসছে।', hi: '2024 प्रस्तुति विवरण जल्द आ रहा है।' }
};

export default function Productions2024Page() {
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
