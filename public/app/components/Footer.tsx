'use client';

import Link from 'next/link';
import { useTranslation } from './LanguageSwitcher';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid-5">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo1.png"
                alt="Samatat Sanskriti"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray text-sm leading-relaxed mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="text-sm text-gray">
              <p>Uttarpara, Hooghly</p>
              <p>West Bengal, India</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="footer-heading">{t('footer.about')}</h4>
            <ul className="footer-links">
              <li><Link href="/about/history">{t('footer.history')}</Link></li>
              <li><Link href="/about/team">{t('footer.team')}</Link></li>
              <li><Link href="/about/alumni">{t('footer.alumni')}</Link></li>
              <li><Link href="/about/president">{t('footer.president')}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-heading">{t('footer.programs')}</h4>
            <ul className="footer-links">
              <li><Link href="/workshops">{t('footer.workshops')}</Link></li>
              <li><Link href="/productions">{t('footer.productions')}</Link></li>
              <li><Link href="/festivals">{t('footer.festival')}</Link></li>
              <li><Link href="/activities">{t('footer.activities')}</Link></li>
            </ul>
          </div>

          {/* Statutory */}
          <div>
            <h4 className="footer-heading">{t('footer.statutory')}</h4>
            <ul className="footer-links">
              <li><Link href="/statutory/committee">{t('footer.committee')}</Link></li>
              <li><Link href="/statutory/reports">{t('footer.reports')}</Link></li>
              <li><Link href="/statutory/grants">{t('footer.grants')}</Link></li>
              <li><Link href="/statutory/sponsors">{t('footer.sponsors')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">{t('footer.getInvolved')}</h4>
            <ul className="footer-links">
              <li><Link href="/contact#join">{t('footer.join')}</Link></li>
              <li><Link href="/contact#workshop">{t('footer.requestWorkshop')}</Link></li>
              <li><Link href="/contact#performance">{t('footer.requestPerformance')}</Link></li>
              <li><Link href="/contact#donate">{t('footer.donate')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Samatat Sanskriti, Uttarpara. {t('footer.copyright')}</p>
          <p>{t('footer.established')}</p>
        </div>
      </div>
    </footer>
  );
}
