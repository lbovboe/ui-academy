import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Placeholder component data
const components = [
  { slug: 'button', name: 'Button', description: 'A versatile button component.', code: `<Button>Click me</Button>` },
  { slug: 'input', name: 'Input', description: 'A styled input field.', code: `<Input placeholder=\"Type here\" />` },
  { slug: 'card', name: 'Card', description: 'A card container for content.', code: `<Card>Content</Card>` },
];

export const generateStaticParams = async () => {
  return components.map((comp) => ({ component: comp.slug }));
};

export const generateMetadata = async ({ params }: { params: { component: string } }): Promise<Metadata> => {
  const comp = components.find((c) => c.slug === params.component);
  if (!comp) return { title: 'Component Not Found - UI Academy Docs' };
  return {
    title: `${comp.name} Component - UI Academy Docs`,
    description: comp.description,
  };
};

const ComponentPage = async ({ params }: { params: { component: string } }) => {
  const comp = components.find((c) => c.slug === params.component);
  if (!comp) return notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-[oklch(65%_0.15_250)]">{comp.name} Component</h1>
      <p className="mb-6 text-lg text-[oklch(40%_0_0)]">{comp.description}</p>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Code Example</h2>
        <pre className="overflow-x-auto rounded bg-[oklch(97%_0_0)] p-4 text-sm">
          <code>{comp.code}</code>
        </pre>
        {/* Add a copy button here in the future */}
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">Live Demo</h2>
        <div className="rounded bg-[oklch(97%_0_0)] p-4 text-center">{/* Demo placeholder */}Demo coming soon</div>
      </div>
    </main>
  );
};

export default ComponentPage;
