'use client';

import { useState, useEffect, useCallback } from 'react';

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

interface MosaicTile {
  id: number;
  imageIndex: number;
  opacity: number;
  targetOpacity: number;
}

export function FestivalMosaic() {
  const [tiles, setTiles] = useState<MosaicTile[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize tiles
  useEffect(() => {
    setMounted(true);
    const initialTiles: MosaicTile[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      imageIndex: i % festivalImages.length,
      opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
      targetOpacity: Math.random() * 0.3 + 0.1,
    }));
    setTiles(initialTiles);
  }, []);

  // Animate tiles - fade in/out effect
  const animateTile = useCallback(() => {
    setTiles(prevTiles => {
      if (prevTiles.length === 0) return prevTiles;

      // Pick a random tile to animate
      const tileIndex = Math.floor(Math.random() * prevTiles.length);
      const newTiles = [...prevTiles];
      const tile = { ...newTiles[tileIndex] };

      // Randomly decide to fade in or out
      const shouldFadeIn = Math.random() > 0.5;
      tile.targetOpacity = shouldFadeIn
        ? Math.random() * 0.4 + 0.2  // 0.2 to 0.6 for visible
        : Math.random() * 0.15 + 0.05; // 0.05 to 0.2 for dim

      // Sometimes change the image
      if (Math.random() > 0.7) {
        tile.imageIndex = Math.floor(Math.random() * festivalImages.length);
      }

      newTiles[tileIndex] = tile;
      return newTiles;
    });
  }, []);

  // Smooth opacity transitions
  useEffect(() => {
    if (!mounted) return;

    const transitionInterval = setInterval(() => {
      setTiles(prevTiles =>
        prevTiles.map(tile => ({
          ...tile,
          opacity: tile.opacity + (tile.targetOpacity - tile.opacity) * 0.1,
        }))
      );
    }, 100);

    return () => clearInterval(transitionInterval);
  }, [mounted]);

  // Trigger random animations
  useEffect(() => {
    if (!mounted) return;

    const animateInterval = setInterval(animateTile, 2000);
    return () => clearInterval(animateInterval);
  }, [mounted, animateTile]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/90 via-[var(--color-black)]/80 to-[var(--color-black)]/95 z-10" />

      {/* Mosaic grid */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 p-2">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
            style={{
              opacity: tile.opacity,
              transition: 'opacity 2s ease-in-out',
            }}
          >
            <img
              src={festivalImages[tile.imageIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] blur-[1px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Additional vignette effect */}
      <div className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--color-black) 100%)',
          opacity: 0.7,
        }}
      />
    </div>
  );
}
