import { Languages as LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Languages() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
        <LanguagesIcon className="w-6 h-6 text-primary" />
        {t('resume.languages.title')}
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/15">
          <span className="text-on-surface">{t('resume.languages.en')}</span>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            {t('resume.languages.enLevel')}
          </span>
        </div>
        <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/15">
          <span className="text-on-surface">{t('resume.languages.vi')}</span>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            {t('resume.languages.viLevel')}
          </span>
        </div>
      </div>
    </section>
  );
}
