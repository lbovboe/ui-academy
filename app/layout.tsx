import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/app/context/ThemeContext';
import './globals.css';

import FooterWrapper from '@/app/components/footer/FooterWrapper';
import HeaderWrapper from '@/app/components/headers/HeaderWrapper';
import PWARegister from '@/app/pwa';
import PathBasedStyle from '@/app/components/tools/PathBasedStyle';
// Define viewport for the application
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Theme color will be handled by ThemeMetadata component
};

// Define metadata for the documentation site
export const metadata: Metadata = {
  metadataBase: new URL('https://ui-academy-docs.vercel.app/'),
  title: 'UI Academy Docs',
  description:
    'Documentation, code snippets, and live demos for UI Academy components. Copy and use UI code instantly in your projects.',
  manifest: '/manifest.json',
  applicationName: 'UI Academy Docs',
  appleWebApp: {
    capable: true,
    title: 'UI Academy Docs',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: 'UI Academy Docs',
    siteName: 'UI Academy Docs',
    description: 'Comprehensive documentation and code demos for UI Academy components. Copy, paste, and build faster.',
    url: 'https://ui-academy-docs.vercel.app/',
    locale: 'en_US',
    images: [
      {
        url: '/icons/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'UI Academy Docs',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

// Root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 
        Body classes:
        - min-h-screen: Ensures minimum height of 100vh
        - flex flex-col: Sets up vertical flexbox layout
        - Light mode gradient:
          - bg-linear-to-br: Base gradient direction
          - from-light-background-gradient-start
          - via-light-background-gradient-via
          - to-light-background-gradient-end
        - Dark mode gradient:
          - dark:from-dark-background-gradient-start
          - dark:via-dark-background-gradient-via
          - dark:to-dark-background-gradient-end
        - Consider adding a sidebar for docs navigation in the future
      */}
      <body className="from-light-background-gradient-start via-light-background-gradient-via to-light-background-gradient-end dark:from-dark-background-gradient-start dark:via-dark-background-gradient-via dark:to-dark-background-gradient-end text-light-text-primary dark:text-dark-text-primary flex min-h-screen flex-col bg-linear-to-br">
        <ThemeProvider>
          <HeaderWrapper />
          <PathBasedStyle>
            <main className="grow">{children}</main>
          </PathBasedStyle>
          <FooterWrapper />
          <PWARegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
