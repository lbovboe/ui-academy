'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import CodeDemoFrame from '@/app/components/docs/CodeDemoFrame';
import { useState } from 'react';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaStar,
  FaCode,
  FaPalette,
  FaMobile,
  FaDesktop,
} from 'react-icons/fa';

export default function FootersDocPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const demos = [
    {
      key: 'newsletter-footer',
      title: language === 'en' ? 'Newsletter Subscription Footer' : '订阅通讯页脚',
      code: `<footer className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and be the first to know about our latest updates, features, and exclusive content.</p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button
          onClick={handleSubscribe}
          disabled={subscribed}
          className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors disabled:opacity-70"
        >
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </button>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaCode className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Development</h4>
        <p className="text-emerald-100 text-sm">Custom solutions</p>
      </div>
      <div>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaPalette className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Design</h4>
        <p className="text-emerald-100 text-sm">Creative interfaces</p>
      </div>
      <div>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaMobile className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Mobile</h4>
        <p className="text-emerald-100 text-sm">Responsive design</p>
      </div>
      <div>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaDesktop className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Desktop</h4>
        <p className="text-emerald-100 text-sm">Full-featured apps</p>
      </div>
    </div>
    <div className="border-t border-emerald-400/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-emerald-100 mb-4 md:mb-0">&copy; 2024 TechCorp. All rights reserved.</p>
      <div className="flex space-x-6">
        <FaGithub className="hover:text-emerald-200 cursor-pointer transition-colors" size={20} />
        <FaTwitter className="hover:text-emerald-200 cursor-pointer transition-colors" size={20} />
        <FaLinkedin className="hover:text-emerald-200 cursor-pointer transition-colors" size={20} />
        <FaInstagram className="hover:text-emerald-200 cursor-pointer transition-colors" size={20} />
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{language === 'en' ? 'Stay Updated' : '保持更新'}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-emerald-100">
                {language === 'en'
                  ? 'Subscribe to our newsletter and be the first to know about our latest updates, features, and exclusive content.'
                  : '订阅我们的通讯，第一时间了解我们的最新更新、功能和独家内容。'}
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Enter your email' : '输入您的邮箱'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subscribed}
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50 disabled:opacity-70"
                >
                  {subscribed
                    ? language === 'en'
                      ? 'Subscribed!'
                      : '已订阅!'
                    : language === 'en'
                      ? 'Subscribe'
                      : '订阅'}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaCode className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Development' : '开发'}</h4>
                <p className="text-sm text-emerald-100">{language === 'en' ? 'Custom solutions' : '定制解决方案'}</p>
              </div>
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaPalette className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Design' : '设计'}</h4>
                <p className="text-sm text-emerald-100">{language === 'en' ? 'Creative interfaces' : '创意界面'}</p>
              </div>
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaMobile className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Mobile' : '移动端'}</h4>
                <p className="text-sm text-emerald-100">{language === 'en' ? 'Responsive design' : '响应式设计'}</p>
              </div>
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaDesktop className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Desktop' : '桌面端'}</h4>
                <p className="text-sm text-emerald-100">
                  {language === 'en' ? 'Full-featured apps' : '功能完整的应用'}
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between border-t border-emerald-400/30 pt-8 md:flex-row">
              <p className="mb-4 text-emerald-100 md:mb-0">
                &copy; 2024 {language === 'en' ? 'TechCorp. All rights reserved.' : 'TechCorp。保留所有权利。'}
              </p>
              <div className="flex space-x-6">
                <FaGithub className="cursor-pointer transition-colors hover:text-emerald-200" size={20} />
                <FaTwitter className="cursor-pointer transition-colors hover:text-emerald-200" size={20} />
                <FaLinkedin className="cursor-pointer transition-colors hover:text-emerald-200" size={20} />
                <FaInstagram className="cursor-pointer transition-colors hover:text-emerald-200" size={20} />
              </div>
            </div>
          </div>
        </footer>
      ),
    },
    {
      key: 'dark-modern-footer',
      title: language === 'en' ? 'Dark Modern Footer' : '深色现代页脚',
      code: `<footer className="bg-gray-900 text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-2">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
            <FaStar className="text-white" />
          </div>
          <h3 className="text-2xl font-bold">ModernTech</h3>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
          Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.
        </p>
        <div className="flex space-x-4">
          <div className="group">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors cursor-pointer">
              <FaFacebook className="group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="group">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-sky-500 transition-colors cursor-pointer">
              <FaTwitter className="group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="group">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors cursor-pointer">
              <FaYoutube className="group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="group">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors cursor-pointer">
              <FaLinkedin className="group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-6 text-lg">Company</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full mr-3  transition-opacity"></span>
            About Us
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full mr-3  transition-opacity"></span>
            Our Team
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full mr-3  transition-opacity"></span>
            Careers
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full mr-3  transition-opacity"></span>
            News
          </a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-6 text-lg">Resources</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-purple-500 rounded-full mr-3  transition-opacity"></span>
            Documentation
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-purple-500 rounded-full mr-3  transition-opacity"></span>
            Help Center
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-purple-500 rounded-full mr-3  transition-opacity"></span>
            Privacy Policy
          </a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
            <span className="w-2 h-2 bg-gray-400 group-hover:bg-purple-500 rounded-full mr-3  transition-opacity"></span>
            Terms of Service
          </a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 ModernTech. All rights reserved.</p>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
          <span>Back to top</span>
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="rounded-lg bg-gray-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <div className="mb-6 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <FaStar className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{language === 'en' ? 'ModernTech' : '现代科技'}</h3>
                </div>
                <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                  {language === 'en'
                    ? 'Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.'
                    : '用前沿技术解决方案赋能企业。我们将想法转化为数字现实。'}
                </p>
                <div className="flex space-x-4">
                  <div className="group">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-blue-600">
                      <FaFacebook className="transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-sky-500">
                      <FaTwitter className="transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-red-600">
                      <FaYoutube className="transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-blue-700">
                      <FaLinkedin className="transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-6 text-lg font-semibold">{language === 'en' ? 'Company' : '公司'}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-blue-500 "></span>
                      {language === 'en' ? 'About Us' : '关于我们'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-blue-500 "></span>
                      {language === 'en' ? 'Our Team' : '我们的团队'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-blue-500 "></span>
                      {language === 'en' ? 'Careers' : '职业机会'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-blue-500 "></span>
                      {language === 'en' ? 'News' : '新闻'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-lg font-semibold">{language === 'en' ? 'Resources' : '资源'}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-purple-500 "></span>
                      {language === 'en' ? 'Documentation' : '文档'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-purple-500 "></span>
                      {language === 'en' ? 'Help Center' : '帮助中心'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-purple-500 "></span>
                      {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-400 transition-colors hover:text-white">
                      <span className="mr-3 h-2 w-2 rounded-full bg-gray-400 group-hover:bg-purple-500 "></span>
                      {language === 'en' ? 'Terms of Service' : '服务条款'}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <p className="mb-4 text-gray-400 md:mb-0">
                  &copy; 2024 {language === 'en' ? 'ModernTech. All rights reserved.' : '现代科技。保留所有权利。'}
                </p>
                <button className="group flex items-center space-x-2 text-gray-400 transition-colors hover:text-white">
                  <span>{language === 'en' ? 'Back to top' : '回到顶部'}</span>
                  <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      ),
    },
    {
      key: 'animated-wave-footer',
      title: language === 'en' ? 'Animated Wave Footer' : '动画波浪页脚',
      code: `<footer className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
  <div className="absolute inset-0">
    <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
    </svg>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
        <FaHeart className="text-3xl animate-pulse" />
      </div>
      <h2 className="text-4xl font-bold mb-4">Made with Love</h2>
      <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
        Crafting beautiful digital experiences that connect people and inspire innovation across the globe.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaMapMarkerAlt className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Visit Us</h4>
        <p className="text-white/80 text-sm">123 Innovation Street<br />Tech City, TC 12345</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaEnvelope className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Email Us</h4>
        <p className="text-white/80 text-sm">hello@company.com<br />support@company.com</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FaPhone className="text-2xl" />
        </div>
        <h4 className="font-semibold mb-2">Call Us</h4>
        <p className="text-white/80 text-sm">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
      </div>
    </div>
    <div className="flex justify-center space-x-8 mb-12">
      <div className="group">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
          <FaGithub className="text-xl" />
        </div>
      </div>
      <div className="group">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
          <FaTwitter className="text-xl" />
        </div>
      </div>
      <div className="group">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
          <FaLinkedin className="text-xl" />
        </div>
      </div>
      <div className="group">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
          <FaInstagram className="text-xl" />
        </div>
      </div>
    </div>
    <div className="text-center text-white/60">
      <p>&copy; 2024 Creative Studio. Designed with passion and purpose.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">
          <div className="absolute inset-0">
            <svg className="absolute bottom-0 h-20 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-white"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="fill-white"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <FaHeart className="animate-pulse text-3xl" />
              </div>
              <h2 className="mb-4 text-4xl font-bold">{language === 'en' ? 'Made with Love' : '用心制作'}</h2>
              <p className="mx-auto max-w-2xl leading-relaxed text-white/80">
                {language === 'en'
                  ? 'Crafting beautiful digital experiences that connect people and inspire innovation across the globe.'
                  : '打造美丽的数字体验，连接人们并激发全球创新。'}
              </p>
            </div>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Visit Us' : '拜访我们'}</h4>
                <p className="text-sm text-white/80">
                  {language === 'en' ? '123 Innovation Street' : '创新街123号'}
                  <br />
                  {language === 'en' ? 'Tech City, TC 12345' : '科技城，TC 12345'}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Email Us' : '邮件联系'}</h4>
                <p className="text-sm text-white/80">
                  hello@company.com
                  <br />
                  support@company.com
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <FaPhone className="text-2xl" />
                </div>
                <h4 className="mb-2 font-semibold">{language === 'en' ? 'Call Us' : '电话联系'}</h4>
                <p className="text-sm text-white/80">
                  +1 (555) 123-4567
                  <br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>
            <div className="mb-12 flex justify-center space-x-8">
              <div className="group">
                <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FaGithub className="text-xl" />
                </div>
              </div>
              <div className="group">
                <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FaTwitter className="text-xl" />
                </div>
              </div>
              <div className="group">
                <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FaLinkedin className="text-xl" />
                </div>
              </div>
              <div className="group">
                <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FaInstagram className="text-xl" />
                </div>
              </div>
            </div>
            <div className="text-center text-white/60">
              <p>
                &copy; 2024{' '}
                {language === 'en'
                  ? 'Creative Studio. Designed with passion and purpose.'
                  : '创意工作室。用激情和目标设计。'}
              </p>
            </div>
          </div>
        </footer>
      ),
    },
  ];

  const content = {
    title: language === 'en' ? 'Footer Components' : '页脚组件',
    description:
      language === 'en'
        ? 'A collection of stunning and modern footer components with various layouts, animations, and interactive elements.'
        : '一系列精美现代的页脚组件集合，包含各种布局、动画和交互元素。',
  };

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description}>
        {demos.map((demo) => (
          <CodeDemoFrame key={demo.key} title={demo.title} code={demo.code}>
            {demo.component}
          </CodeDemoFrame>
        ))}
      </DocLayout>
    </DocsWrapper>
  );
}
