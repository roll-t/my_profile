import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";

export function Projects() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          Key Projects
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="space-y-6">
        <Reveal>
          <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  Social Education
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Click-ed
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              A specialized educational social network focusing on
              video-based learning. Implemented custom performance
              optimizations and sophisticated resource management for
              seamless content delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Flutter
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Firebase
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                HLS Streaming
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  Management Portal
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  MyDTU
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              Student management platform. Responsible for architectural
              design, maintenance, and streamlining release & deployment
              pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Clean Architecture
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                CI/CD
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                GetX
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  Hiring Tech
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  RealJobs
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              Modern job search application. Maintained core
              infrastructure and optimized application load times for
              improved candidate experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Bloc
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                GraphQL
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
