import { Brain } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";

export function Skills() {
  return (
    <>
      <Reveal>
        <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/15 mb-12">
          <h3 className="font-headline text-sm uppercase tracking-widest text-primary mb-8">
            Technical Proficiency
          </h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>Flutter & Dart</span>
                <span className="text-secondary">98%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[98%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>State Management (GetX/Bloc)</span>
                <span className="text-secondary">95%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-label text-on-surface-variant mb-2">
                <span>CI/CD & Deployment</span>
                <span className="text-secondary">88%</span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[88%]"></div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section>
          <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-primary" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Flutter",
              "Dart",
              "GetX",
              "Bloc",
              "Firebase",
              "Rest API",
              "Git / GitHub",
              "Postman",
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
