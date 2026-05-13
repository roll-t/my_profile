import { Brain } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <Reveal>
        <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/15 mb-12">
          <h3 className="font-headline text-sm uppercase tracking-widest text-primary mb-8">
            {t('resume.skills.title')}
          </h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>{t('resume.skills.skill1')}</span>
                <span className="text-secondary">95%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>{t('resume.skills.skill2')}</span>
                <span className="text-secondary">90%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[90%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>{t('resume.skills.skill3')}</span>
                <span className="text-secondary">85%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[85%]"></div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section>
          <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-primary" />
            {t('resume.skills.stack')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Flutter",
              "Dart",
              "GetX",
              "Bloc",
              "Android Native",
              "REST APIs",
              "Local Caching",
              "Video Performance",
              "Git",
              "Google Play",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-surface-container-high text-on-surface text-sm rounded-full border border-outline-variant/15 hover:bg-primary hover:text-on-primary transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
