'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type NewsItem = {
  title: string;
  link: string;
  source: string;
};

// RSS feed sources - using rss2json.com API to handle CORS
const RSS_FEEDS = [
  { url: 'https://playbill.com/rss/broadway', source: 'Playbill' },
  { url: 'https://www.broadwayworld.com/rss/newsroom', source: 'Broadway World' },
  { url: 'https://thetheatretimes.com/feed', source: 'The Theatre Times' },
  { url: 'https://www.howlround.com/rss.xml', source: 'HowlRound' },
  { url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms?category=entertainment', source: 'Times of India' },
];

// Fallback news items if RSS feeds fail
const FALLBACK_NEWS: NewsItem[] = [
  { title: 'Broadway returns with spectacular new seasons', link: 'https://playbill.com', source: 'Playbill' },
  { title: 'West End announces exciting lineup for 2025', link: 'https://www.westendtheatre.com', source: 'West End' },
  { title: 'National Theatre unveils groundbreaking productions', link: 'https://www.nationaltheatre.org.uk', source: 'National Theatre' },
  { title: 'Theatre festivals celebrate global performing arts', link: 'https://thetheatretimes.com', source: 'Theatre Times' },
  { title: 'New voices emerge in contemporary drama scene', link: 'https://www.howlround.com', source: 'HowlRound' },
  { title: 'Classical theatre reimagined for modern audiences', link: 'https://www.broadwayworld.com', source: 'Broadway World' },
  { title: 'Community theatre movements gain momentum worldwide', link: 'https://thetheatretimes.com', source: 'Theatre Times' },
  { title: 'Award season highlights exceptional performances', link: 'https://playbill.com', source: 'Playbill' },
];

const SCROLL_POSITION_KEY = 'newsTickerScrollPosition';
const NEWS_CACHE_KEY = 'newsTickerCache';
const NEWS_CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes

export function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);

  // Fetch news from RSS feeds
  const fetchNews = useCallback(async () => {
    // Check cache first
    const cached = localStorage.getItem(NEWS_CACHE_KEY);
    if (cached) {
      try {
        const { news: cachedNews, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < NEWS_CACHE_EXPIRY && cachedNews.length > 0) {
          setNews(cachedNews);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        // Cache invalid, fetch fresh
      }
    }

    const allNews: NewsItem[] = [];

    // Try to fetch from RSS feeds using rss2json API
    for (const feed of RSS_FEEDS.slice(0, 3)) { // Limit to 3 feeds to avoid rate limiting
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=5`,
          { signal: AbortSignal.timeout(5000) }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.status === 'ok' && data.items) {
            const items = data.items.slice(0, 5).map((item: { title: string; link: string }) => ({
              title: item.title.replace(/<[^>]*>/g, '').trim(),
              link: item.link,
              source: feed.source,
            }));
            allNews.push(...items);
          }
        }
      } catch (error) {
        // Feed failed, continue with others
        console.log(`Failed to fetch ${feed.source}`);
      }
    }

    // If we got some news, use it; otherwise use fallback
    const finalNews = allNews.length > 0 ? allNews : FALLBACK_NEWS;

    // Shuffle news for variety
    const shuffled = [...finalNews].sort(() => Math.random() - 0.5);

    // Cache the news
    localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({
      news: shuffled,
      timestamp: Date.now(),
    }));

    setNews(shuffled);
    setIsLoading(false);
  }, []);

  // Initialize and restore scroll position
  useEffect(() => {
    fetchNews();

    // Restore scroll position
    const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
    if (savedPosition) {
      scrollPositionRef.current = parseFloat(savedPosition);
    }

    // Save position before page unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPositionRef.current.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Also save on visibility change (for SPA navigation)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPositionRef.current.toString());
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPositionRef.current.toString());
    };
  }, [fetchNews]);

  // Continuous scrolling animation
  useEffect(() => {
    if (!scrollRef.current || news.length === 0) return;

    const scrollContainer = scrollRef.current;
    const scrollSpeed = 0.5; // pixels per frame

    // Set initial position
    scrollContainer.scrollLeft = scrollPositionRef.current;

    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;

        // Get the width of one set of news items (we duplicate for seamless loop)
        const contentWidth = scrollContainer.scrollWidth / 2;

        // Reset to start when we've scrolled through one complete set
        if (scrollPositionRef.current >= contentWidth) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [news]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-black via-black/95 to-black border-b border-gold/30 py-2.5">
        <div className="flex items-center gap-4 px-4 md:px-8">
          <div className="flex items-center gap-2 bg-gold/10 px-3 py-1 rounded border border-gold/30 shrink-0">
            <svg className="w-4 h-4 text-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="text-gold font-bold text-xs sm:text-sm whitespace-nowrap uppercase tracking-wider">
              Global Theater Updates
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <span className="text-gray-400 text-sm animate-pulse">Loading latest theater news from around the world...</span>
          </div>
        </div>
      </div>
    );
  }

  // Double the news items for seamless infinite scroll
  const doubledNews = [...news, ...news];

  return (
    <div className="bg-gradient-to-r from-black via-black/95 to-black border-b border-gold/30 py-2.5">
      <div className="flex items-center gap-4 px-4 md:px-8">
        {/* Label */}
        <div className="flex items-center gap-2 bg-gold/10 px-3 py-1 rounded border border-gold/30 shrink-0">
          <svg className="w-4 h-4 text-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <span className="text-gold font-bold text-xs sm:text-sm whitespace-nowrap uppercase tracking-wider">
            Global Theater Updates
          </span>
        </div>

        {/* Scrolling News */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden mask-gradient"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
          }}
        >
          <div className="flex whitespace-nowrap">
            {doubledNews.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-300 hover:text-gold transition-colors duration-200 mr-6 group"
              >
                <span className="text-gold/70 mr-2 text-xs uppercase tracking-wide">{item.source}</span>
                <span className="group-hover:underline">{item.title}</span>
                <span className="text-gold/30 mx-6">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
