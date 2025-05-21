// components/ThemeToggle.tsx
'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`text-dark-text-primary relative rounded-md bg-linear-to-r p-2 transition-colors ${
        theme === 'light' ? 'from-light-primary to-light-secondary' : 'from-dark-primary to-dark-secondary'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
