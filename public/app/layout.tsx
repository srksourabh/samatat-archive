import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Samatat Sanskriti, Uttarpara - Theatre Archive",
  description: "26 years of theatre, culture, and community. Official archive of Samatat Sanskriti, Uttarpara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Samatat Sanskriti
              </a>

              <div className="hidden md:flex items-center gap-6">
                <a href="/about" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
                <a href="/shows" className="text-gray-700 hover:text-amber-600 font-medium">Productions</a>
                <a href="/festivals" className="text-gray-700 hover:text-amber-600 font-medium">Festival</a>
                <a href="/workshops" className="text-gray-700 hover:text-amber-600 font-medium">Workshops</a>
                <a href="/contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700">Contact</a>
                <LanguageSwitcher />
              </div>

              <button className="md:hidden text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Samatat Sanskriti</h3>
                <p className="text-sm">
                  26 years of theatre, culture, and community in Uttarpara, West Bengal.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-amber-400">About Us</a></li>
                  <li><a href="/shows" className="hover:text-amber-400">Productions</a></li>
                  <li><a href="/festivals" className="hover:text-amber-400">Festival</a></li>
                  <li><a href="/workshops" className="hover:text-amber-400">Workshops</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/archive" className="hover:text-amber-400">Digital Archive</a></li>
                  <li><a href="/impact" className="hover:text-amber-400">Impact Reports</a></li>
                  <li><a href="/statutory" className="hover:text-amber-400">Governance</a></li>
                  <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li>Uttarpara, West Bengal</li>
                  <li>contact@samatatuttarpara.org</li>
                  <li>+91 XXX XXX XXXX</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Samatat Sanskriti, Uttarpara. All rights reserved.</p>
              <p className="mt-2 text-gray-400">Established 1999 | West Bengal, India</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
