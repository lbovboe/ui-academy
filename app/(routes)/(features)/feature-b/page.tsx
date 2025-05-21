import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feature B',
  description: 'Explore Feature B of our product.',
};

const FeatureB = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Feature B</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">Discover the benefits of Feature B.</p>
    </main>
  );
};

export default FeatureB;
