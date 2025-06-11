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
    en: 'This page documents the custom React components available in the component library.',
    zh: '本页面记录了组件库中可用的自定义 React 组件。',
  },
  sections: {
    componentCategories: {
      title: {
        en: 'Available Components',
        zh: '可用组件',
      },
      description: {
        en: 'Reusable React components for common UI patterns:',
        zh: '可复用的 React 组件用于常见 UI 模式：',
      },
      items: {
        en: [
          {
            description: (
              <>
                <strong>Basic Buttons</strong>: Generic Button Components
              </>
            ),
          },
        ],
        zh: [
          {
            description: (
              <>
                <strong>基础按钮</strong>: 通用按钮组件
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
  title: 'UI Components - UI-Academy Documentation',
  description:
    'Documentation for the main UI components used in UI-Academy application, including component categories, theme management, and interactive elements.',
  keywords: ['UI Components', 'React', 'Next.js', 'Documentation', 'UI-Academy', 'Components'],
  openGraph: {
    title: 'UI Components Documentation',
    description: 'Complete guide to UI components in UI-Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'UI Components Documentation',
    description: 'Complete guide to UI components in UI-Academy',
  },
};

// Server Component - handles static data and passes to client
export default function ComponentsPage() {
  return <ComponentsPageClient content={componentsContent} />;
}
