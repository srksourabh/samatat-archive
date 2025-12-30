'use client';

import { useState, useEffect, useCallback } from 'react';

interface MosaicCell {
  id: number;
  visible: boolean;
  imageIndex: number;
  delay: number;
}

// Placeholder images - these would be replaced with actual production photos from the CMS
const placeholderImages = [
  '/placeholder-1.jpg',
  '/placeholder-2.jpg',
  '/placeholder-3.jpg',
  '/placeholder-4.jpg',
  '/placeholder-5.jpg',
  '/placeholder-6.jpg',
  '/placeholder-7.jpg',
  '/placeholder-8.jpg',
];

// Generate gradient colors for cells without images
const gradientColors = [
  'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  'linear-gradient(135deg, #1f1f1f 0%, #252525 100%)',
  'linear-gradient(135deg, #181818 0%, #222222 100%)',
  'linear-gradient(135deg, #1c1c1c 0%, #282828 100%)',
];

export function MosaicBackground() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [gridCells, setGridCells] = useState<MosaicCell[]>([]);

  // Generate mosaic grid cells on mount (client-side only to avoid hydration mismatch)
  useEffect(() => {
    const cols = 20;
    const rows = 12;
    const cells: MosaicCell[] = [];

    for (let i = 0; i < cols * rows; i++) {
      cells.push({
        id: i,
        visible: Math.random() > 0.6, // 40% of cells will have visible images
        imageIndex: Math.floor(Math.random() * placeholderImages.length),
        delay: Math.random() * 5, // Random delay for animation stagger
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Client-side initialization
    setGridCells(cells);
     
    setMounted(true);
  }, []);

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredCell(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCell(null);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mosaic-background" aria-hidden="true">
      <div className="mosaic-grid">
        {gridCells.map((cell) => {
          const isHovered = hoveredCell === cell.id;
          const isNearHovered = hoveredCell !== null &&
            Math.abs((hoveredCell % 20) - (cell.id % 20)) <= 1 &&
            Math.abs(Math.floor(hoveredCell / 20) - Math.floor(cell.id / 20)) <= 1;

          return (
            <div
              key={cell.id}
              className={`mosaic-cell ${isHovered ? 'mosaic-cell-hovered' : ''} ${isNearHovered && !isHovered ? 'mosaic-cell-near' : ''}`}
              onMouseEnter={() => handleMouseEnter(cell.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                animationDelay: `${cell.delay}s`,
              }}
            >
              {cell.visible ? (
                <div
                  className="mosaic-cell-image"
                  style={{
                    background: gradientColors[cell.imageIndex % gradientColors.length],
                    opacity: isHovered ? 0.8 : isNearHovered ? 0.3 : 0.1,
                  }}
                />
              ) : (
                <div
                  className="mosaic-cell-empty"
                  style={{
                    opacity: isHovered ? 0.2 : 0.05,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Gradient overlays for content readability */}
      <div className="mosaic-overlay-center" />
    </div>
  );
}

// Optimized version that uses CSS-only animation for better performance
export function MosaicBackgroundCSS() {
  return (
    <div className="mosaic-background-css" aria-hidden="true">
      <div className="mosaic-pattern" />
      <div className="mosaic-overlay-center" />
    </div>
  );
}
