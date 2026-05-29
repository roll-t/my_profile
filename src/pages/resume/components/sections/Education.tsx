import { GraduationCap } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export function Education() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-primary" />
        {t('resume.education.title')}
      </h2>
      <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15">
        <h4 className="text-on-surface font-bold mb-1">
          {t('resume.education.degree')}
        </h4>
        <p className="text-primary text-sm mb-4">{t('resume.education.school')}</p>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          <Trans
            i18nKey="resume.education.desc"
            components={{ 1: <strong className="text-on-surface" /> }}
          />
        </p>
      </div>
    </section>
  );
}
