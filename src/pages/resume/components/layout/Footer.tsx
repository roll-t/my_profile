export function Footer() {
  return (
    <footer className="bg-background w-full py-12 border-t border-outline-variant/15 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto font-body text-sm leading-relaxed">
        <div className="text-on-surface-variant mb-6 md:mb-0">
          © 2026 Pham Phuoc Truong
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/roll-t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/phuoc-truong-80430731a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/phuoc.truong.36377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=phuoctruong727@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
