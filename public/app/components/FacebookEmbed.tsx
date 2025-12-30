'use client';

import { useState } from 'react';

type FacebookPageFeedProps = {
  pageUrl: string;
  width?: number;
  height?: number;
  tabs?: 'timeline' | 'events' | 'messages' | 'timeline,events';
  showFacepile?: boolean;
  smallHeader?: boolean;
  className?: string;
};

// Facebook Page Plugin - Automatically shows latest posts from page
export function FacebookPageFeed({
  pageUrl,
  width = 500,
  height = 600,
  tabs = 'timeline',
  showFacepile = false,
  smallHeader = true,
  className = ''
}: FacebookPageFeedProps) {
  const [isLoading, setIsLoading] = useState(true);

  const encodedUrl = encodeURIComponent(pageUrl);
  const embedUrl = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=${tabs}&width=${width}&height=${height}&small_header=${smallHeader}&adapt_container_width=true&hide_cover=false&show_facepile=${showFacepile}`;

  return (
    <div className={`facebook-page-feed relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-charcoal rounded-lg border border-white/10">
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
        height={height}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

// Keep individual post embed for specific posts if needed
type FacebookPostEmbedProps = {
  postUrl: string;
  width?: number | string;
  height?: number;
  showText?: boolean;
  className?: string;
};

function isVideoUrl(url: string): boolean {
  return url.includes('/reel/') || url.includes('/videos/') || url.includes('/share/v/') || url.includes('/watch/');
}

export function FacebookPostEmbed({
  postUrl,
  width = '100%',
  height = 500,
  showText = true,
  className = ''
}: FacebookPostEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  const encodedUrl = encodeURIComponent(postUrl);
  const isVideo = isVideoUrl(postUrl);
  const embedUrl = isVideo
    ? `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=${showText}&width=500`
    : `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=${showText}&width=500`;

  return (
    <div className={`facebook-post-embed relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-charcoal rounded-lg border border-white/10">
          <div className="animate-pulse flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        </div>
      )}
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

// Backwards compatibility alias
export const FacebookEmbed = FacebookPostEmbed;
export function FacebookSDKInit() {
  return null;
}
