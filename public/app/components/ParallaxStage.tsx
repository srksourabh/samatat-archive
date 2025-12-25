'use client';

import { useEffect, useState } from 'react';

export function ParallaxStage({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      {/* Parallax Background Layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
          opacity: Math.max(0, 1 - scrollY * 0.002),
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Deep background stage */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
      </div>

      {/* Middle Layer - Curtains with subtle parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Additional atmospheric effects can go here */}
      </div>

      {/* Front Layer - Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
