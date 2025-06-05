import React from 'react';
import DocCodeBlock from './DocCodeBlock';

interface CodeDemoFrameProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

const CodeDemoFrame: React.FC<CodeDemoFrameProps> = ({ title, code, children }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <DocCodeBlock code={code} />
      <div className="mt-6 flex justify-center">
        <div className="flex min-h-[120px] w-full items-center justify-center rounded-lg bg-doc_bg-accent_light p-8 shadow dark:bg-gray-900">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CodeDemoFrame;
