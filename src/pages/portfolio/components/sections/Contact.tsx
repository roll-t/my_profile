import { Mail, Linkedin, Facebook, Github } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { useTranslation, Trans } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-8 overflow-hidden relative" id="contact">
      <div className="absolute inset-0 bg-primary-container opacity-5 mix-blend-overlay"></div>
      <Reveal className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface mb-8 tracking-tighter">
          <Trans i18nKey="portfolio.contact.title">
            Hãy Cùng Xây Dựng Những Điều <span className="text-primary">Tuyệt Vời</span>.
          </Trans>
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('portfolio.contact.desc')}
        </p>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-on-primary font-headline font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0px_10px_20px_rgba(255,77,77,0.2)] hover:shadow-[0px_15px_30px_rgba(255,77,77,0.4)] btn-hover-effect" href="https://mail.google.com/mail/?view=cm&fs=1&to=phuoctruong727@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5" />
              {t('portfolio.contact.email')}
            </a>
            <a className="flex items-center justify-center gap-3 px-10 py-5 border border-outline-variant/30 text-on-surface font-headline font-bold rounded-md hover:bg-surface-variant/30 transition-all btn-hover-effect" href="https://github.com/roll-t" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              {t('portfolio.contact.website')}
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/phuoc-truong-80430731a/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full border border-outline-variant/20 hover:border-secondary/50 text-on-surface hover:text-secondary transition-all hover:bg-secondary/5 bg-surface-container-high shadow-sm hover:scale-110 active:scale-95" title="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/phuoc.truong.36377" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full border border-outline-variant/20 hover:border-primary/50 text-on-surface hover:text-primary transition-all hover:bg-primary/5 bg-surface-container-high shadow-sm hover:scale-110 active:scale-95" title="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
