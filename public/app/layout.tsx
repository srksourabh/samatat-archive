import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theatre-theme.css";
import { ClientLayout } from "./components/ClientLayout";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

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
        <ClientLayout>
          <Navigation />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
