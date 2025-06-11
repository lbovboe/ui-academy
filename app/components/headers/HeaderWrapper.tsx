'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBar';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const hideHeaderPaths = ['/', '/signup/', '/terms-of-service', '/privacy-policy']; // Add any paths where footer should be hidden

  if (!pathname || hideHeaderPaths.includes(pathname)) {
    return null;
  }
  return (
    <div className="mt-auto">
      <Navbar />
    </div>
  );
}
