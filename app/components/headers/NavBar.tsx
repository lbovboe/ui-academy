'use client';
import { useState } from 'react';
import Chip from '../tools/Animation1/Chip';
import Link from 'next/link';
import ThemeToggle from '../tools/ThemeToggle';
import Image from 'next/image';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Search', href: '/search' },
  { text: 'About', href: '/about' },
  { text: 'FAQ', href: '/faq' },
];

const Navbar = () => {
  const [selected, setSelected] = useState(navItems[0].text);
  return (
    <div className="bg-light-paper/30 dark:bg-dark-paper/30 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Image src="/icons/icon-72x72.png" alt="Logo" width={40} height={40} />

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
