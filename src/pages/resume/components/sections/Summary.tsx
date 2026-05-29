import { useTranslation, Trans } from "react-i18next";

export function Summary() {
  const { t } = useTranslation();
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0">
          <span className="font-headline text-primary font-bold tracking-tighter text-sm uppercase px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            {t('resume.summary.title')}
          </span>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant mb-4">
            <Trans
              i18nKey="resume.summary.p1"
              components={{ 1: <span className="text-on-surface font-semibold" /> }}
            />
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant mb-4">
            <Trans
              i18nKey="resume.summary.p2"
              components={{ 1: <span className="text-on-surface font-semibold" /> }}
            />
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant">
            <Trans
              i18nKey="resume.summary.p3"
              components={{ 1: <span className="text-on-surface font-semibold" /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
