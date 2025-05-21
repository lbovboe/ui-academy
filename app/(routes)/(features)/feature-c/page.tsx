import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feature C',
  description: 'Explore Feature C of our product.',
};

const FeatureC = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Feature C</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">Discover the benefits of Feature C.</p>
    </main>
  );
};

export default FeatureC;
