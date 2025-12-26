import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import "./theatre-theme.css";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samatat Sanskriti | Theatre Collective · Uttarpara",
  description: "A theatre collective dedicated to meaningful storytelling, cultural preservation, and community development through the performing arts. Established 1997.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation */}
        <nav className="nav-primary sticky top-0 z-50">
          <div className="container">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo1.png"
                  alt="Samatat Sanskriti"
                  width={140}
                  height={36}
                  className="h-7 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/shows" className="nav-link">What&apos;s On</Link>
                <Link href="/festivals" className="nav-link">Festival</Link>
                <Link href="/workshops" className="nav-link">Workshops</Link>
                <Link href="/archive" className="nav-link">Archive</Link>
              </div>

              {/* Right side */}
              <div className="hidden md:flex items-center gap-4">
                <LanguageSwitcher />
                <Link href="/contact" className="btn btn-primary text-sm py-2 px-4">
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-white p-2" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="footer section">
          <div className="container">
            <div className="footer-grid">
              {/* Brand column */}
              <div className="footer-brand">
                <Link href="/" className="inline-block mb-4">
                  <Image
                    src="/logo1.png"
                    alt="Samatat Sanskriti"
                    width={200}
                    height={54}
                    className="h-12 w-auto"
                  />
                </Link>
                <p className="text-gray text-sm leading-relaxed mb-6 max-w-sm">
                  A community theatre organization in Uttarpara, West Bengal,
                  dedicated to meaningful storytelling and cultural preservation
                  since 1997.
                </p>
                <div className="text-sm text-gray">
                  <p>Uttarpara, Hooghly</p>
                  <p>West Bengal, India</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="footer-heading">Explore</h4>
                <ul className="footer-links">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/shows">Productions</Link></li>
                  <li><Link href="/festivals">Theatre Festival</Link></li>
                  <li><Link href="/workshops">Workshops</Link></li>
                  <li><Link href="/archive">Digital Archive</Link></li>
                </ul>
              </div>

              {/* Get Involved */}
              <div>
                <h4 className="footer-heading">Get Involved</h4>
                <ul className="footer-links">
                  <li><Link href="/contact">Join Us</Link></li>
                  <li><Link href="/workshops">Training Programs</Link></li>
                  <li><Link href="/contact">Volunteer</Link></li>
                  <li><Link href="/contact">Support Our Work</Link></li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h4 className="footer-heading">Information</h4>
                <ul className="footer-links">
                  <li><Link href="/impact">Impact Reports</Link></li>
                  <li><Link href="/statutory">Governance</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Samatat Sanskriti, Uttarpara. All rights reserved.</p>
              <p>Established 1997</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
