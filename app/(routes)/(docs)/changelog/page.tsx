import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog - UI Academy Docs',
  description: 'Release notes and updates for UI Academy components.',
};

const Changelog = async () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-[oklch(65%_0.15_250)]">Changelog</h1>
      <p className="mb-6 text-lg text-[oklch(40%_0_0)]">
        Stay up to date with the latest changes and improvements to UI Academy components.
      </p>
      <div className="rounded bg-[oklch(97%_0_0)] p-4 text-sm text-[oklch(40%_0_0)]">
        <p>v1.0.0 - Initial release 🎉</p>
        {/* Add more release notes here */}
      </div>
    </main>
  );
};

export default Changelog;
