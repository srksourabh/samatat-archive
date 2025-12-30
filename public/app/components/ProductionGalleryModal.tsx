'use client';

import { useState, useEffect, useCallback } from 'react';
import { Production } from '../../lib/productionsData';
import { useLanguage } from './LanguageSwitcher';

interface ProductionGalleryModalProps {
  production: Production;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductionGalleryModal({ production, isOpen, onClose }: ProductionGalleryModalProps) {
  const lang = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [, setIsLoading] = useState(true);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Resetting state on modal open is intentional
      setSelectedPhotoIndex(null);
      setLoadedImages(new Set());
      setIsLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      if (selectedPhotoIndex !== null) {
        setSelectedPhotoIndex(null);
      } else {
        onClose();
      }
    } else if (selectedPhotoIndex !== null) {
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex(prev =>
          prev !== null ? (prev - 1 + production.photos.length) % production.photos.length : null
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex(prev =>
          prev !== null ? (prev + 1) % production.photos.length : null
        );
      }
    }
  }, [isOpen, selectedPhotoIndex, production.photos.length, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Mark image as loaded
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
    if (index === 0) setIsLoading(false);
  };

  if (!isOpen) return null;

  const title = lang === 'bn' && production.titleBn ? production.titleBn :
                lang === 'hi' && production.titleHi ? production.titleHi :
                production.title;

  return (
    <>
      {/* Main Gallery Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-4 md:p-6 border-b border-white/10">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {production.category[lang]}
                </span>
                {production.year && (
                  <span className="text-light-gray/60 text-sm">{production.year}</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white truncate">
                {title}
              </h2>
              <p className="text-light-gray/70 text-sm mt-1">
                {production.photoCount} photos
                {production.youtubeVideoId && ' • 1 video'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-white/10 transition-colors group"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6 text-light-gray group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Description */}
            <p className="text-light-gray/80 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              {production.description[lang]}
            </p>

            {/* Playwright/Director Info */}
            {(production.playwright || production.director) && (
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                {production.playwright && (
                  <div>
                    <span className="text-light-gray/50">Playwright: </span>
                    <span className="text-gold">{production.playwright}</span>
                  </div>
                )}
                {production.director && (
                  <div>
                    <span className="text-light-gray/50">Director: </span>
                    <span className="text-gold">{production.director}</span>
                  </div>
                )}
              </div>
            )}

            {/* Video Section Placeholder */}
            {production.youtubeVideoId ? (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch Video
                </h3>
                <div className="aspect-video max-w-2xl rounded-xl overflow-hidden bg-black/50">
                  <iframe
                    src={`https://www.youtube.com/embed/${production.youtubeVideoId}`}
                    title={`${production.title} - Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10 max-w-md">
                <div className="flex items-center gap-3 text-light-gray/60">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-white/80">Video Coming Soon</p>
                    <p className="text-xs">Stay tuned for performance recordings</p>
                  </div>
                </div>
              </div>
            )}

            {/* Photo Grid */}
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Photo Gallery
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
              {production.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="relative aspect-square overflow-hidden rounded-lg bg-white/5 group cursor-zoom-in"
                >
                  {/* Skeleton loader */}
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  )}
                  <img
                    src={photo}
                    alt={`${production.title} - Photo ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98">
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Photo counter */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
            {selectedPhotoIndex + 1} / {production.photos.length}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => setSelectedPhotoIndex(prev =>
              prev !== null ? (prev - 1 + production.photos.length) % production.photos.length : null
            )}
            className="absolute left-2 md:left-4 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setSelectedPhotoIndex(prev =>
              prev !== null ? (prev + 1) % production.photos.length : null
            )}
            className="absolute right-2 md:right-4 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main image */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-16">
            <img
              src={production.photos[selectedPhotoIndex]}
              alt={`${production.title} - Photo ${selectedPhotoIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-1 md:gap-2 overflow-x-auto pb-2 justify-center">
              {production.photos.slice(
                Math.max(0, selectedPhotoIndex - 4),
                Math.min(production.photos.length, selectedPhotoIndex + 5)
              ).map((photo, idx) => {
                const actualIndex = Math.max(0, selectedPhotoIndex - 4) + idx;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setSelectedPhotoIndex(actualIndex)}
                    className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden transition-all ${
                      actualIndex === selectedPhotoIndex
                        ? 'ring-2 ring-gold scale-110'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`Thumbnail ${actualIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Click anywhere to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedPhotoIndex(null)}
          />
        </div>
      )}
    </>
  );
}
