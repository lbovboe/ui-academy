'use client';

import { FaBook, FaTools, FaCogs, FaCode } from 'react-icons/fa';
import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocFeatureCard from '@/app/components/docs/DocFeatureCard';
import { useLanguage } from '@/app/components/docs/LanguageContext';

// Documentation sections with both English and Chinese content
const sections = [
  {
    title: {
      en: 'UI Components',
      zh: 'UI 组件',
    },
    description: {
      en: 'Pre-built, customizable React components with usage examples and code snippets.',
      zh: '预构建的可自定义 React 组件，包含用法示例和代码片段。',
    },
    href: '/docs/components',
    icon: FaCode,
  },
  {
    title: {
      en: 'Context Providers',
      zh: '上下文提供者',
    },
    description: {
      en: 'Ready-to-use React context providers for common application needs, fully typed with TypeScript.',
      zh: '用于常见应用需求的可直接使用的 React 上下文提供者，完全使用 TypeScript 类型。',
    },
    href: '/docs/context',
    icon: FaCogs,
  },
  {
    title: {
      en: 'Utility Functions',
      zh: '工具函数',
    },
    description: {
      en: 'Helper functions and custom hooks for common development tasks, fully typed and reusable.',
      zh: '用于常见开发任务的辅助函数和自定义 Hook，完全类型化且可复用。',
    },
    href: '/docs/utilities',
    icon: FaTools,
  },
];

export default function DocsPage() {
  const { language } = useLanguage();

  // Page content based on selected language
  const content = {
    title: language === 'en' ? 'Documentation' : '文档',
    description:
      language === 'en'
        ? 'This site provides comprehensive documentation for a reusable React component library, including pre-built UI components, context providers, and utility functions. All resources are fully typed with TypeScript and styled with Tailwind CSS to accelerate development and ensure consistency across projects.'
        : '本网站为可复用的 React 组件库提供全面文档，包括预构建的 UI 组件、上下文提供者和工具函数。所有资源均采用 TypeScript 完全类型化，并使用 Tailwind CSS 样式，助力项目开发提速并保持一致性。',
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
