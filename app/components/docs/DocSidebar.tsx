'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import {
  FaBook,
  FaTools,
  FaCogs,
  FaCode,
  FaTimes,
  FaBars,
  FaGlobe,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

type NavItem = {
  label: {
    en: string;
    zh: string;
  };
  href: string;
  icon: React.ReactNode;
  more?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: {
      en: 'Overview',
      zh: '概述',
    },
    href: '/docs',
    icon: <FaBook className="text-doc_icon-light dark:text-doc_icon-dark" />,
  },
  {
    label: {
      en: 'Context',
      zh: '上下文',
    },
    href: '/docs/context',
    icon: <FaCogs className="text-doc_icon-light dark:text-doc_icon-dark" />,
    more: [
      {
        label: {
          en: 'BookSettingsContext',
          zh: '书籍设置上下文',
        },
        href: '/docs/context/book-settings',
        icon: <FaCogs className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
      {
        label: {
          en: 'ThemeContext',
          zh: '主题上下文',
        },
        href: '/docs/context/theme',
        icon: <FaCogs className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
    ],
  },
  {
    label: {
      en: 'UI Components',
      zh: 'UI 组件',
    },
    href: '/docs/components',
    icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
    more: [
      {
        label: {
          en: 'Basic Buttons',
          zh: '基础按钮',
        },
        href: '/docs/components/basic-buttons',
        icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
      {
        label: {
          en: 'Animate Buttons',
          zh: '动画按钮',
        },
        href: '/docs/components/animate-buttons',
        icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
      {
        label: {
          en: 'Nav Bars',
          zh: '导航栏',
        },
        href: '/docs/components/nav-bars',
        icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
      {
        label: {
          en: 'Footers',
          zh: '页脚',
        },
        href: '/docs/components/footers',
        icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
    ],
  },
  {
    label: {
      en: 'Hooks',
      zh: '自定义 Hook',
    },
    href: '/docs/hooks',
    icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
    more: [
      {
        label: {
          en: 'useTheme',
          zh: 'useTheme',
        },
        href: '/docs/hooks/use-theme',
        icon: <FaCode className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
    ],
  },
  {
    label: {
      en: 'Utility Functions',
      zh: '工具函数',
    },
    href: '/docs/utilities',
    icon: <FaTools className="text-doc_icon-light dark:text-doc_icon-dark" />,
    more: [
      {
        label: {
          en: 'debounce',
          zh: 'debounce',
        },
        href: '/docs/utilities/debounce',
        icon: <FaTools className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
      {
        label: {
          en: 'formatDate',
          zh: 'formatDate',
        },
        href: '/docs/utilities/format-date',
        icon: <FaTools className="text-doc_icon-light dark:text-doc_icon-dark" />,
      },
    ],
  },
];

export default function DocSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  // Prevent hydration mismatch by only rendering the correct language content after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set expanded state based on pathname after mount
  useEffect(() => {
    if (!mounted) return;

    // Find if any navItem with 'more' matches the current pathname
    const parentWithMore = navItems.find(
      (item) => item.more && (item.more.some((sub) => sub.href === pathname) || item.href === pathname)
    );
    if (parentWithMore) {
      setExpanded({ [parentWithMore.href]: true });
    } else {
      setExpanded({});
    }
  }, [pathname, mounted]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Before client-side hydration, always show English content to match the server
  const docLabel = mounted ? (language === 'en' ? 'Documentation' : '文档') : 'Documentation';
  const toggleLabel = mounted ? (language === 'en' ? '中文' : 'English') : '中文';

  const toggleExpand = (href: string) => {
    setExpanded((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed right-4 bottom-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-doc_icon-light hover:bg-doc_icon-accent_light dark:bg-doc_icon-dark dark:hover:bg-doc_icon-accent_dark flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden w-64 shrink-0 md:block">
        <div className="sticky top-24 overflow-y-auto pr-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-doc_text-muted_light dark:text-doc_text-muted_dark text-sm font-semibold tracking-wider uppercase">
              {docLabel}
            </h3>
            <button
              onClick={toggleLanguage}
              className="text-doc_icon-light hover:text-doc_icon-accent_light dark:text-doc_icon-dark dark:hover:text-doc_icon-accent_dark flex items-center text-sm font-medium"
              aria-label="Toggle language"
            >
              <FaGlobe size={16} className="mr-1" />
              <span>{toggleLabel}</span>
            </button>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <div
                  className={`group flex items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-doc_bg-accent_light text-doc_text-link_light dark:bg-doc_bg-accent_dark dark:text-doc_text-link_dark'
                      : 'text-doc_text-body_light hover:bg-doc_bg-accent_light dark:text-doc_text-body_dark dark:hover:bg-doc_bg-paper_dark'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <Link href={item.href} className="flex-1">
                    {mounted ? (language === 'en' ? item.label.en : item.label.zh) : item.label.en}
                  </Link>
                  {item.more && (
                    <button
                      onClick={() => toggleExpand(item.href)}
                      className="text-doc_icon-light dark:text-doc_icon-dark ml-2 focus:outline-none"
                      aria-label={expanded[item.href] ? 'Collapse' : 'Expand'}
                    >
                      {expanded[item.href] ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                    </button>
                  )}
                </div>
                {item.more && expanded[item.href] && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.more.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          pathname === subItem.href
                            ? 'bg-doc_bg-accent_light text-doc_text-link_light dark:bg-doc_bg-accent_dark dark:text-doc_text-link_dark'
                            : 'text-doc_text-body_light hover:bg-doc_bg-accent_light dark:text-doc_text-body_dark dark:hover:bg-doc_bg-paper_dark'
                        }`}
                      >
                        <span className="mr-3">{subItem.icon}</span>
                        {mounted ? (language === 'en' ? subItem.label.en : subItem.label.zh) : subItem.label.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <m.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-doc_bg-light dark:bg-doc_bg-dark fixed inset-y-0 right-0 z-40 w-64 p-4 shadow-xl md:hidden"
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-doc_text-muted_light dark:text-doc_text-muted_dark text-sm font-semibold tracking-wider uppercase">
            {docLabel}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-doc_icon-light hover:text-doc_icon-accent_light dark:text-doc_icon-dark dark:hover:text-doc_icon-accent_dark flex items-center rounded-full p-2 text-sm font-medium"
              aria-label="Toggle language"
            >
              <FaGlobe size={16} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-doc_text-body_light hover:bg-doc_bg-accent_light dark:text-doc_text-body_dark dark:hover:bg-doc_bg-paper_dark rounded-full p-2"
              aria-label="Close menu"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <div
                className={`group flex items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-doc_bg-accent_light text-doc_text-link_light dark:bg-doc_bg-accent_dark dark:text-doc_text-link_dark'
                    : 'text-doc_text-body_light hover:bg-doc_bg-accent_light dark:text-doc_text-body_dark dark:hover:bg-doc_bg-paper_dark'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex-1">
                  {mounted ? (language === 'en' ? item.label.en : item.label.zh) : item.label.en}
                </Link>
                {item.more && (
                  <button
                    onClick={() => toggleExpand(item.href)}
                    className="text-doc_icon-light dark:text-doc_icon-dark ml-2 focus:outline-none"
                    aria-label={expanded[item.href] ? 'Collapse' : 'Expand'}
                  >
                    {expanded[item.href] ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                  </button>
                )}
              </div>
              {item.more && expanded[item.href] && (
                <div className="mt-1 ml-8 space-y-1">
                  {item.more.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                        pathname === subItem.href
                          ? 'bg-doc_bg-accent_light text-doc_text-link_light dark:bg-doc_bg-accent_dark dark:text-doc_text-link_dark'
                          : 'text-doc_text-body_light hover:bg-doc_bg-accent_light dark:text-doc_text-body_dark dark:hover:bg-doc_bg-paper_dark'
                      }`}
                    >
                      <span className="mr-3">{subItem.icon}</span>
                      {mounted ? (language === 'en' ? subItem.label.en : subItem.label.zh) : subItem.label.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </m.div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
