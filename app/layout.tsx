import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/app/context/ThemeContext';
import './globals.css';

import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/headers/NavBar';
import PWARegister from '@/app/pwa';
// Define viewport for the application
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Theme color will be handled by ThemeMetadata component
};

// Define metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL('https://novel-xiaoshuo.vercel.app/'),
  title: '最爱小说网',
  description: '最爱小说网',
  manifest: '/manifest.json',
  applicationName: '最爱小说网',
  appleWebApp: {
    capable: true,
    // Status bar style will be managed dynamically by ThemeMetadata
    title: '最爱小说网',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: '最爱小说网',
    siteName: '最爱小说网',
    description: '最爱小说网提供免费全本小说给大众网友, 资源来源各个网友上传',
    url: 'https://novel-xiaoshuo.vercel.app/',
    locale: 'zh_CN',
    images: [
      {
        url: '/icons/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ace Coding Academy',
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" , type :"image/x-icon"},
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
      */}
      <body className="from-light-background-gradient-start via-light-background-gradient-via to-light-background-gradient-end dark:from-dark-background-gradient-start dark:via-dark-background-gradient-via dark:to-dark-background-gradient-end flex min-h-screen flex-col bg-linear-to-br">
        <ThemeProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <PWARegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
