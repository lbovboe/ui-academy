import { Metadata } from 'next';
import DocsPageClient from '@/app/components/docs/client-pages/DocsPageClient';

// Static data for the documentation sections
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
    icon: 'FaCode',
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
    icon: 'FaCogs',
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
    icon: 'FaTools',
  },
];

// Metadata for SEO and static generation
export const metadata: Metadata = {
  title: 'Documentation - React Component Library',
  description: 'Comprehensive documentation for a reusable React component library with pre-built UI components, context providers, and utility functions. Fully typed with TypeScript and styled with Tailwind CSS.',
  keywords: ['React', 'TypeScript', 'Components', 'Documentation', 'UI Library'],
  openGraph: {
    title: 'Documentation - React Component Library',
    description: 'Comprehensive documentation for a reusable React component library',
    type: 'website',
  },
};

// Static content for different languages
const pageContent = {
  en: {
    title: 'Documentation',
    description: 'This site provides comprehensive documentation for a reusable React component library, including pre-built UI components, context providers, and utility functions. All resources are fully typed with TypeScript and styled with Tailwind CSS to accelerate development and ensure consistency across projects.',
    keyFeatures: 'Key Features',
    docSections: 'Documentation Sections',
  },
  zh: {
    title: '文档',
    description: '本网站为可复用的 React 组件库提供全面文档，包括预构建的 UI 组件、上下文提供者和工具函数。所有资源均采用 TypeScript 完全类型化，并使用 Tailwind CSS 样式，助力项目开发提速并保持一致性。',
    keyFeatures: '主要功能',
    docSections: '文档部分',
  },
};

// Server Component - Static Generation
export default function DocsPage() {
  return (
    <DocsPageClient 
      sections={sections}
      pageContent={pageContent}
    />
  );
}