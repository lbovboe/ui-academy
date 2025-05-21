import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feature A',
  description: 'Explore Feature A of our product.',
};

const FeatureA = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Feature A</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">Discover the benefits of Feature A.</p>
    </main>
  );
};

export default FeatureA;
