'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Current Committee', bn: 'বর্তমান কমিটি', hi: 'वर्तमान समिति' },
  description: { en: 'Executive committee formation for the current term.', bn: 'বর্তমান মেয়াদের জন্য কার্যনির্বাহী কমিটি গঠন।', hi: 'वर्तमान कार्यकाल के लिए कार्यकारी समिति गठन।' },
  comingSoon: { en: 'Committee details coming soon.', bn: 'কমিটির বিবরণ শীঘ্রই আসছে।', hi: 'समिति विवरण जल्द आ रहा है।' }
};

export default function CommitteePage() {
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
