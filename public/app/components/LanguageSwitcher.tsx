'use client';

import { useState, useEffect } from 'react';

export type Language = 'en' | 'bn' | 'hi';

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          language === 'en'
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('bn')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          language === 'bn'
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        বাংলা
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          language === 'hi'
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved) setLanguage(saved);

    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
}
