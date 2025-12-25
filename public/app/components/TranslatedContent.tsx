'use client';

import { useLanguage } from './LanguageSwitcher';
import { ReactNode } from 'react';

interface TranslationContent {
  en: string | ReactNode;
  bn: string | ReactNode;
  hi: string | ReactNode;
}

interface Props {
  content: TranslationContent;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
}

export function T({ content, as: Component = 'span', className }: Props) {
  const lang = useLanguage();
  const text = content[lang];

  return <Component className={className}>{text}</Component>;
}
