'use client';

import { useLanguage } from './LanguageSwitcher';
import { HeroCollage } from './HeroCollage';

type MultiLangContent = {
  en: string;
  bn: string;
  hi: string;
};

type PageHeaderProps = {
  eyebrow?: string | MultiLangContent;
  title: string | MultiLangContent;
  description?: string | MultiLangContent;
  compact?: boolean; // For subpages with smaller headers
};

export function PageHeader({ eyebrow, title, description, compact = false }: PageHeaderProps) {
  const language = useLanguage();

  const getContent = (content: string | MultiLangContent): string => {
    if (typeof content === 'string') return content;
    return content[language] || content.en;
  };

  return (
    <section className={`hero relative ${compact ? 'py-20 md:py-28' : 'py-24 md:py-32'}`}>
      {/* Dynamic Collage Background */}
      <div className={`hero-collage ${compact ? 'hero-collage-compact' : ''}`}>
        <HeroCollage />
        <div className="hero-collage-overlay hero-collage-overlay-left" />
        <div className="hero-collage-overlay hero-collage-overlay-right" />
        <div className="hero-collage-overlay hero-collage-overlay-bottom" />
      </div>

      {/* Additional overlay for better text readability */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="hero-eyebrow mb-4">{getContent(eyebrow)}</p>
          )}
          <h1 className={`hero-title ${compact ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
            {getContent(title)}
          </h1>
          {description && (
            <p className="hero-subtitle mt-4 max-w-2xl">{getContent(description)}</p>
          )}
        </div>
      </div>
    </section>
  );
}
