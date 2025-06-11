'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooterPaths = ['/', '/signup/', '/terms-of-service', '/privacy-policy']; // Add any paths where footer should be hidden

  if (!pathname || hideFooterPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="mt-auto">
      <Footer />
    </div>
  );
}
