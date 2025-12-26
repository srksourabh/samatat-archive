'use client';

import { useSyncExternalStore, useCallback, useEffect, useState } from 'react';

export type Language = 'en' | 'bn' | 'hi';

const languageLabels: Record<Language, { short: string; full: string }> = {
  en: { short: 'EN', full: 'English' },
  bn: { short: 'বাং', full: 'বাংলা' },
  hi: { short: 'हि', full: 'हिंदी' },
};

// External store for language state management
const createLanguageStore = () => {
  let currentLanguage: Language = 'en';
  const listeners = new Set<() => void>();

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    getSnapshot(): Language {
      return currentLanguage;
    },

    getServerSnapshot(): Language {
      return 'en';
    },

    setLanguage(lang: Language) {
      if (currentLanguage !== lang) {
        currentLanguage = lang;
        if (typeof window !== 'undefined') {
          localStorage.setItem('language', lang);
        }
        listeners.forEach(listener => listener());
      }
    },

    initialize() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('language') as Language | null;
        if (saved && ['en', 'bn', 'hi'].includes(saved)) {
          currentLanguage = saved;
          listeners.forEach(listener => listener());
        }
      }
    }
  };
};

const languageStore = createLanguageStore();

export function LanguageSwitcher() {
  const subscribe = useCallback((cb: () => void) => languageStore.subscribe(cb), []);
  const getSnapshot = useCallback(() => languageStore.getSnapshot(), []);
  const getServerSnapshot = useCallback(() => languageStore.getServerSnapshot(), []);

  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    languageStore.initialize();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const changeLanguage = (lang: Language) => {
    languageStore.setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-300 hover:text-white transition rounded border border-white/20 hover:border-white/40"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span>{languageLabels[language].short}</span>
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-white/20 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]">
          {(Object.keys(languageLabels) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full px-3 py-2 text-left text-sm transition flex items-center justify-between ${
                language === lang
                  ? 'bg-white/10 text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{languageLabels[lang].full}</span>
              {language === lang && (
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function useLanguage(): Language {
  const subscribe = useCallback((cb: () => void) => languageStore.subscribe(cb), []);
  const getSnapshot = useCallback(() => languageStore.getSnapshot(), []);
  const getServerSnapshot = useCallback(() => languageStore.getServerSnapshot(), []);

  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Initialize from localStorage on mount
  useEffect(() => {
    languageStore.initialize();
  }, []);

  return language;
}
