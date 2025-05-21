const Footer = () => {
  return (
    /* 
      Footer container:
      - mt-auto: Pushes footer to bottom when content is shorter than viewport
      - bg-light/dark-paper: Theme-based background color
      - border-t: Top border for visual separation
    */
    <footer className="border-light-border bg-light-paper/30 dark:border-dark-border dark:bg-dark-paper/30 mt-auto border-t border-solid py-6">
      {/* 
        Container for content:
        - container: Sets max-width and centers content
        - mx-auto: Centers container horizontally
        - px-4: Adds horizontal padding
      */}
      <div className="container mx-auto px-4">
        {/* Top: Project description */}
        <div className="mb-2 text-center">
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            UI Academy Docs provides ready-to-use UI component documentation, code snippets, and live demos. Copy,
            paste, and build beautiful apps faster.
          </p>
        </div>

        {/* Bottom footer with copyright and links */}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm md:mt-0">
            <div className="text-light-text-secondary dark:text-dark-text-secondary text-center text-sm">
              Copyright © {new Date().getFullYear()} UI Academy Docs. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/ui-academy/ui-academy-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text-secondary hover:text-light-primary dark:text-dark-text-secondary dark:hover:text-dark-primary transition-colors"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href="/license"
                className="text-light-text-secondary hover:text-light-primary dark:text-dark-text-secondary dark:hover:text-dark-primary transition-colors"
              >
                License
              </a>
              <span>|</span>
              <a
                href="/feedback"
                className="text-light-text-secondary hover:text-light-primary dark:text-dark-text-secondary dark:hover:text-dark-primary transition-colors"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
