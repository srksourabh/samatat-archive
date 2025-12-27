'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'History & Background', href: '/about/history' },
      { label: 'Vision & Mission', href: '/about/vision' },
      { label: 'The Team', href: '/about/team' },
      { label: 'Alumni Stories', href: '/about/alumni' },
      { label: "President's Message", href: '/about/president' },
      { label: "Secretary's Desk", href: '/about/secretary' },
      { label: 'Friend Organisations', href: '/about/friends' },
    ],
  },
  {
    label: 'Workshops',
    href: '/workshops',
    children: [
      { label: 'All Workshops', href: '/workshops' },
      { label: '2024', href: '/workshops/2024' },
      { label: '2023', href: '/workshops/2023' },
      { label: '2022', href: '/workshops/2022' },
      { label: '2021', href: '/workshops/2021' },
      { label: 'Archive (2000-2020)', href: '/workshops/archive' },
    ],
  },
  {
    label: 'Productions',
    href: '/productions',
    children: [
      { label: 'All Productions', href: '/productions' },
      { label: 'Current Season', href: '/productions/current' },
      { label: '2024', href: '/productions/2024' },
      { label: '2023', href: '/productions/2023' },
      { label: 'Archive', href: '/productions/archive' },
    ],
  },
  {
    label: 'Festival',
    href: '/festivals',
    children: [
      { label: 'About the Festival', href: '/festivals' },
      { label: '2024 Festival', href: '/festivals/2024' },
      { label: '2023 Festival', href: '/festivals/2023' },
      { label: 'Past Festivals', href: '/festivals/archive' },
    ],
  },
  {
    label: 'Cultural Activities',
    href: '/activities',
    children: [
      { label: 'All Activities', href: '/activities' },
      { label: 'Basanta Utsav', href: '/activities/basanta-utsav' },
      { label: 'Children Film Festival', href: '/activities/film-festival' },
      { label: 'Bhasha Dibos', href: '/activities/bhasha-dibos' },
      { label: 'Rabindra Jayanti', href: '/activities/rabindra-jayanti' },
    ],
  },
  {
    label: 'Statutory',
    href: '/statutory',
    children: [
      { label: 'Current Committee', href: '/statutory/committee' },
      { label: 'AGM', href: '/statutory/agm' },
      { label: 'Previous Committees', href: '/statutory/previous' },
      { label: 'NGO Information', href: '/statutory/ngo' },
      { label: 'Annual Reports', href: '/statutory/reports' },
      { label: 'Grants & Donations', href: '/statutory/grants' },
      { label: 'Sponsors', href: '/statutory/sponsors' },
    ],
  },
];

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
            {navItems.map((item) => (
              <div key={item.label} className="nav-dropdown relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="nav-link flex items-center gap-1 px-3 py-2"
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 bg-gray-900 border border-white/20 rounded-md shadow-lg overflow-hidden z-50 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="nav-link px-3 py-2">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="btn btn-primary text-sm py-2 px-4">
              Contact
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
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 last:border-b-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileSubmenu === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileSubmenu === item.label && (
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
                            {child.label}
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
                    {item.label}
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
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
