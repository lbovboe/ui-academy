import { Metadata } from 'next';
import ComponentsPageClient from '@/app/components/docs/client-pages/ComponentsPageClient';

// Type definitions
export type DocItem = {
  description: React.ReactNode;
  codeBlock?: React.ReactNode;
};

export type ComponentsContent = {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  sections: {
    componentCategories: {
      title: { en: string; zh: string };
      description: { en: string; zh: string };
      items: { en: DocItem[]; zh: DocItem[] };
    };
  };
};

// Static data - this will be available at build time
const componentsContent: ComponentsContent = {
  title: {
    en: 'UI Components',
    zh: 'UI 组件',
  },
  description: {
    en: 'This page documents the main UI components used in Novel Xiaoshuo.',
    zh: '本页面记录了 最爱小说网中使用的主要 UI 组件。',
  },
  sections: {
    componentCategories: {
      title: {
        en: 'Component Categories',
        zh: '组件类别',
      },
      description: {
        en: 'The application is built with several component categories:',
        zh: '应用程序由以下几类组件构成：',
      },
      items: {
        en: [
          {
            description: (
              <>
                <strong>UI Components</strong>: Generic UI elements
              </>
            ),
          },
          {
            description: (
              <>
                <strong>Headers</strong>: Navigation and header components
              </>
            ),
          },
          {
            description: (
              <>
                <strong>Book Components</strong>: Book-specific UI elements
              </>
            ),
          },
          {
            description: (
              <>
                <strong>Footer</strong>: Footer components
              </>
            ),
          },
          {
            description: (
              <>
                <strong>Animation</strong>: Animation-related components
              </>
            ),
          },
          {
            description: (
              <>
                <strong>Tools</strong>: Utility UI components
              </>
            ),
          },
        ],
        zh: [
          {
            description: (
              <>
                <strong>UI 组件</strong>: 通用 UI 元素
              </>
            ),
          },
          {
            description: (
              <>
                <strong>页眉</strong>: 导航和页头组件
              </>
            ),
          },
          {
            description: (
              <>
                <strong>书籍组件</strong>: 书籍特定的 UI 元素
              </>
            ),
          },
          {
            description: (
              <>
                <strong>页脚</strong>: 页脚组件
              </>
            ),
          },
          {
            description: (
              <>
                <strong>动画</strong>: 动画相关组件
              </>
            ),
          },
          {
            description: (
              <>
                <strong>工具</strong>: 实用工具组件
              </>
            ),
          },
        ],
      },
    },
  },
};

// Metadata for SEO and static generation
export const metadata: Metadata = {
  title: 'UI Components - Novel Xiaoshuo Documentation',
  description:
    'Documentation for the main UI components used in Novel Xiaoshuo application, including component categories, theme management, and interactive elements.',
  keywords: ['UI Components', 'React', 'Next.js', 'Documentation', 'Novel Xiaoshuo', 'Components'],
  openGraph: {
    title: 'UI Components Documentation',
    description: 'Complete guide to UI components in Novel Xiaoshuo',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'UI Components Documentation',
    description: 'Complete guide to UI components in Novel Xiaoshuo',
  },
};

// Server Component - handles static data and passes to client
export default function ComponentsPage() {
  return <ComponentsPageClient content={componentsContent} />;
}
