'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import CodeDemoFrame from '@/app/components/docs/CodeDemoFrame';
import { useState } from 'react';
import { FaRocket, FaDownload, FaPlay, FaHeart, FaStar, FaArrowRight, FaCheck, FaMagic } from 'react-icons/fa';

export default function ButtonDocPage() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleDownloadClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const demos = [
    {
      key: 'neon-glow',
      title: language === 'en' ? 'Neon Glow Effect' : '霓虹发光效果',
      code: `<button className="relative px-8 py-3 bg-purple-600 text-white font-bold rounded-full overflow-hidden group transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]">
  <span className="relative z-10">{language === 'en' ? 'Neon Glow' : '霓虹发光'}</span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</button>`,
      button: (
        <button className="group relative overflow-hidden rounded-full bg-purple-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]">
          <span className="relative z-10">{language === 'en' ? 'Neon Glow' : '霓虹发光'}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
        </button>
      ),
    },
    {
      key: 'morphing-gradient',
      title: language === 'en' ? 'Morphing Gradient' : '变形渐变',
      code: `<button className="relative px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-full overflow-hidden group transition-all duration-500 hover:scale-105 animate-gradient-x">
  <span className="relative z-10 flex items-center gap-2">
    <FaMagic />
    {language === 'en' ? 'Morphing' : '变形'}
  </span>
</button>`,
      button: (
        <button className="group relative animate-pulse overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-3 font-bold text-white transition-all duration-500 hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            <FaMagic />
            {language === 'en' ? 'Morphing' : '变形'}
          </span>
        </button>
      ),
    },
    {
      key: 'glass-morphism',
      title: language === 'en' ? 'Glassmorphism' : '玻璃拟态',
      code: `<button className="relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl">
  {language === 'en' ? 'Glass Effect' : '玻璃效果'}
</button>`,
      button: (
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-600 opacity-50 blur-lg"></div>
          <button className="relative rounded-2xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
            {language === 'en' ? 'Glass Effect' : '玻璃效果'}
          </button>
        </div>
      ),
    },
    {
      key: 'ripple-effect',
      title: language === 'en' ? 'Ripple Effect' : '涟漪效果',
      code: `<button className="relative px-8 py-3 bg-blue-600 text-white font-bold rounded-lg overflow-hidden group transition-all duration-300 hover:bg-blue-700">
  <span className="relative z-10">{language === 'en' ? 'Click Me' : '点击我'}</span>
  <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-full"></div>
</button>`,
      button: (
        <button className="group relative overflow-hidden rounded-lg bg-blue-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95">
          <span className="relative z-10">{language === 'en' ? 'Click Me' : '点击我'}</span>
          <div className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-300 group-active:scale-100"></div>
        </button>
      ),
    },
    {
      key: 'sliding-border',
      title: language === 'en' ? 'Sliding Border' : '滑动边框',
      code: `<button className="relative px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg overflow-hidden group transition-all duration-300 hover:text-white">
  <span className="relative z-10">{language === 'en' ? 'Slide Border' : '滑动边框'}</span>
  <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
</button>`,
      button: (
        <button className="group relative overflow-hidden rounded-lg border-2 border-cyan-400 bg-transparent px-8 py-3 font-bold text-cyan-400 transition-all duration-300 hover:text-white">
          <span className="relative z-10">{language === 'en' ? 'Slide Border' : '滑动边框'}</span>
          <div className="absolute inset-0 -translate-x-full transform bg-cyan-400 transition-transform duration-300 group-hover:translate-x-0"></div>
        </button>
      ),
    },
    {
      key: 'magnetic-hover',
      title: language === 'en' ? 'Magnetic Hover' : '磁性悬停',
      code: `<button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl transform-gpu">
  <span className="flex items-center gap-2">
    <FaRocket />
    {language === 'en' ? 'Launch' : '启动'}
  </span>
</button>`,
      button: (
        <button className="transform-gpu rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl">
          <span className="flex items-center gap-2">
            <FaRocket />
            {language === 'en' ? 'Launch' : '启动'}
          </span>
        </button>
      ),
    },
    {
      key: 'loading-morph',
      title: language === 'en' ? 'Loading Morph' : '加载变形',
      code: `<button className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-full transition-all duration-300 hover:bg-indigo-700 disabled:opacity-70" disabled={loading}>
  {loading ? (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      {language === 'en' ? 'Processing...' : '处理中...'}
    </div>
  ) : (
    language === 'en' ? 'Process' : '处理'
  )}
</button>`,
      button: (
        <button
          className="relative rounded-full bg-indigo-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-indigo-700 disabled:opacity-70"
          onClick={handleLoadingClick}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              {language === 'en' ? 'Processing...' : '处理中...'}
            </div>
          ) : language === 'en' ? (
            'Process'
          ) : (
            '处理'
          )}
        </button>
      ),
    },
    {
      key: 'heart-pulse',
      title: language === 'en' ? 'Heart Pulse' : '心跳脉冲',
      code: `<button className="relative p-4 bg-red-500 text-white rounded-full transition-all duration-300 hover:bg-red-600 hover:scale-110" onClick={handleLikeClick}>
  <FaHeart className={liked ? 'animate-pulse' : ''} />
  {liked && <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>}
</button>`,
      button: (
        <button
          className="relative rounded-full bg-red-500 p-4 text-white transition-all duration-300 hover:scale-110 hover:bg-red-600"
          onClick={handleLikeClick}
          aria-label={language === 'en' ? 'Like' : '喜欢'}
        >
          <FaHeart className={liked ? 'animate-pulse' : ''} />
          {liked && <div className="absolute inset-0 animate-ping rounded-full bg-red-400"></div>}
        </button>
      ),
    },
    {
      key: 'download-success',
      title: language === 'en' ? 'Download Success' : '下载成功',
      code: `<button className="relative px-8 py-3 bg-green-600 text-white font-bold rounded-lg transition-all duration-300 hover:bg-green-700 hover:scale-105" onClick={handleDownloadClick}>
  <span className="flex items-center gap-2">
    {downloaded ? <FaCheck /> : <FaDownload />}
    {downloaded ? (language === 'en' ? 'Downloaded!' : '已下载!') : (language === 'en' ? 'Download' : '下载')}
  </span>
</button>`,
      button: (
        <button
          className="relative rounded-lg bg-green-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
          onClick={handleDownloadClick}
        >
          <span className="flex items-center gap-2">
            {downloaded ? <FaCheck className="animate-bounce" /> : <FaDownload />}
            {downloaded ? (language === 'en' ? 'Downloaded!' : '已下载!') : language === 'en' ? 'Download' : '下载'}
          </span>
        </button>
      ),
    },
    {
      key: 'holographic',
      title: language === 'en' ? 'Holographic' : '全息效果',
      code: `<button className="relative px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white font-bold rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 animate-pulse">
  <span className="relative z-10 flex items-center gap-2">
    <FaStar />
    {language === 'en' ? 'Holographic' : '全息'}
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
</button>`,
      button: (
        <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-8 py-3 font-bold text-white transition-all duration-500 hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            <FaStar />
            {language === 'en' ? 'Holographic' : '全息'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
        </button>
      ),
    },
    {
      key: 'cyberpunk',
      title: language === 'en' ? 'Cyberpunk' : '赛博朋克',
      code: `<button className="relative px-8 py-3 bg-black border-2 border-cyan-400 text-cyan-400 font-bold rounded-none transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] uppercase tracking-wider">
  <span className="relative z-10 flex items-center gap-2">
    <FaPlay />
    {language === 'en' ? 'Execute' : '执行'}
  </span>
</button>`,
      button: (
        <button className="relative rounded-none border-2 border-cyan-400 bg-black px-8 py-3 font-bold tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]">
          <span className="relative z-10 flex items-center gap-2">
            <FaPlay />
            {language === 'en' ? 'Execute' : '执行'}
          </span>
        </button>
      ),
    },
    {
      key: 'floating-arrow',
      title: language === 'en' ? 'Floating Arrow' : '浮动箭头',
      code: `<button className="group relative px-8 py-3 bg-orange-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-orange-600 hover:pr-12">
  <span className="transition-all duration-300 group-hover:pr-4">{language === 'en' ? 'Continue' : '继续'}</span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>`,
      button: (
        <button className="group relative rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:pr-12">
          <span className="transition-all duration-300 group-hover:pr-4">
            {language === 'en' ? 'Continue' : '继续'}
          </span>
          <FaArrowRight className="absolute top-1/2 right-4 translate-x-2 -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>
      ),
    },
  ];

  const content = {
    title: language === 'en' ? 'Animate Button' : '动画按钮',
    description:
      language === 'en'
        ? 'A collection of animated button components with stunning visual effects and smooth transitions.'
        : '一系列具有惊艳视觉效果和流畅过渡动画的按钮组件集合。',
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
