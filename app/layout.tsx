import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nice JSON Viewer',
  description: 'Quickly view and format your JSON in a readable way. Paste your JSON and instantly get a clean, structured result.',
  keywords: ['JSON', 'viewer', 'formatter', 'tool', 'online', 'developer'],
  openGraph: {
    title: 'Nice JSON Viewer',
    description: 'Quickly view and format your JSON in a readable way.',
    url: 'https://nice-json-viewer.vercel.app',
    siteName: 'Nice JSON Viewer',
    images: [
      {
        url: '/images/app-screenshot.png',
        width: 1280,
        height: 720,
        alt: 'Nice JSON Viewer screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nice JSON Viewer',
    description: 'Quickly view and format your JSON in a readable way.',
    images: ['/images/app-screenshot.png'],
    creator: '@yungKillaGit',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
