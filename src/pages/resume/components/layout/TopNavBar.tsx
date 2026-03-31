import { Terminal, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TopNavBar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto font-headline tracking-tight">
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold text-primary tracking-tighter hover:opacity-80"
          aria-label="Go to portfolio"
        >
          PHAM PHUOC TRUONG
        </button>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Terminal className="w-9 h-9 text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer" />
            <Code className="w-9 h-9 text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer" />
          </div>
          <a
            href="/phuoc_truong_cv.pdf"
            download
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2 rounded-md font-medium active:scale-95 duration-200 shadow-[0_10px_20px_rgba(5,84,215,0.3)] hover:opacity-90"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
