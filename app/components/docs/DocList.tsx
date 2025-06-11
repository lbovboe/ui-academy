'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

type DocListItem = { description: React.ReactNode; codeBlock?: React.ReactNode };

type DocListProps = {
  items: DocListItem[];
  type?: 'bullet' | 'number' | 'icon';
  delay?: number;
};

export default function DocList({ items, type = 'icon', delay = 0 }: DocListProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay * 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <m.div
      className="relative space-y-8 md:space-y-2.5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {items.map((item, index) => {
        const number = index + 1;

        return (
          <m.div
            key={index}
            className={`group hover:bg-doc_bg-accent_light dark:hover:bg-doc_bg-accent_dark rounded-lg transition-all duration-200 md:p-4`}
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <div className={`relative flex-shrink-0 ${type === 'number' ? 'hidden md:block' : ''}`}>
                <div
                  className={`relative flex ${type === 'number' ? 'h-4 w-4' : 'h-2 w-2'} bg-doc_bg-light dark:bg-doc_bg-dark items-center justify-center rounded-full`}
                >
                  <div className="relative">
                    <FaCircle size={8} />
                    {type === 'number' && (
                      <div className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark absolute inset-0 flex items-center justify-center text-sm">
                        {number}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark w-full min-w-0">
                {item.description}
              </div>
            </div>

            {item.codeBlock ? (
              <div className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark w-full min-w-0">
                {item.codeBlock}
              </div>
            ) : null}
          </m.div>
        );
      })}
    </m.div>
  );
}
