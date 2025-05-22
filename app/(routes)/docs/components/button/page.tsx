'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import CodeDemoFrame from '@/app/components/docs/CodeDemoFrame';
import { useState } from 'react';
import { FaCheck, FaArrowRight, FaArrowLeft, FaSpinner, FaHeart } from 'react-icons/fa';

export default function ButtonDocPage() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const demos = [
    {
      key: 'primary',
      title: language === 'en' ? 'Primary Button' : '主按钮',
      code: `<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition-colors cursor-pointer">
  {language === 'en' ? 'Primary' : '主按钮'}
</button>`,
      button: (
        <button
          className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-700"
          onClick={() => alert(language === 'en' ? 'Primary Clicked!' : '点击了主按钮！')}
        >
          {language === 'en' ? 'Primary' : '主按钮'}
        </button>
      ),
    },
    {
      key: 'outline',
      title: language === 'en' ? 'Outline Button' : '描边按钮',
      code: `<button className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-5 rounded-lg transition-colors hover:bg-blue-50 cursor-pointer">
  {language === 'en' ? 'Outline' : '描边按钮'}
</button>`,
      button: (
        <button
          className="cursor-pointer rounded-lg border-2 border-blue-600 px-5 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
          onClick={() => alert(language === 'en' ? 'Outline Clicked!' : '点击了描边按钮！')}
        >
          {language === 'en' ? 'Outline' : '描边按钮'}
        </button>
      ),
    },
    {
      key: 'ghost',
      title: language === 'en' ? 'Ghost Button' : '幽灵按钮',
      code: `<button className="bg-transparent text-blue-600 font-semibold py-2 px-5 rounded-lg border border-transparent hover:border-blue-600 hover:bg-blue-50 cursor-pointer">
  {language === 'en' ? 'Ghost' : '幽灵按钮'}
</button>`,
      button: (
        <button
          className="cursor-pointer rounded-lg border border-transparent bg-transparent px-5 py-2 font-semibold text-blue-600 transition-colors hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          onClick={() => alert(language === 'en' ? 'Ghost Clicked!' : '点击了幽灵按钮！')}
        >
          {language === 'en' ? 'Ghost' : '幽灵按钮'}
        </button>
      ),
    },
    {
      key: 'icon',
      title: language === 'en' ? 'Icon Button' : '图标按钮',
      code: `<button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow transition-colors cursor-pointer">
  <FaHeart />
</button>`,
      button: (
        <button
          className="cursor-pointer rounded-full bg-pink-600 p-3 text-white shadow transition-colors hover:bg-pink-700"
          aria-label={language === 'en' ? 'Like' : '喜欢'}
        >
          <FaHeart />
        </button>
      ),
    },
    {
      key: 'left-icon',
      title: language === 'en' ? 'Button with Left Icon' : '左图标按钮',
      code: `<button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
  <FaCheck />
  {language === 'en' ? 'Success' : '成功'}
</button>`,
      button: (
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white shadow transition-colors hover:bg-green-700">
          <FaCheck />
          {language === 'en' ? 'Success' : '成功'}
        </button>
      ),
    },
    {
      key: 'right-icon',
      title: language === 'en' ? 'Button with Right Icon' : '右图标按钮',
      code: `<button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
  {language === 'en' ? 'Next' : '下一步'}
  <FaArrowRight />
</button>`,
      button: (
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white shadow transition-colors hover:bg-purple-700">
          {language === 'en' ? 'Next' : '下一步'}
          <FaArrowRight />
        </button>
      ),
    },
    {
      key: 'gradient',
      title: language === 'en' ? 'Gradient Button' : '渐变按钮',
      code: `<button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow transition-all cursor-pointer">
  {language === 'en' ? 'Gradient' : '渐变按钮'}
</button>`,
      button: (
        <button className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-2 font-semibold text-white shadow transition-all hover:from-blue-600 hover:to-pink-600">
          {language === 'en' ? 'Gradient' : '渐变按钮'}
        </button>
      ),
    },
    {
      key: 'loading',
      title: language === 'en' ? 'Loading Button' : '加载按钮',
      code: `<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-60" disabled={loading}>
  {loading ? <FaSpinner className=\"animate-spin\" /> : null}
  {language === 'en' ? 'Loading' : '加载中'}
</button>`,
      button: (
        <button
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-700 disabled:opacity-60"
          onClick={handleLoadingClick}
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin" /> : null}
          {language === 'en' ? 'Loading' : '加载中'}
        </button>
      ),
    },
    {
      key: 'disabled',
      title: language === 'en' ? 'Disabled Button' : '禁用按钮',
      code: `<button className="bg-gray-400 text-white font-semibold py-2 px-5 rounded-lg cursor-not-allowed opacity-60" disabled>
  {language === 'en' ? 'Disabled' : '禁用'}
</button>`,
      button: (
        <button
          className="cursor-not-allowed rounded-lg bg-gray-400 px-5 py-2 font-semibold text-white opacity-60"
          disabled
        >
          {language === 'en' ? 'Disabled' : '禁用'}
        </button>
      ),
    },
    {
      key: 'animated',
      title: language === 'en' ? 'Animated Button' : '动效按钮',
      code: `<button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg shadow transition-transform transform hover:scale-105 cursor-pointer">
  {language === 'en' ? 'Animate' : '动效'}
</button>`,
      button: (
        <button className="transform cursor-pointer rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white shadow transition-transform hover:scale-105 hover:bg-orange-600">
          {language === 'en' ? 'Animate' : '动效'}
        </button>
      ),
    },
  ];

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
        {demos.map((demo) => (
          <CodeDemoFrame key={demo.key} title={demo.title} code={demo.code}>
            {demo.button}
          </CodeDemoFrame>
        ))}
      </DocLayout>
    </DocsWrapper>
  );
}
