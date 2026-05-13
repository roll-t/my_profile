import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0f141a] w-full py-12 border-t border-[#b3c5ff]/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-[#b3c5ff] font-bold font-headline">Pham Phuoc Truong</div>
          <p className="font-body text-sm text-slate-400">{t('portfolio.footer.copyright')}</p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="https://github.com/roll-t" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="https://www.linkedin.com/in/phuoc-truong-80430731a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="https://www.facebook.com/phuoc.truong.36377" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="text-slate-500 hover:text-[#b3c5ff] transition-colors duration-200" href="https://mail.google.com/mail/?view=cm&fs=1&to=phuoctruong727@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
}
