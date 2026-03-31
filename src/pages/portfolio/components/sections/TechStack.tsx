import { Cloud, Database, Layers, Network, Smartphone, Wrench } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function TechStack() {
  return (
    <section className="py-24 px-8" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold mb-4">The Laboratory</h2>
          <p className="text-on-surface-variant">The tools and frameworks I use to engineer performance-driven apps.</p>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Core */}
          <Reveal delay={0.1} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Smartphone className="text-primary w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">Frameworks & Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">Flutter</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">Dart (Advanced)</span>
            </div>
          </Reveal>

          {/* State */}
          <Reveal delay={0.2} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-secondary/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Network className="text-secondary w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">State Management</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">GetX</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">Provider</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">Bloc</span>
            </div>
          </Reveal>

          {/* Backend */}
          <Reveal delay={0.3} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-tertiary/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Cloud className="text-tertiary w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">Backend & APIs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">Firebase</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">RESTful APIs</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">JSON Integration</span>
            </div>
          </Reveal>

          {/* Architecture */}
          <Reveal delay={0.1} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Layers className="text-primary w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">Architecture</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">Clean Architecture</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">MVVM</span>
            </div>
          </Reveal>

          {/* Database */}
          <Reveal delay={0.2} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-secondary/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Database className="text-secondary w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">Specialties</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">UI/UX Implementation</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">Video Caching</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors">Hive / Sqflite</span>
            </div>
          </Reveal>

          {/* Tools */}
          <Reveal delay={0.3} className="p-8 rounded-lg bg-surface-container border border-outline-variant/10 hover:border-outline/30 transition-all group tech-card">
            <div className="flex items-center gap-4 mb-6">
              <Wrench className="text-on-surface-variant w-8 h-8" />
              <h3 className="text-xl font-headline font-bold">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-on-surface group-hover:text-background transition-colors">Git</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-on-surface group-hover:text-background transition-colors">Postman</span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-surface-container-high text-on-surface-variant group-hover:bg-on-surface group-hover:text-background transition-colors">VS Code</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
