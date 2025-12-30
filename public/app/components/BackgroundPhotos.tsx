'use client';

import { useEffect, useState } from 'react';

// Curated selection of production thumbnails for backgrounds
// Using already-optimized thumbnails (400x400, ~15-20KB each)
const backgroundPhotos = [
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8391.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9073.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1111.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20712.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture-35.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5358.jpg',
];

interface BackgroundPhotosProps {
  variant?: 'corner' | 'full' | 'scattered' | 'side';
  opacity?: number;
  position?: 'left' | 'right' | 'both';
}

export function BackgroundPhotos({
  variant = 'corner',
  opacity = 0.15,
  position = 'both'
}: BackgroundPhotosProps) {
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [opacityMultipliers, setOpacityMultipliers] = useState<number[]>([]);

  // Initialize random values on client-side only to avoid hydration mismatch
  useEffect(() => {
    const shuffled = [...backgroundPhotos].sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Client-side initialization
    setPhotos(shuffled.slice(0, 4));
     
    setOpacityMultipliers([0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4]);
     
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  if (variant === 'corner') {
    return (
      <div className="background-photos-container">
        {position !== 'right' && (
          <div
            className="background-photo background-photo-tl"
            style={{
              backgroundImage: `url(${photos[0]})`,
              opacity
            }}
          />
        )}
        {position !== 'left' && (
          <div
            className="background-photo background-photo-tr"
            style={{
              backgroundImage: `url(${photos[1]})`,
              opacity
            }}
          />
        )}
        {position !== 'right' && (
          <div
            className="background-photo background-photo-bl"
            style={{
              backgroundImage: `url(${photos[2]})`,
              opacity
            }}
          />
        )}
        {position !== 'left' && (
          <div
            className="background-photo background-photo-br"
            style={{
              backgroundImage: `url(${photos[3]})`,
              opacity
            }}
          />
        )}
      </div>
    );
  }

  if (variant === 'side') {
    return (
      <div className="background-photos-container">
        <div
          className={`background-photo background-photo-side-${position}`}
          style={{
            backgroundImage: `url(${photos[0]})`,
            opacity
          }}
        />
      </div>
    );
  }

  if (variant === 'scattered') {
    return (
      <div className="background-photos-container">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`background-photo background-photo-scattered background-photo-scattered-${index + 1}`}
            style={{
              backgroundImage: `url(${photo})`,
              opacity: opacity * (opacityMultipliers[index] || 1)
            }}
          />
        ))}
      </div>
    );
  }

  // Full background
  return (
    <div className="background-photos-container">
      <div
        className="background-photo background-photo-full"
        style={{
          backgroundImage: `url(${photos[0]})`,
          opacity
        }}
      />
    </div>
  );
}

// Corner accent photos - smaller decorative images
export function CornerAccent({
  position,
  photoIndex = 0
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  photoIndex?: number;
}) {
  const photo = backgroundPhotos[photoIndex % backgroundPhotos.length];

  return (
    <div
      className={`corner-accent corner-accent-${position}`}
      style={{ backgroundImage: `url(${photo})` }}
    />
  );
}
