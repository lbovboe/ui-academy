'use client';
import { useState, useEffect } from 'react';
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
  const [selected, setSelected] = useState(navItems[0].text);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For docs, we don't need to track selected nav item
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
              <Chip text={item.text} selected={selected === item.text} onClick={() => setSelected(item.text)} />
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
