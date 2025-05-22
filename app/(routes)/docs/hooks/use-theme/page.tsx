'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import DocCodeBlock from '@/app/components/docs/DocCodeBlock';

export default function UseThemeDocPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'useTheme' : 'useTheme',
    description:
      language === 'en'
        ? 'A custom hook for accessing and managing the current theme.'
        : '用于访问和管理当前主题的自定义 Hook。',
    usageTitle: language === 'en' ? 'Usage Example' : '用法示例',
    apiTitle: language === 'en' ? 'API' : 'API',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">{content.usageTitle}</h2>
          <DocCodeBlock
            code={`import { useTheme } from '@/app/hooks/use-theme';\n\nconst { theme, setTheme } = useTheme();\n\n// theme: current theme value\n// setTheme: function to update theme\n`}
          />
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">{content.apiTitle}</h2>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark">
            {/* Add API details here */}
            {language === 'en'
              ? 'Returns the current theme and a function to update it.'
              : '返回当前主题和用于更新主题的函数。'}
          </p>
        </section>
      </DocLayout>
    </DocsWrapper>
  );
}
