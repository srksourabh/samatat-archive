'use client';

import { useLanguage } from './LanguageSwitcher';
import { FacebookPageFeed } from './FacebookEmbed';
import { facebookSectionContent, facebookPageUrl } from '../../lib/facebook-posts';

export function FacebookNewsSection() {
  const lang = useLanguage();

  return (
    <section className="section section-charcoal" id="news">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <p className="section-eyebrow">
            {facebookSectionContent.eyebrow[lang]}
          </p>
          <h2 className="section-title">
            {facebookSectionContent.title[lang]}
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            {facebookSectionContent.description[lang]}
          </p>
        </div>

        {/* Facebook Page Feed - Auto-updates with latest posts */}
        <div className="max-w-2xl mx-auto">
          <FacebookPageFeed
            pageUrl={facebookPageUrl}
            height={600}
            tabs="timeline"
            className="rounded-lg overflow-hidden"
          />
        </div>

        {/* Follow Link */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {facebookSectionContent.followUs[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
