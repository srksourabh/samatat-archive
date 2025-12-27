'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Annual General Meetings', bn: 'বার্ষিক সাধারণ সভা', hi: 'वार्षिक आम बैठकें' },
  description: { en: 'AGM minutes and resolutions archive.', bn: 'বার্ষিক সাধারণ সভার কার্যবিবরণী এবং প্রস্তাব আর্কাইভ।', hi: 'वार्षिक आम बैठक के कार्यवृत्त और प्रस्ताव संग्रह।' },
  comingSoon: { en: 'AGM records coming soon.', bn: 'বার্ষিক সাধারণ সভার নথি শীঘ্রই আসছে।', hi: 'वार्षिक आम बैठक के रिकॉर्ड जल्द आ रहे हैं।' }
};

export default function AGMPage() {
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
