'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import CodeDemoFrame from '@/app/components/docs/CodeDemoFrame';
import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaShoppingCart,
} from 'react-icons/fa';

export default function NavBarsDocPage() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const demos = [
    {
      key: 'glassmorphism-nav',
      title: language === 'en' ? 'Glassmorphism Navigation' : '玻璃拟态导航',
      code: `<div className="relative h-20 w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
  <nav className="absolute inset-0 border-b border-white/20 bg-white/10 backdrop-blur-md">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold text-white">Logo</div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Home
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              About
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Services
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>`,
      component: (
        <div className="relative h-20 w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
          <nav className="absolute inset-0 border-b border-white/20 bg-white/10 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                <div className="flex items-center">
                  <div className="text-xl font-bold text-white">Logo</div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {language === 'en' ? 'Home' : '首页'}
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {language === 'en' ? 'About' : '关于'}
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {language === 'en' ? 'Services' : '服务'}
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                    >
                      {language === 'en' ? 'Contact' : '联系'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ),
    },
    {
      key: 'floating-nav',
      title: language === 'en' ? 'Floating Navigation' : '浮动导航',
      code: `<div className="w-full flex justify-center">
  <nav className="rounded-full bg-black/80 px-6 py-3 backdrop-blur-lg">
    <div className="flex items-center space-x-6">
      <a href="#" className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400">
        <FaHome />
        <span>Home</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400">
        <FaUser />
        <span>About</span>
      </a>
      <a href="#" className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400">
        <FaCog />
        <span>Services</span>
      </a>
    </div>
  </nav>
</div>`,
      component: (
        <div className="flex w-full justify-center">
          <nav className="rounded-full bg-black/80 px-6 py-3 backdrop-blur-lg">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400"
              >
                <FaHome />
                <span>{language === 'en' ? 'Home' : '首页'}</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400"
              >
                <FaUser />
                <span>{language === 'en' ? 'About' : '关于'}</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-white transition-colors duration-300 hover:text-blue-400"
              >
                <FaCog />
                <span>{language === 'en' ? 'Services' : '服务'}</span>
              </a>
            </div>
          </nav>
        </div>
      ),
    },
    {
      key: 'animated-underline',
      title: language === 'en' ? 'Animated Underline Navigation' : '动画下划线导航',
      code: `<nav className="w-full rounded-lg bg-white shadow-lg">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between">
      <div className="flex space-x-8">
        <a href="#" className="group relative text-gray-600 transition-colors duration-300 hover:text-blue-600">
          Home
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="group relative text-gray-600 transition-colors duration-300 hover:text-blue-600">
          About
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="group relative text-gray-600 transition-colors duration-300 hover:text-blue-600">
          Services
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="group relative text-gray-600 transition-colors duration-300 hover:text-blue-600">
          Contact
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex space-x-8">
                {[
                  language === 'en' ? 'Home' : '首页',
                  language === 'en' ? 'About' : '关于',
                  language === 'en' ? 'Services' : '服务',
                  language === 'en' ? 'Contact' : '联系',
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group relative text-gray-600 transition-colors duration-300 hover:text-blue-600"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'hamburger-menu',
      title: language === 'en' ? 'Animated Hamburger Menu' : '动画汉堡菜单',
      code: `<nav className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between gap-4">
      <div className="text-xl font-bold text-white">Logo</div>
      <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
        <div className="flex h-6 w-6 flex-col items-center justify-center">
          <span className={\`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out \${isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}\`}></span>
          <span className={\`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out \${isMenuOpen ? 'opacity-0' : 'opacity-100'}\`}></span>
          <span className={\`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out \${isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}\`}></span>
        </div>
      </button>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="text-xl font-bold text-white">Logo</div>
              <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span
                    className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
                  ></span>
                  <span
                    className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'tab-navigation',
      title: language === 'en' ? 'Tab Navigation' : '标签导航',
      code: `<nav className="w-full rounded-lg border-b border-gray-200 bg-white">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex space-x-8">
      <button className="border-b-2 border-blue-500 px-1 py-4 text-sm font-medium text-blue-600 transition-colors duration-300">
        Home
      </button>
      <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 transition-colors duration-300 hover:border-gray-300 hover:text-gray-700">
        Products
      </button>
      <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 transition-colors duration-300 hover:border-gray-300 hover:text-gray-700">
        About
      </button>
      <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 transition-colors duration-300 hover:border-gray-300 hover:text-gray-700">
        Contact
      </button>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex space-x-8">
              {[
                { id: 'home', label: language === 'en' ? 'Home' : '首页' },
                { id: 'products', label: language === 'en' ? 'Products' : '产品' },
                { id: 'about', label: language === 'en' ? 'About' : '关于' },
                { id: 'contact', label: language === 'en' ? 'Contact' : '联系' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border-b-2 px-1 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'search-nav',
      title: language === 'en' ? 'Search Navigation' : '搜索导航',
      code: `<nav className="w-full rounded-lg bg-gray-900 text-white">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between">
      <div className="text-xl font-bold">Search Nav</div>
      <div className="mx-8 max-w-lg flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full bg-gray-800 py-2 pr-4 pl-10 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-white" />
        <FaUser className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-white" />
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="text-xl font-bold">Search Nav</div>
              <div className="mx-8 max-w-lg flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={language === 'en' ? 'Search...' : '搜索...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full bg-gray-800 py-2 pr-4 pl-10 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaBell className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-white" />
                <FaUser className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-white" />
              </div>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'dropdown-nav',
      title: language === 'en' ? 'Dropdown Navigation' : '下拉导航',
      code: `<nav className="relative w-full rounded-lg bg-white shadow-lg">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between gap-4">
      <div className="text-xl font-bold text-gray-800">Logo</div>
      <div className="flex items-center space-x-8">
        <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-600">
          Home
        </a>
        <div className="relative">
          <button
            onClick={toggleProfile}
            className="flex items-center space-x-1 text-gray-600 transition-colors duration-300 hover:text-blue-600"
          >
            <span>Profile</span>
            <FaChevronDown className={\`transform transition-transform duration-300 \${isProfileOpen ? 'rotate-180' : ''}\`} />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border bg-white py-1 shadow-lg">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="relative w-full rounded-lg bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="text-xl font-bold text-gray-800">Logo</div>
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-600">
                  {language === 'en' ? 'Home' : '首页'}
                </a>
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center space-x-1 text-gray-600 transition-colors duration-300 hover:text-blue-600"
                  >
                    <span>{language === 'en' ? 'Profile' : '个人资料'}</span>
                    <FaChevronDown
                      className={`transform transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border bg-white py-1 shadow-lg">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {language === 'en' ? 'Settings' : '设置'}
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {language === 'en' ? 'Profile' : '个人资料'}
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {language === 'en' ? 'Sign out' : '退出'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'dark-mode-toggle',
      title: language === 'en' ? 'Dark Mode Toggle Navigation' : '深色模式切换导航',
      code: `<nav className={\`w-full rounded-lg transition-all duration-300 \${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 shadow-lg'}\`}>
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between gap-4">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="transition-colors duration-300 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="transition-colors duration-300 hover:text-blue-500">
          About
        </a>
        <button
          onClick={toggleDarkMode}
          className={\`rounded-full p-2 transition-colors duration-300 \${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}\`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
        </button>
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav
          className={`w-full rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 shadow-lg'}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="text-xl font-bold">Logo</div>
              <div className="flex items-center space-x-6">
                <a href="#" className="transition-colors duration-300 hover:text-blue-500">
                  {language === 'en' ? 'Home' : '首页'}
                </a>
                <a href="#" className="transition-colors duration-300 hover:text-blue-500">
                  {language === 'en' ? 'About' : '关于'}
                </a>
                <button
                  onClick={toggleDarkMode}
                  className={`rounded-full p-2 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'social-nav',
      title: language === 'en' ? 'Social Navigation' : '社交导航',
      code: `<nav className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between gap-4">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="Twitter">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <div className="relative">
          <FaShoppingCart
            size={20}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => setCartCount(cartCount + 1)}
          />
          <span className="absolute -top-2 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </div>
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="text-xl font-bold">Logo</div>
              <div className="flex items-center space-x-6">
                <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="transition-transform duration-300 hover:scale-110" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <div className="relative">
                  <FaShoppingCart
                    size={20}
                    className="cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => setCartCount(cartCount + 1)}
                  />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ),
    },
    {
      key: 'neon-nav',
      title: language === 'en' ? 'Neon Navigation' : '霓虹导航',
      code: `<nav className="w-full rounded-lg border border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between gap-4">
      <div className="text-xl font-bold tracking-wider text-cyan-400 uppercase">Logo</div>
      <div className="flex items-center space-x-8">
        <a
          href="#"
          className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        >
          Home
        </a>
        <a
          href="#"
          className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        >
          About
        </a>
        <a
          href="#"
          className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>`,
      component: (
        <nav className="w-full rounded-lg border border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="text-xl font-bold tracking-wider text-cyan-400 uppercase">Logo</div>
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                >
                  {language === 'en' ? 'Home' : '首页'}
                </a>
                <a
                  href="#"
                  className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                >
                  {language === 'en' ? 'About' : '关于'}
                </a>
                <a
                  href="#"
                  className="border border-transparent px-3 py-1 tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                >
                  {language === 'en' ? 'Contact' : '联系'}
                </a>
              </div>
            </div>
          </div>
        </nav>
      ),
    },
  ];

  const content = {
    title: language === 'en' ? 'Navigation Bars' : '导航栏',
    description:
      language === 'en'
        ? 'A collection of stunning and modern navigation bar components with various styles and interactive features.'
        : '一系列精美现代的导航栏组件集合，具有各种样式和交互功能。',
    usageTitle: language === 'en' ? 'Usage Example' : '用法示例',
    apiTitle: language === 'en' ? 'API' : 'API',
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
