import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search for content in our app.',
};

const Search = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Search</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">Use the search feature to find what you need.</p>
    </main>
  );
};

export default Search;
