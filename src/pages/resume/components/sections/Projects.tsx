import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = [
    {
      id: "click-ed",
      name: "CLICK-Ed",
      typeKey: "resume.projects.p1Type",
      descKey: "resume.projects.p1Desc",
      route: "/project/click-ed",
      bullets: ["p1B1", "p1B2", "p1B3", "p1B4", "p1B5", "p1B6"],
      tags: ["HLS · Local Proxy", "ABR · Object Pool", "Async Semaphore", "Offline-First"],
    },
    {
      id: "mydtu",
      name: "MyDTU",
      typeKey: "resume.projects.p2Type",
      descKey: "resume.projects.p2Desc",
      route: "/project/mydtu",
      bullets: ["p2B1", "p2B2", "p2B3", "p2B4"],
      tags: ["Flutter", "State Management", "API Integration"],
    },
    {
      id: "linkeep",
      name: "Linkeep",
      typeKey: "resume.projects.p3Type",
      descKey: "resume.projects.p3Desc",
      route: "/project/linkeep",
      bullets: ["p3B1", "p3B2", "p3B3", "p3B4"],
      tags: ["Offline-First", "Deep Link", "Biometrics", "SQLite"],
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          {t('resume.projects.title')}
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <div key={proj.id}>
            <Reveal delay={idx * 0.1}>
            <div
              className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group cursor-pointer"
              onClick={() => navigate(proj.route)}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                    {t(proj.typeKey)}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {proj.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
                {t(proj.descKey)}
              </p>
              <ul className="list-disc list-outside ml-4 text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
                {proj.bullets.map((bulletKey) => (
                  <li key={bulletKey}>
                    <Trans
                      i18nKey={`resume.projects.${bulletKey}`}
                      components={{ 1: <strong className="text-on-surface font-semibold" /> }}
                    />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
