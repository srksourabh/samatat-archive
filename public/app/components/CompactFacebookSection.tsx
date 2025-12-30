'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import { facebookSectionContent, facebookPageUrl } from '../../lib/facebook-posts';

export function CompactFacebookSection() {
  const lang = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Use Facebook Page Plugin which auto-updates with latest posts
  const encodedUrl = encodeURIComponent(facebookPageUrl);
  const embedUrl = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <section className="py-8 section-charcoal" id="news">
      <div className="container">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gold uppercase tracking-wider mb-0.5">
                {facebookSectionContent.eyebrow[lang]}
              </p>
              <h2 className="text-lg font-medium text-white">
                {facebookSectionContent.title[lang]}
              </h2>
            </div>
          </div>

          {/* Follow Button */}
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            <span className="hidden sm:inline">{facebookSectionContent.followUs[lang]}</span>
            <span className="sm:hidden">Follow</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Facebook Page Feed - Compact */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-charcoal rounded-lg overflow-hidden border border-white/10">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-charcoal">
                <div className="animate-pulse flex flex-col items-center">
                  <svg className="w-10 h-10 text-blue-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-gray-400 text-sm">Loading Facebook feed...</span>
                </div>
              </div>
            )}
            <iframe
              src={embedUrl}
              width="100%"
              height={400}
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
