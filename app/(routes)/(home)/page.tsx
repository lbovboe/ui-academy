import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UI Academy Docs',
  description:
    'Documentation, code snippets, and live demos for UI Academy components. Copy and use UI code instantly in your projects.',
};

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-5xl font-bold text-[oklch(65%_0.15_250)]">UI Academy Docs</h1>
      <p className="mb-8 max-w-xl text-center text-lg text-[oklch(40%_0_0)]">
        Explore ready-to-use UI components, copy code snippets, and see live demos. Build beautiful apps faster with UI
        Academy.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/docs/getting-started"
          className="rounded bg-[oklch(65%_0.15_250)] px-6 py-2 font-semibold text-white shadow transition-colors hover:bg-[oklch(70%_0.15_250)]"
        >
          Getting Started
        </Link>
        <Link
          href="/components"
          className="rounded border border-[oklch(65%_0.15_250)] px-6 py-2 font-semibold text-[oklch(65%_0.15_250)] transition-colors hover:bg-[oklch(97%_0_0)]"
        >
          Components
        </Link>
        <Link
          href="/docs/changelog"
          className="rounded border border-[oklch(65%_0.15_250)] px-6 py-2 font-semibold text-[oklch(65%_0.15_250)] transition-colors hover:bg-[oklch(97%_0_0)]"
        >
          Changelog
        </Link>
        <Link
          href="/docs/about"
          className="rounded border border-[oklch(65%_0.15_250)] px-6 py-2 font-semibold text-[oklch(65%_0.15_250)] transition-colors hover:bg-[oklch(97%_0_0)]"
        >
          About
        </Link>
      </div>
    </main>
  );
};

export default Home;
