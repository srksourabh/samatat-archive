import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theatre-theme.css";
import { ClientLayout } from "./components/ClientLayout";
import { Navigation } from "./components/Navigation";
import { NewsTicker } from "./components/NewsTicker";
import { Footer } from "./components/Footer";
import { MosaicBackgroundCSS } from "./components/MosaicBackground";

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
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MosaicBackgroundCSS />
        <ClientLayout>
          <Navigation />
          <NewsTicker />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
