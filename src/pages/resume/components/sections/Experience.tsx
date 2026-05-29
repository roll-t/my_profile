import { Circle } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();

  const bullets = [
    "bullet1",
    "bullet2",
    "bullet3",
    "bullet4",
    "bullet5",
    "bullet6",
    "bullet7",
    "bullet8",
    "bullet9",
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          {t('resume.experience.title')}
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="relative pl-8 border-l-2 border-primary-container/30 space-y-12">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                {t('resume.experience.role')}
              </h3>
              <p className="text-primary font-semibold">{t('resume.experience.company', 'CSS Can Tho')}</p>
            </div>
            <div className="text-sm font-label text-on-surface-variant bg-surface-container-high px-3 py-1 rounded mt-2 md:mt-0">
              {t('resume.experience.date')}
            </div>
          </div>
          <ul className="space-y-4 text-on-surface-variant">
            {bullets.map((bulletKey) => (
              <li key={bulletKey} className="flex gap-3">
                <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
                <span className="text-sm leading-relaxed text-on-surface-variant">
                  <Trans
                    i18nKey={`resume.experience.${bulletKey}`}
                    components={{ 1: <span className="text-primary font-semibold" /> }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
