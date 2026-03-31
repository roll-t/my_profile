import { Circle } from "lucide-react";

export function Experience() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          Work Experience
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="relative pl-8 border-l-2 border-primary-container/30 space-y-12">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                Mobile Developer
              </h3>
              <p className="text-primary font-medium">CSS Can Tho</p>
            </div>
            <div className="text-sm font-label text-on-surface-variant bg-surface-container-high px-3 py-1 rounded mt-2 md:mt-0">
              May 2024 - Present
            </div>
          </div>
          <ul className="space-y-4 text-on-surface-variant">
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                Engineered high-performance video streaming integration
                using <span className="text-primary">HLS protocols</span>.
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                Developed a <span className="text-primary">Local Proxy</span>{" "}
                solution to significantly reduce latency in real-time
                feeds.
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                Led Flutter UI/UX revamps ensuring smooth transitions
                and complex animations.
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                Managed full lifecycle deployments ensuring{" "}
                <span className="text-primary">Play Store compliance</span>.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
