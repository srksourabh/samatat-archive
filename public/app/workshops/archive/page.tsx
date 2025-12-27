'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएँ' },
  title: { en: 'Workshop Archive (2000-2020)', bn: 'কর্মশালা আর্কাইভ (২০০০-২০২০)', hi: 'कार्यशाला संग्रह (2000-2020)' },
  description: { en: 'Two decades of theatre training programs.', bn: 'দুই দশকের থিয়েটার প্রশিক্ষণ কার্যক্রম।', hi: 'रंगमंच प्रशिक्षण कार्यक्रमों के दो दशक।' },
  comingSoon: { en: 'Historical workshop archive coming soon.', bn: 'ঐতিহাসিক কর্মশালা আর্কাইভ শীঘ্রই আসছে।', hi: 'ऐतिहासिक कार्यशाला संग्रह जल्द आ रहा है।' }
};

export default function WorkshopArchivePage() {
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
