'use client';

import { useEffect, useRef, useState } from 'react';

// Helper to create storage URL
const storageUrl = (path: string) =>
  `https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/${encodeURIComponent(path)}?alt=media`;

// Festival images directly under the Festivals folder (not in subfolders)
const festivalImages = [
  storageUrl('images/Festivals/1.jpg'),
  storageUrl('images/Festivals/2.jpg'),
  storageUrl('images/Festivals/3.jpg'),
  storageUrl('images/Festivals/4.jpg'),
  storageUrl('images/Festivals/5.jpg'),
  storageUrl('images/Festivals/6.jpg'),
  storageUrl('images/Festivals/7.jpg'),
  storageUrl('images/Festivals/8.jpg'),
  storageUrl('images/Festivals/9.jpg'),
  storageUrl('images/Festivals/10.jpg'),
  storageUrl('images/Festivals/11.jpg'),
  storageUrl('images/Festivals/13.jpg'),
  storageUrl('images/Festivals/15.jpg'),
  storageUrl('images/Festivals/17.jpg'),
  storageUrl('images/Festivals/18.jpg'),
  storageUrl('images/Festivals/19.jpg'),
  storageUrl('images/Festivals/20.jpg'),
  storageUrl('images/Festivals/22.jpg'),
  storageUrl('images/Festivals/23.jpg'),
];

export function FestivalMarquee() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-32 md:h-40 bg-[var(--color-black)]" />
    );
  }

  // Double the images for seamless infinite scroll
  const allImages = [...festivalImages, ...festivalImages];

  return (
    <section className="relative py-6 bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-black)] overflow-hidden border-t border-[var(--color-dark-gray)]">
      {/* Title */}
      <div className="container mb-4">
        <h3 className="text-lg text-[var(--color-gold)] font-medium text-center opacity-70">
          Festival Memories
        </h3>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-black)] to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-black)] to-transparent z-10 pointer-events-none" />

        {/* Scrolling images */}
        <div
          ref={scrollRef}
          className="flex gap-4 animate-scroll"
          style={{
            width: 'max-content',
          }}
        >
          {allImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-28 md:h-36 w-auto aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
