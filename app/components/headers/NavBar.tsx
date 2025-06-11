'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Chip from '../tools/animation/Chip';
import Link from 'next/link';
import ThemeToggle from '../tools/ThemeToggle';
import Image from 'next/image';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Docs', href: '/docs' },
  { text: 'UI Components', href: '/docs/components' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (item: { text: string; href: string }) => {
    switch (item.text) {
      case 'Home':
        return pathname === '/';
      case 'Docs':
        return pathname.startsWith('/docs') && !pathname.startsWith('/docs/components');
      case 'UI Components':
        return pathname.startsWith('/docs/components');
      default:
        return false;
    }
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-colors duration-200 ${
        isScrolled ? 'bg-light-paper/90 dark:bg-dark-paper/90' : 'bg-light-paper/10 dark:bg-dark-paper/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Image src="/icons/icon-72x72.png" alt="UI Academy Docs Logo" width={40} height={40} />
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.text}>
              <Chip text={item.text} selected={isActive(item)} />
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
