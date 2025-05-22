import { Metadata } from 'next';
import ComponentsPageClient from '@/app/components/docs/client-pages/ComponentsPageClient';

// Type definitions
export type DocItem = { 
  description: React.ReactNode; 
  codeBlock?: React.ReactNode 
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
    themeManagement: {
      title: { en: string; zh: string };
      description: { en: string; zh: string };
      items: { en: DocItem[]; zh: DocItem[] };
    };
    headerComponents: {
      title: { en: string; zh: string };
      description: { en: string; zh: string };
    };
    bookComponents: {
      title: { en: string; zh: string };
      description: { en: string; zh: string };
      items: { en: DocItem[]; zh: DocItem[] };
    };
    animationComponents: {
      title: { en: string; zh: string };
      description: { en: string; zh: string };
    };
    toolsComponents: {
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
    zh: 'UI 组件'
  },
  description: {
    en: 'This page documents the main UI components used in Novel Xiaoshuo.',
    zh: '本页面记录了 最爱小说网中使用的主要 UI 组件。'
  },
  sections: {
    componentCategories: {
      title: {
        en: 'Component Categories',
        zh: '组件类别'
      },
      description: {
        en: 'The application is built with several component categories:',
        zh: '应用程序由以下几类组件构成：'
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
        ]
      },
    },
    themeManagement: {
      title: {
        en: 'Theme Management',
        zh: '主题管理'
      },
      description: {
        en: 'Novel Xiaoshuo includes a theme system with components like:',
        zh: '最爱小说网包含带有以下组件的主题系统：'
      },
      items: {
        en: [
          {
            description: (
              <>
                <strong>ClientThemeWrapper</strong>: Manages theme on the client-side
              </>
            ),
          },
          {
            description: (
              <>
                <strong>ThemeMetadata</strong>: Handles theme-related metadata
              </>
            ),
          },
        ],
        zh: [
          {
            description: (
              <>
                <strong>客户端主题包装器</strong>: 管理客户端主题
              </>
            ),
          },
          {
            description: (
              <>
                <strong>主题元数据</strong>: 处理主题相关的元数据
              </>
            ),
          },
        ]
      },
    },
    headerComponents: {
      title: {
        en: 'Header Components',
        zh: '页眉组件'
      },
      description: {
        en: 'Header components handle navigation and app-wide controls.',
        zh: '页眉组件处理导航和应用范围的控制。'
      },
    },
    bookComponents: {
      title: {
        en: 'Book Components',
        zh: '书籍组件'
      },
      description: {
        en: 'Book components are specifically designed for displaying and interacting with book content, including:',
        zh: '书籍组件专门为显示和交互书籍内容而设计，包括：'
      },
      items: {
        en: [
          { description: 'Chapter navigation' },
          { description: 'Reading interface' },
          { description: 'Book metadata display' },
        ],
        zh: [
          { description: '章节导航' },
          { description: '阅读界面' },
          { description: '书籍元数据显示' },
        ]
      },
    },
    animationComponents: {
      title: {
        en: 'Animation Components',
        zh: '动画组件'
      },
      description: {
        en: 'These components provide animated UI elements for a more engaging user experience.',
        zh: '这些组件提供了动画 UI 元素，以提供更具吸引力的用户体验。'
      },
    },
    toolsComponents: {
      title: {
        en: 'Tools Components',
        zh: '工具组件'
      },
      description: {
        en: 'Tool components offer utility functions like:',
        zh: '工具组件提供以下实用功能：'
      },
      items: {
        en: [
          { description: 'Text formatting controls' },
          { description: 'Search functionality' },
          { description: 'Settings management' },
        ],
        zh: [
          { description: '文本格式化控制' },
          { description: '搜索功能' },
          { description: '设置管理' },
        ]
      },
    },
  },
};

// Metadata for SEO and static generation
export const metadata: Metadata = {
  title: 'UI Components - Novel Xiaoshuo Documentation',
  description: 'Documentation for the main UI components used in Novel Xiaoshuo application, including component categories, theme management, and interactive elements.',
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