'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import DocCodeBlock from '@/app/components/docs/DocCodeBlock';

export default function DebounceDocPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'debounce' : 'debounce',
    description:
      language === 'en'
        ? 'A utility function to delay invoking a function until after a specified wait time has elapsed.'
        : '一个实用函数，用于在指定等待时间后延迟调用函数。',
    usageTitle: language === 'en' ? 'Usage Example' : '用法示例',
    apiTitle: language === 'en' ? 'API' : 'API',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">{content.usageTitle}</h2>
          <DocCodeBlock
            code={`import { debounce } from '@/app/utilities/debounce';\n\nconst handleResize = debounce(() => {\n  console.log('Window resized!');\n}, 300);\n\nwindow.addEventListener('resize', handleResize);\n`}
          />
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">{content.apiTitle}</h2>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark">
            {language === 'en'
              ? 'debounce(fn, wait) returns a debounced version of fn that delays invoking until after wait milliseconds have elapsed.'
              : 'debounce(fn, wait) 返回一个防抖版本的函数，只有在等待毫秒数后才会调用。'}
          </p>
        </section>
      </DocLayout>
    </DocsWrapper>
  );
}
