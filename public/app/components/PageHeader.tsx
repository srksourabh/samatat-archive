'use client';

import { useLanguage } from './LanguageSwitcher';

type MultiLangContent = {
  en: string;
  bn: string;
  hi: string;
};

type PageHeaderProps = {
  eyebrow?: string | MultiLangContent;
  title: string | MultiLangContent;
  description?: string | MultiLangContent;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  const language = useLanguage();

  const getContent = (content: string | MultiLangContent): string => {
    if (typeof content === 'string') return content;
    return content[language] || content.en;
  };

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="section-eyebrow">{getContent(eyebrow)}</p>
          )}
          <h1 className="section-title text-4xl md:text-5xl">{getContent(title)}</h1>
          {description && (
            <p className="section-description mt-4">{getContent(description)}</p>
          )}
        </div>
      </div>
    </section>
  );
}
