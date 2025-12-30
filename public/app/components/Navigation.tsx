'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LanguageSwitcher, useTranslation } from './LanguageSwitcher';

type NavItemKey = {
  labelKey: string;
  href: string;
  children?: { labelKey: string; href: string }[];
};

const navItemKeys: NavItemKey[] = [
  {
    labelKey: 'nav.about',
    href: '/about',
    children: [
      { labelKey: 'nav.about.history', href: '/about/history' },
      { labelKey: 'nav.about.vision', href: '/about/vision' },
      { labelKey: 'nav.about.team', href: '/about/team' },
      { labelKey: 'nav.about.alumni', href: '/about/alumni' },
      { labelKey: 'nav.about.president', href: '/about/president' },
      { labelKey: 'nav.about.secretary', href: '/about/secretary' },
      { labelKey: 'nav.about.friends', href: '/about/friends' },
    ],
  },
  {
    labelKey: 'nav.workshops',
    href: '/workshops',
  },
  {
    labelKey: 'nav.productions',
    href: '/productions',
  },
  {
    labelKey: 'nav.festival',
    href: '/festivals',
  },
  {
    labelKey: 'nav.activities',
    href: '/activities',
  },
  {
    labelKey: 'nav.statutory',
    href: '/statutory',
    children: [
      { labelKey: 'nav.statutory.committee', href: '/statutory/committee' },
      { labelKey: 'nav.statutory.agm', href: '/statutory/agm' },
      { labelKey: 'nav.statutory.previous', href: '/statutory/previous' },
      { labelKey: 'nav.statutory.ngo', href: '/statutory/ngo' },
      { labelKey: 'nav.statutory.reports', href: '/statutory/reports' },
      { labelKey: 'nav.statutory.grants', href: '/statutory/grants' },
      { labelKey: 'nav.statutory.sponsors', href: '/statutory/sponsors' },
    ],
  },
];

export function Navigation() {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't close if clicking within any nav-dropdown container
      if (target.closest('.nav-dropdown')) {
        return;
      }
      setOpenDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Helper to get label - returns the key itself if it's a year (number)
  const getLabel = (key: string) => {
    if (/^\d{4}$/.test(key)) return key; // Return year as-is
    return t(key);
  };

  return (
    <nav className="nav-primary sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo1.png"
              alt="Samatat Sanskriti"
              style={{ height: '36px', width: 'auto', maxHeight: '36px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItemKeys.map((item) => (
              <div key={item.labelKey} className="nav-dropdown relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.labelKey ? null : item.labelKey)}
                      className="nav-link nav-dropdown-trigger flex items-center gap-1 px-3 py-2"
                    >
                      {getLabel(item.labelKey)}
                      <svg
                        className={`w-3 h-3 transition-transform ${openDropdown === item.labelKey ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.labelKey && (
                      <div className="absolute left-0 top-full mt-1 bg-gray-900 border border-white/20 rounded-md shadow-lg overflow-hidden z-50 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {getLabel(child.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="nav-link px-3 py-2">
                    {getLabel(item.labelKey)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="btn btn-primary text-sm py-2 px-4">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            {navItemKeys.map((item) => (
              <div key={item.labelKey} className="border-b border-white/5 last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.labelKey ? null : item.labelKey)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white"
                    >
                      {getLabel(item.labelKey)}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileSubmenu === item.labelKey ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileSubmenu === item.labelKey && (
                      <div className="bg-black/30 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-8 py-2 text-sm text-gray-400 hover:text-white"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileSubmenu(null);
                            }}
                          >
                            {getLabel(child.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getLabel(item.labelKey)}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="btn btn-primary text-sm py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
