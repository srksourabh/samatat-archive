'use client';

import { useSyncExternalStore, useCallback, useEffect } from 'react';

export type Language = 'en' | 'bn' | 'hi';

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

  // Initialize from localStorage on mount
  useEffect(() => {
    languageStore.initialize();
  }, []);

  const changeLanguage = (lang: Language) => {
    languageStore.setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-md p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2.5 py-1 rounded text-xs font-medium transition ${
          language === 'en'
            ? 'bg-white text-gray-900'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('bn')}
        className={`px-2.5 py-1 rounded text-xs font-medium transition ${
          language === 'bn'
            ? 'bg-white text-gray-900'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className={`px-2.5 py-1 rounded text-xs font-medium transition ${
          language === 'hi'
            ? 'bg-white text-gray-900'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        हि
      </button>
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
