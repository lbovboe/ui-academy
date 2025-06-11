'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocSection from '@/app/components/docs/DocSection';
import DocList from '@/app/components/docs/DocList';
import { useLanguage } from '@/app/components/docs/LanguageContext';

// Type for DocList items with optional codeBlock
type DocItem = { description: React.ReactNode; codeBlock?: React.ReactNode };

export default function ContextPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'Context' : '上下文',
    description:
      language === 'en'
        ? 'This page documents the custom React Context available in the component library.'
        : '本页面记录了组件库中可用的自定义 React 上下文。',
    sections: {
      contextCategories: {
        title: language === 'en' ? 'Available Contexts' : '可用上下文',
        description:
          language === 'en'
            ? 'Reusable React Contexts to manage global state:'
            : '可复用的 React 上下文来管理全局状态：',
        items: [
          {
            description:
              language === 'en' ? (
                <>
                  <strong>BookSettingsContext</strong>: Manages book reading settings (font size, language, auto-next,
                  etc.)
                </>
              ) : (
                <>
                  <strong>书籍设置上下文</strong>: 管理阅读设置（字体大小、语言、自动翻页等）
                </>
              ),
          },
          {
            description:
              language === 'en' ? (
                <>
                  <strong>ThemeContext</strong>: Manages light/dark theme switching
                </>
              ) : (
                <>
                  <strong>主题上下文</strong>: 管理明暗主题切换
                </>
              ),
          },
        ] as DocItem[],
      },
    },
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        <DocSection title={content.sections.contextCategories.title} delay={0}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {content.sections.contextCategories.description}
          </p>
          <DocList items={content.sections.contextCategories.items} />
        </DocSection>
      </DocLayout>
    </DocsWrapper>
  );
}
