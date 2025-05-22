'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocSection from '@/app/components/docs/DocSection';
import DocList from '@/app/components/docs/DocList';
import { useLanguage } from '@/app/components/docs/LanguageContext';

// Type for DocList items
type DocItem = { description: React.ReactNode; codeBlock?: React.ReactNode };

export default function UtilitiesPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'Utility Functions' : '工具函数',
    description:
      language === 'en'
        ? 'This page documents the utility functions (excluding custom hooks) available in the component library, such as date conversion, debounce, and more.'
        : '本页面记录了组件库中可用的工具函数（不包括自定义 Hook），如日期转换、防抖等。',
    sections: {
      utils: {
        title: language === 'en' ? 'Utility Functions' : '工具函数',
        description:
          language === 'en'
            ? 'Reusable utility functions for common development tasks.'
            : '用于常见开发任务的可复用工具函数。',
        items: [
          {
            description:
              language === 'en' ? (
                <>
                  <strong>debounce</strong>: Debounce a function call.
                </>
              ) : (
                <>
                  <strong>debounce</strong>: 防抖函数。
                </>
              ),
          },
          {
            description:
              language === 'en' ? (
                <>
                  <strong>formatDate</strong>: Format a date string.
                </>
              ) : (
                <>
                  <strong>formatDate</strong>: 格式化日期字符串。
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
        <DocSection title={content.sections.utils.title} delay={0}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {content.sections.utils.description}
          </p>
          <DocList items={content.sections.utils.items} />
        </DocSection>
      </DocLayout>
    </DocsWrapper>
  );
}
