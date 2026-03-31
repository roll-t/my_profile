export function Footer() {
  return (
    <footer className="bg-background w-full py-12 border-t border-outline-variant/15 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto font-body text-sm leading-relaxed">
        <div className="text-on-surface-variant mb-6 md:mb-0">
          © 2024 Phuoc Truong • Built with Flutter Web
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Github
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            StackOverflow
          </a>
        </div>
      </div>
    </footer>
  );
}
