import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../NavBar';

// Mock the dependencies
jest.mock('@/app/components/tools/ThemeToggle', () => {
  return function MockThemeToggle() {
    return <button data-testid="theme-toggle">Theme Toggle</button>;
  };
});

jest.mock('@/app/components/tools/animation/Chip', () => {
  return function MockChip({ text, selected }: { text: string; selected: boolean }) {
    return (
      <button data-testid={`chip-${text.toLowerCase().replace(/\s+/g, '-')}`} data-selected={selected}>
        {text}
      </button>
    );
  };
});

// Mock usePathname hook
const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('NavBar Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Reset window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      expect(screen.getByRole('img', { name: /ui academy docs logo/i })).toBeInTheDocument();
    });

    it('renders all navigation items', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      expect(screen.getByTestId('chip-home')).toBeInTheDocument();
      expect(screen.getByTestId('chip-docs')).toBeInTheDocument();
      expect(screen.getByTestId('chip-ui-components')).toBeInTheDocument();
    });

    it('renders the logo with correct attributes', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const logo = screen.getByRole('img', { name: /ui academy docs logo/i });
      expect(logo).toHaveAttribute('src', '/icons/icon-72x72.png');
      expect(logo).toHaveAttribute('width', '40');
      expect(logo).toHaveAttribute('height', '40');
    });

    it('renders the theme toggle component', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    });

    it('has correct initial styling classes', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;
      expect(navbar).toHaveClass('fixed', 'top-0', 'z-50', 'w-full');
      expect(navbar).toHaveClass('bg-light-paper/10', 'dark:bg-dark-paper/10');
    });
  });

  describe('Navigation Active States', () => {
    it('marks Home as active when on root path', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const homeChip = screen.getByTestId('chip-home');
      expect(homeChip).toHaveAttribute('data-selected', 'true');

      const docsChip = screen.getByTestId('chip-docs');
      expect(docsChip).toHaveAttribute('data-selected', 'false');

      const componentsChip = screen.getByTestId('chip-ui-components');
      expect(componentsChip).toHaveAttribute('data-selected', 'false');
    });

    it('marks Docs as active when on docs path (but not components)', () => {
      mockUsePathname.mockReturnValue('/docs/getting-started');
      render(<NavBar />);

      const homeChip = screen.getByTestId('chip-home');
      expect(homeChip).toHaveAttribute('data-selected', 'false');

      const docsChip = screen.getByTestId('chip-docs');
      expect(docsChip).toHaveAttribute('data-selected', 'true');

      const componentsChip = screen.getByTestId('chip-ui-components');
      expect(componentsChip).toHaveAttribute('data-selected', 'false');
    });

    it('marks UI Components as active when on components path', () => {
      mockUsePathname.mockReturnValue('/docs/components/buttons');
      render(<NavBar />);

      const homeChip = screen.getByTestId('chip-home');
      expect(homeChip).toHaveAttribute('data-selected', 'false');

      const docsChip = screen.getByTestId('chip-docs');
      expect(docsChip).toHaveAttribute('data-selected', 'false');

      const componentsChip = screen.getByTestId('chip-ui-components');
      expect(componentsChip).toHaveAttribute('data-selected', 'true');
    });

    it('does not mark docs as active when on components path', () => {
      mockUsePathname.mockReturnValue('/docs/components');
      render(<NavBar />);

      const docsChip = screen.getByTestId('chip-docs');
      expect(docsChip).toHaveAttribute('data-selected', 'false');

      const componentsChip = screen.getByTestId('chip-ui-components');
      expect(componentsChip).toHaveAttribute('data-selected', 'true');
    });

    it('handles unknown paths correctly', () => {
      mockUsePathname.mockReturnValue('/unknown-path');
      render(<NavBar />);

      const homeChip = screen.getByTestId('chip-home');
      expect(homeChip).toHaveAttribute('data-selected', 'false');

      const docsChip = screen.getByTestId('chip-docs');
      expect(docsChip).toHaveAttribute('data-selected', 'false');

      const componentsChip = screen.getByTestId('chip-ui-components');
      expect(componentsChip).toHaveAttribute('data-selected', 'false');
    });
  });

  describe('Scroll Behavior', () => {
    it('sets up scroll event listener on mount', () => {
      mockUsePathname.mockReturnValue('/');
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      render(<NavBar />);

      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });

    it('removes scroll event listener on unmount', () => {
      mockUsePathname.mockReturnValue('/');
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = render(<NavBar />);
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });

    it('has initial transparent background when not scrolled', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;

      // Initially should have transparent background
      expect(navbar).toHaveClass('bg-light-paper/10', 'dark:bg-dark-paper/10');
      expect(navbar).not.toHaveClass('bg-light-paper/90', 'dark:bg-dark-paper/90');
    });

    it('includes transition classes for smooth background changes', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;
      expect(navbar).toHaveClass('transition-colors', 'duration-200');
    });
  });

  describe('Navigation Links', () => {
    it('renders navigation links with correct hrefs', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');

      const docsLink = screen.getByRole('link', { name: /docs/i });
      expect(docsLink).toHaveAttribute('href', '/docs');

      const componentsLink = screen.getByRole('link', { name: /ui components/i });
      expect(componentsLink).toHaveAttribute('href', '/docs/components');
    });

    it('navigation links are clickable', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      const docsLink = screen.getByRole('link', { name: /docs/i });
      const componentsLink = screen.getByRole('link', { name: /ui components/i });

      expect(homeLink).toBeInTheDocument();
      expect(docsLink).toBeInTheDocument();
      expect(componentsLink).toBeInTheDocument();

      // These should not throw errors when clicked
      fireEvent.click(homeLink);
      fireEvent.click(docsLink);
      fireEvent.click(componentsLink);
    });
  });

  describe('Layout and Structure', () => {
    it('has correct container structure', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;
      const innerContainer = navbar.querySelector('.mx-auto.flex.max-w-7xl');

      expect(innerContainer).toBeInTheDocument();
      expect(innerContainer).toHaveClass('items-center', 'justify-between');
    });

    it('positions logo, navigation, and theme toggle correctly', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const logo = screen.getByRole('img', { name: /ui academy docs logo/i });
      const navigation = screen.getByTestId('chip-home').closest('div');
      const themeToggle = screen.getByTestId('theme-toggle');

      expect(logo).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
      expect(themeToggle).toBeInTheDocument();
    });

    it('navigation items have correct gap spacing', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const navigationContainer = screen.getByTestId('chip-home').closest('div');
      expect(navigationContainer).toHaveClass('flex', 'items-center', 'gap-2');
    });
  });

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      // Logo should be an image with alt text
      const logo = screen.getByRole('img', { name: /ui academy docs logo/i });
      expect(logo).toBeInTheDocument();

      // Navigation links should be accessible
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /docs/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /ui components/i })).toBeInTheDocument();
    });

    it('maintains focus management', () => {
      mockUsePathname.mockReturnValue('/');
      render(<NavBar />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      homeLink.focus();
      expect(homeLink).toHaveFocus();
    });
  });

  describe('Responsive Design', () => {
    it('has responsive padding and sizing classes', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;
      expect(navbar).toHaveClass('px-6', 'py-4');

      const innerContainer = navbar.querySelector('.mx-auto');
      expect(innerContainer).toHaveClass('max-w-7xl');
    });
  });

  describe('Theme Integration', () => {
    it('includes theme-aware classes', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<NavBar />);

      const navbar = container.firstChild as HTMLElement;
      expect(navbar.className).toMatch(/dark:bg-dark-paper/);
      expect(navbar.className).toMatch(/bg-light-paper/);
    });
  });

  describe('Performance', () => {
    it('does not re-render unnecessarily when pathname changes to same active state', () => {
      mockUsePathname.mockReturnValue('/');
      const { rerender } = render(<NavBar />);

      const homeChip = screen.getByTestId('chip-home');
      expect(homeChip).toHaveAttribute('data-selected', 'true');

      // Change to another home-like path (should still be active)
      mockUsePathname.mockReturnValue('/');
      rerender(<NavBar />);

      expect(homeChip).toHaveAttribute('data-selected', 'true');
    });
  });
});
