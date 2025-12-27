'use client';

import { PageHeader } from '../../components/PageHeader';
import { useLanguage } from '../../components/LanguageSwitcher';

const content = {
  eyebrow: { en: 'Productions', bn: 'প্রযোজনা', hi: 'प्रस्तुतियाँ' },
  title: { en: 'Current Season', bn: 'বর্তমান মরসুম', hi: 'वर्तमान सीज़न' },
  description: { en: 'Our current production lineup and upcoming performances.', bn: 'আমাদের বর্তমান প্রযোজনা তালিকা এবং আসন্ন পরিবেশনা।', hi: 'हमारी वर्तमान प्रस्तुति लाइनअप और आगामी प्रदर्शन।' },
  comingSoon: { en: 'Current season details coming soon.', bn: 'বর্তমান মরসুমের বিবরণ শীঘ্রই আসছে।', hi: 'वर्तमान सीज़न विवरण जल्द आ रहा है।' }
};

export default function CurrentProductionsPage() {
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
