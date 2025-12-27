'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Statutory', bn: 'বিধিবদ্ধ', hi: 'वैधानिक' },
  title: { en: 'Grants & Donations', bn: 'অনুদান ও দান', hi: 'अनुदान और दान' },
  description: { en: 'Information about grants received and donation records.', bn: 'প্রাপ্ত অনুদান এবং দানের রেকর্ড সম্পর্কে তথ্য।', hi: 'प्राप्त अनुदान और दान रिकॉर्ड के बारे में जानकारी।' },
  comingSoon: { en: 'Grants and donations information coming soon.', bn: 'অনুদান ও দানের তথ্য শীঘ্রই আসছে।', hi: 'अनुदान और दान की जानकारी जल्द आ रही है।' }
};

export default function GrantsPage() {
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
