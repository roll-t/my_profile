export function Footer() {
  return (
    <footer className="bg-[#0f141a] w-full py-12 border-t border-[#b3c5ff]/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-[#b3c5ff] font-bold font-headline">Phuoc Truong</div>
          <p className="font-body text-sm text-slate-400">© 2024 Phuoc Truong. Built with Flutter & Precision.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="#">GitHub</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="#">LinkedIn</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="#">Twitter</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
