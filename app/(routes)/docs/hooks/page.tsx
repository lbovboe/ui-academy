'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocSection from '@/app/components/docs/DocSection';
import DocList from '@/app/components/docs/DocList';
import { useLanguage } from '@/app/components/docs/LanguageContext';

// Type for DocList items
type DocItem = { description: React.ReactNode; codeBlock?: React.ReactNode };

export default function HooksPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'Hooks' : '自定义 Hook',
    description:
      language === 'en'
        ? 'This page documents the custom React hooks available in the component library.'
        : '本页面记录了组件库中可用的自定义 React Hook。',
    sections: {
      hooks: {
        title: language === 'en' ? 'Available Hooks' : '可用 Hook',
        description:
          language === 'en' ? 'Reusable hooks for state, theme, and more.' : '用于状态、主题等的可复用 Hook。',
        items: [
          {
            description:
              language === 'en' ? (
                <>
                  <strong>useTheme</strong>: Access and manage theme state.
                </>
              ) : (
                <>
                  <strong>useTheme</strong>: 访问和管理主题状态。
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
        <DocSection title={content.sections.hooks.title} delay={0}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {content.sections.hooks.description}
          </p>
          <DocList items={content.sections.hooks.items} />
        </DocSection>
      </DocLayout>
    </DocsWrapper>
  );
}
