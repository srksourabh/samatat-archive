import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./theatre-theme.css";
import { Navigation } from "./components/Navigation";

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
  description: "A theatre collective dedicated to meaningful storytelling, cultural preservation, and community development through the performing arts. Established 1999.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />

        {children}

        {/* Footer */}
        <footer className="footer section">
          <div className="container">
            <div className="footer-grid-5">
              {/* Brand column */}
              <div className="footer-brand">
                <Link href="/" className="inline-block mb-4">
                  <img
                    src="/logo1.png"
                    alt="Samatat Sanskriti"
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="text-gray text-sm leading-relaxed mb-6 max-w-sm">
                  A community theatre organization in Uttarpara, West Bengal,
                  dedicated to meaningful storytelling and cultural preservation
                  since 1999.
                </p>
                <div className="text-sm text-gray">
                  <p>Uttarpara, Hooghly</p>
                  <p>West Bengal, India</p>
                </div>
              </div>

              {/* About */}
              <div>
                <h4 className="footer-heading">About</h4>
                <ul className="footer-links">
                  <li><Link href="/about/history">History</Link></li>
                  <li><Link href="/about/team">The Team</Link></li>
                  <li><Link href="/about/alumni">Alumni</Link></li>
                  <li><Link href="/about/president">President&apos;s Message</Link></li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="footer-heading">Programs</h4>
                <ul className="footer-links">
                  <li><Link href="/workshops">Workshops</Link></li>
                  <li><Link href="/productions">Productions</Link></li>
                  <li><Link href="/festivals">Theatre Festival</Link></li>
                  <li><Link href="/activities">Cultural Activities</Link></li>
                </ul>
              </div>

              {/* Statutory */}
              <div>
                <h4 className="footer-heading">Statutory</h4>
                <ul className="footer-links">
                  <li><Link href="/statutory/committee">Committee</Link></li>
                  <li><Link href="/statutory/reports">Annual Reports</Link></li>
                  <li><Link href="/statutory/grants">Grants & Donations</Link></li>
                  <li><Link href="/statutory/sponsors">Sponsors</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="footer-heading">Get Involved</h4>
                <ul className="footer-links">
                  <li><Link href="/contact#join">Join Us</Link></li>
                  <li><Link href="/contact#workshop">Workshops</Link></li>
                  <li><Link href="/contact#performance">Request Performance</Link></li>
                  <li><Link href="/contact#donate">Donate</Link></li>
                </ul>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Samatat Sanskriti, Uttarpara. All rights reserved.</p>
              <p>Established 1999</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
