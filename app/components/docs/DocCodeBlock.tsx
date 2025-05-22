'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LuFileText, LuCheck } from 'react-icons/lu';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  className?: string;
}

const DocCodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  showLineNumbers = true,
  showCopyButton = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${className} mt-4`}>
      {showCopyButton && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          <button
            className="rounded-md bg-gray-700/70 p-1.5 text-gray-300 transition-colors hover:bg-gray-700"
            onClick={handleCopyCode}
            aria-label="Copy code"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <m.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <LuCheck className="h-4 w-4 text-green-400" />
                </m.div>
              ) : (
                <m.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <LuFileText className="h-4 w-4" />
                </m.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      )}

      {/* Container Query tailwind v4 */}
      <div className="@container overflow-x-auto rounded-lg">
        {/* 
        
          CSS container queries prevent pre and code tags from overflowing the parent container.
          .code-container {
            container-type: inline-size;
            width: 100%;
          }
        container-type: inline-size
        * Creates containment context: Child elements can now query this container's size
        * Breaks size dependency: Container size is no longer determined by child content width
        * Enables responsive behavior: Children adapt to container, not the other way around
          
        
        Tailwind use @container
        */}

        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            background: '#111827',
            minWidth: '100%',
            width: 'max-content',
          }}
          // showLineNumbers={showLineNumbers}
          wrapLines={false}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DocCodeBlock;
