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
            <div className="text-sm text-gray mb-4">
              <p>Uttarpara, Hooghly</p>
              <p>West Bengal, India</p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/Samatat2000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SamatatSanskritiUttarpara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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
