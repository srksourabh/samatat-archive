'use client';

import { useEffect, useState } from 'react';

export function DynamicSpotlight() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const heroSection = document.querySelector('.proscenium-arch');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove as EventListener);
      heroSection.addEventListener('mouseenter', handleMouseEnter);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove as EventListener);
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-10 transition-opacity duration-500"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isHovering ? 0.6 : 0,
        width: '400px',
        height: '400px',
        background: `
          radial-gradient(circle,
            rgba(255, 245, 220, 0.4) 0%,
            rgba(255, 235, 180, 0.25) 20%,
            rgba(255, 215, 0, 0.15) 40%,
            transparent 70%
          )
        `,
        filter: 'blur(30px)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.5s ease-out',
      }}
    />
  );
}
