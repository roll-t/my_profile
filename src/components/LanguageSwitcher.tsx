import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('vi') ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-primary text-sm font-label font-bold"
      title="Toggle Language"
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language.startsWith('vi') ? 'VI' : 'EN'}</span>
    </button>
  );
}
