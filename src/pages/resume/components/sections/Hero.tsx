import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-4 leading-none">
          Phạm Phước <span className="text-primary">Trường</span>
        </h1>
        <h2 className="font-headline text-xl md:text-2xl text-secondary mb-8 font-medium uppercase">
          {t('resume.hero.title')}
        </h2>
        <div className="space-y-3 font-body text-on-surface-variant">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{t('resume.hero.location')}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:0812608562" className="hover:text-primary transition-colors">
              0812608562
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=phuoctruong727@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              phuoctruong727@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            <a href={`https://${t('resume.hero.website')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {t('resume.hero.website')}
            </a>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/15">
          <img
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            alt="Workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFIeqG7PNtTf31CPDtBU4GY-K5BlDg2pbMWjPk9-YV_wZAiDyytdBxoGtJSk8Q1jfwpBkJth_MZdwXo5_i7MsxA_dovmvRu8_Foy9dAEUgfa9wdA26fxUlhCe8OIoPCYgk4YjbpaKOAwWBGZ_bGjRtly3Z4taYae6epc8iZBRtIH2qn0XMOP9Oz2TNyj7QruZD6bsVEJi49lAsyxvldzs1jTuCdHgztlBIAnMpiH91bOPhWN5jWQi_AmRDF2xrAdvjp8gKrhC6Hw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
