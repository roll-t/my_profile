import { Brain, CheckCircle2 } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const categories = [
    { key: "1", title: t('resume.skills.category1'), desc: t('resume.skills.desc1') },
    { key: "2", title: t('resume.skills.category2'), desc: t('resume.skills.desc2') },
    { key: "3", title: t('resume.skills.category3'), desc: t('resume.skills.desc3') },
    { key: "4", title: t('resume.skills.category4'), desc: t('resume.skills.desc4') },
    { key: "5", title: t('resume.skills.category5'), desc: t('resume.skills.desc5') },
    { key: "6", title: t('resume.skills.category6'), desc: t('resume.skills.desc6') },
  ];

  return (
    <>
      <Reveal>
        <section className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 mb-12">
          <h3 className="font-headline text-sm uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            {t('resume.skills.title')}
          </h3>
          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.key} className="flex gap-3 items-start group">
                <div className="mt-1 p-0.5 bg-primary/10 rounded text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-sm font-bold text-on-surface transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section>
          <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
            {t('resume.skills.stack')}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Flutter",
              "Dart",
              "GetX",
              "BLoC",
              "Android Native",
              "RESTful APIs",
              "Local Caching",
              "Video Performance",
              "Git",
              "Google Play",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-surface-container-high text-on-surface text-xs font-medium rounded-full border border-outline-variant/15 hover:border-primary/30 transition-all cursor-default"
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
