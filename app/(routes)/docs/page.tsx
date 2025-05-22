'use client';

import { FaBook, FaTools, FaCogs, FaCode } from 'react-icons/fa';
import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocFeatureCard from '@/app/components/docs/DocFeatureCard';
import KeyFeatures from '@/app/components/docs/KeyFeatures';
import { useLanguage } from '@/app/components/docs/LanguageContext';

// Documentation sections with both English and Chinese content
const sections = [
  {
    title: {
      en: 'UI Components',
      zh: 'UI 组件',
    },
    description: {
      en: 'Documentation of UI components',
      zh: 'UI 组件文档',
    },
    href: '/docs/components',
    icon: FaCode,
  },
  {
    title: {
      en: 'Context',
      zh: '上下文',
    },
    description: {
      en: 'Documentation of context providers and usage',
      zh: '上下文提供者和用法文档',
    },
    href: '/docs/context',
    icon: FaCogs,
  },
];

export default function DocsPage() {
  const { language } = useLanguage();

  // Page content based on selected language
  const content = {
    title: language === 'en' ? 'Documentation' : '文档',
    description:
      language === 'en'
        ? 'Novel Xiaoshuo is a web application for scraping, formatting, and reading Chinese novels. It provides a clean interface for reading novels and supports various features like text formatting, chapter navigation, and more.'
        : '最爱小说网是一个用于抓取、格式化和阅读中文小说的网络应用程序。它提供了一个清晰的阅读界面，并支持各种功能，如文本格式化、章节导航等。',
    keyFeatures: language === 'en' ? 'Key Features' : '主要功能',
    docSections: language === 'en' ? 'Documentation Sections' : '文档部分',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description} showBackLink={false}>
        <h2
          id="documentation-sections"
          className="text-doc_text-heading_light dark:text-doc_text-heading_dark mb-6 text-2xl font-bold"
        >
          {content.docSections}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <DocFeatureCard
              key={section.title[language]}
              title={section.title[language]}
              description={section.description[language]}
              href={section.href}
              icon={section.icon}
              delay={index}
            />
          ))}
        </div>
      </DocLayout>
    </DocsWrapper>
  );
}
