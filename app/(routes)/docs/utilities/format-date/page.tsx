'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import DocCodeBlock from '@/app/components/docs/DocCodeBlock';

export default function FormatDateDocPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'formatDate' : 'formatDate',
    description:
      language === 'en'
        ? 'A utility function to format a date string or Date object into a readable format.'
        : '一个实用函数，用于将日期字符串或 Date 对象格式化为可读格式。',
    usageTitle: language === 'en' ? 'Usage Example' : '用法示例',
    apiTitle: language === 'en' ? 'API' : 'API',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">{content.usageTitle}</h2>
          <DocCodeBlock
            code={`import { formatDate } from '@/app/utilities/format-date';\n\nconst date = new Date('2024-06-01T12:00:00Z');\nconst formatted = formatDate(date, 'yyyy-MM-dd HH:mm');\nconsole.log(formatted); // 2024-06-01 12:00\n`}
          />
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">{content.apiTitle}</h2>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark">
            {language === 'en'
              ? 'formatDate(date, format) returns a formatted date string according to the given format.'
              : 'formatDate(date, format) 根据给定格式返回格式化后的日期字符串。'}
          </p>
        </section>
      </DocLayout>
    </DocsWrapper>
  );
}
