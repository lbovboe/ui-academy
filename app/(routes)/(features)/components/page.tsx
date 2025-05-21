import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Components - UI Academy Docs',
  description: 'Browse all available UI components with code snippets and live demos.',
};

const Components = async () => {
  // Placeholder list of components
  const componentList = [
    { name: 'Button', href: '/components/button' },
    { name: 'Input', href: '/components/input' },
    { name: 'Card', href: '/components/card' },
    // Add more components here
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-[oklch(65%_0.15_250)]">Components</h1>
      <p className="mb-6 text-lg text-[oklch(40%_0_0)]">
        Browse all available UI components. Click a component to view its documentation, code snippets, and live demo.
      </p>
      <ul className="space-y-4">
        {componentList.map((comp) => (
          <li key={comp.name}>
            <Link
              href={comp.href}
              className="text-xl text-[oklch(65%_0.15_250)] underline hover:text-[oklch(70%_0.15_250)]"
            >
              {comp.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Components;
