'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocCodeBlock from '@/app/components/docs/DocCodeBlock';
import { useLanguage } from '@/app/components/docs/LanguageContext';

export default function ButtonDocPage() {
  const { language } = useLanguage();

  const content = {
    title: language === 'en' ? 'Button' : '按钮',
    description:
      language === 'en'
        ? 'A reusable button component with customizable styles and behavior.'
        : '一个可复用的按钮组件，支持自定义样式和行为。',
    usageTitle: language === 'en' ? 'Usage Example' : '用法示例',
    apiTitle: language === 'en' ? 'API' : 'API',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">{content.usageTitle}</h2>
          <DocCodeBlock
            code={`<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer">
  Click Me
</button>`}
          />
          <div className="mt-6 flex justify-center">
            <div className="flex min-h-[120px] w-full items-center justify-center rounded-lg bg-white p-8 shadow dark:bg-gray-900">
              <button
                className="cursor-pointer rounded bg-blue-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-700"
                onClick={() => alert(language === 'en' ? 'Clicked!' : '点击了！')}
              >
                {language === 'en' ? 'Click Me' : '点击我'}
              </button>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">{content.apiTitle}</h2>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark">
            {language === 'en'
              ? 'Props: variant (string), onClick (function), children (ReactNode), ...'
              : '属性：variant（字符串）、onClick（函数）、children（ReactNode）、...'}
          </p>
        </section>
      </DocLayout>
    </DocsWrapper>
  );
}
