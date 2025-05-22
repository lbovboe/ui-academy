'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocCodeBlock from '@/app/components/docs/DocCodeBlock';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import CodeDemoFrame from '@/app/components/docs/CodeDemoFrame';

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
          <CodeDemoFrame
             title={language === 'en' ? 'Click Me' : '点击我'}
            code={`<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer">
  Click Me
</button>`}
          >
            <button
              className="cursor-pointer rounded bg-blue-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-700"
              onClick={() => alert(language === 'en' ? 'Clicked!' : '点击了！')}
            >
              {language === 'en' ? 'Click Me' : '点击我'}
            </button>
          </CodeDemoFrame>
        </section>

        {/* Primary Button Example */}
        <CodeDemoFrame
          title={language === 'en' ? 'Primary Button' : '主按钮'}
          code={`<button className=\"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer\">\n  {language === 'en' ? 'Primary' : '主按钮'}\n</button>`}
        >
          <button
            className="cursor-pointer rounded bg-blue-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-700"
            onClick={() => alert(language === 'en' ? 'Primary Clicked!' : '点击了主按钮！')}
          >
            {language === 'en' ? 'Primary' : '主按钮'}
          </button>
        </CodeDemoFrame>

        {/* Secondary Button Example */}
        <CodeDemoFrame
          title={language === 'en' ? 'Secondary Button' : '次按钮'}
          code={`<button className=\"bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer\">\n  {language === 'en' ? 'Secondary' : '次按钮'}\n</button>`}
        >
          <button
            className="cursor-pointer rounded bg-gray-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-gray-700"
            onClick={() => alert(language === 'en' ? 'Secondary Clicked!' : '点击了次按钮！')}
          >
            {language === 'en' ? 'Secondary' : '次按钮'}
          </button>
        </CodeDemoFrame>

        {/* Success Button Example */}
        <CodeDemoFrame
          title={language === 'en' ? 'Success Button' : '成功按钮'}
          code={`<button className=\"bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer\">\n  {language === 'en' ? 'Success' : '成功按钮'}\n</button>`}
        >
          <button
            className="cursor-pointer rounded bg-green-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-green-700"
            onClick={() => alert(language === 'en' ? 'Success Clicked!' : '点击了成功按钮！')}
          >
            {language === 'en' ? 'Success' : '成功按钮'}
          </button>
        </CodeDemoFrame>

        {/* Danger Button Example */}
        <CodeDemoFrame
          title={language === 'en' ? 'Danger Button' : '危险按钮'}
          code={`<button className=\"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors cursor-pointer\">\n  {language === 'en' ? 'Danger' : '危险按钮'}\n</button>`}
        >
          <button
            className="cursor-pointer rounded bg-red-600 px-4 py-2 font-semibold text-white shadow transition-colors hover:bg-red-700"
            onClick={() => alert(language === 'en' ? 'Danger Clicked!' : '点击了危险按钮！')}
          >
            {language === 'en' ? 'Danger' : '危险按钮'}
          </button>
        </CodeDemoFrame>
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
