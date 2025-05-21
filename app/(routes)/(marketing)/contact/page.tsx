import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for more information.',
};

const Contact = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">Email: info@example.com</p>
    </main>
  );
};

export default Contact;
