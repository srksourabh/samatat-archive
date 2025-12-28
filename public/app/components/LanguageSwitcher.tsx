'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en, bn, hi } from '../lib/locales';

export type Language = 'en' | 'bn' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && ['en', 'bn', 'hi'].includes(savedLang)) {
        return savedLang;
      }
    }
    return 'en';
  });

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const locales: Record<Language, Record<string, string>> = { en, bn, hi };

  const t = (key: string): string => {
    return locales[lang][key] || locales['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Language {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return 'en';
  }
  return context.lang;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

const languageNames: Record<Language, string> = {
  en: 'EN',
  bn: 'বাং',
  hi: 'हि',
};

const languageFullNames: Record<Language, string> = {
  en: 'English',
  bn: 'বাংলা',
  hi: 'हिंदी',
};

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { lang, setLang } = context;

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-md hover:border-gray-500 transition-colors"
        aria-label="Select language"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span>{languageNames[lang]}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]">
            {(['en', 'bn', 'hi'] as Language[]).map((langOption) => (
              <button
                key={langOption}
                onClick={() => handleLanguageChange(langOption)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  lang === langOption
                    ? 'bg-amber-600/20 text-amber-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {languageFullNames[langOption]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
