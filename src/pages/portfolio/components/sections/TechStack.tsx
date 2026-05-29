import { type ReactNode } from 'react';
import { Cloud, Database, GitBranch, Layers, Network, Radio, Smartphone, Video, Zap } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { useTranslation } from 'react-i18next';

const TAG_BASE = "px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant transition-colors";

function TechCard({
  delay,
  icon,
  title,
  tags,
  hoverColor = "primary",
  children,
}: {
  delay?: number;
  icon: ReactNode;
  title: string;
  tags: string[];
  hoverColor?: "primary" | "secondary" | "tertiary" | "surface";
  children?: ReactNode;
}) {
  const hoverMap: Record<string, string> = {
    primary: "hover:border-primary/30   group-hover:bg-primary   group-hover:text-on-primary",
    secondary: "hover:border-secondary/30 group-hover:bg-secondary group-hover:text-on-secondary",
    tertiary: "hover:border-tertiary/30  group-hover:bg-tertiary  group-hover:text-on-tertiary",
    surface: "hover:border-outline/30   group-hover:bg-on-surface group-hover:text-background",
  };

  const borderHover = hoverMap[hoverColor].split(" ")[0];
  const tagHover = hoverMap[hoverColor].split(" ").slice(1).join(" ");

  return (
    <Reveal
      delay={delay}
      className={`p-8 rounded-lg bg-surface-container border border-outline-variant/10 ${borderHover} transition-all group tech-card`}
    >
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h3 className="text-xl font-headline font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className={`${TAG_BASE} ${tagHover}`}>
            {tag}
          </span>
        ))}
      </div>
      {children}
    </Reveal>
  );
}

export function TechStack() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-8" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold mb-4">{t('portfolio.tech.title')}</h2>
          <p className="text-on-surface-variant">{t('portfolio.tech.subtitle')}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Mobile */}
          <TechCard
            delay={0.1}
            hoverColor="primary"
            icon={<Smartphone className="text-primary w-8 h-8" />}
            title="Mobile"
            tags={["Flutter (Dart)", "Android Native", "Platform Channels"]}
          />

          {/* Architecture */}
          <TechCard
            delay={0.2}
            hoverColor="primary"
            icon={<Layers className="text-primary w-8 h-8" />}
            title="Architecture"
            tags={["Clean Architecture", "SOLID", "Mixin-based Decomposition"]}
          />

          {/* State Mgmt */}
          <TechCard
            delay={0.3}
            hoverColor="secondary"
            icon={<Network className="text-secondary w-8 h-8" />}
            title="State Mgmt"
            tags={["GetX (Reactive + DI)", "BLoC"]}
          />

          {/* Async / Concurrency */}
          <TechCard
            delay={0.1}
            hoverColor="tertiary"
            icon={<Zap className="text-tertiary w-8 h-8" />}
            title="Async / Concurrency"
            tags={["Custom Semaphore", "Generation Guard", "CancelableOperation"]}
          />

          {/* Video Streaming */}
          <TechCard
            delay={0.2}
            hoverColor="secondary"
            icon={<Video className="text-secondary w-8 h-8" />}
            title="Video Streaming"
            tags={["HLS (m3u8/ts)", "Local Proxy", "ABR", "VideoPlayerController"]}
          />

          {/* Networking */}
          <TechCard
            delay={0.3}
            hoverColor="tertiary"
            icon={<Cloud className="text-tertiary w-8 h-8" />}
            title="Networking"
            tags={["RESTful APIs", "Dio", "HTTP Socket", "Retry / Backoff"]}
          />

          {/* Performance */}
          <TechCard
            delay={0.1}
            hoverColor="primary"
            icon={<Radio className="text-primary w-8 h-8" />}
            title="Performance"
            tags={["Object Pool", "RAM Eviction", "CPU/GPU Profiling", "Thermal Control"]}
          />

          {/* Storage */}
          <TechCard
            delay={0.2}
            hoverColor="secondary"
            icon={<Database className="text-secondary w-8 h-8" />}
            title="Storage"
            tags={["SharedPreferences", "SQLite", "File I/O", "Firebase Realtime DB"]}
          />

          {/* Delivery */}
          <TechCard
            delay={0.3}
            hoverColor="surface"
            icon={<GitBranch className="text-on-surface-variant w-8 h-8" />}
            title="Delivery"
            tags={["Git", "Google Play Console", "CI/CD basics"]}
          />

        </div>
      </div>
    </section>
  );
}
