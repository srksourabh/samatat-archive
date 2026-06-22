'use client';

import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  quality?: number;
  fallbackSrc?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  quality = 75, 
  fallbackSrc,
  className,
  ...props 
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  // If it's a firebase storage URL, use wsrv.nl to resize and convert to WebP
  let optimizedSrc = src;
  if (!error && src && src.includes('firebasestorage.googleapis.com')) {
    const w = width ? `&w=${width}` : '';
    const q = quality ? `&q=${quality}` : '';
    optimizedSrc = `https://wsrv.nl/?url=${encodeURIComponent(src)}${w}${q}&output=webp`;
  }

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : (error ? src : optimizedSrc)}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
}
