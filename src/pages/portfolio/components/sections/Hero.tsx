import { motion } from 'motion/react';
import { Gauge } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Hero() {
  return (
    <section className="relative min-h-[819px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <Reveal className="z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
            Available for Projects
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-tight tracking-tighter mb-6">
            Crafting Seamless <span className="text-primary italic">Mobile Experiences</span> with Flutter
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Hi, I'm Phuoc Truong. A dedicated Mobile Developer specialized in building high-performance, cross-platform applications. I turn complex ideas into elegant, fluid, and user-friendly digital realities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-md shadow-[0px_10px_20px_rgba(5,_84_215_0.3)] hover:shadow-[0px_15px_30px_rgba(5,_84_215_0.4)] transition-all btn-hover-effect" href="#projects">
              View My Work
            </a>
            <a className="px-8 py-4 border border-outline-variant/20 text-primary font-headline font-bold rounded-md hover:bg-surface-variant/30 transition-all btn-hover-effect" href="#contact">
              Let's Talk
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative hidden lg:block">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 p-8 glass-panel rounded-2xl border border-outline-variant/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/50"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
              </div>
              <div className="text-xs text-on-surface-variant font-mono">flutter_main.dart</div>
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-1">
              <p className="text-tertiary">void <span className="text-secondary">main</span>() {'{'}</p>
              <p className="pl-4 text-on-surface-variant">runApp(const <span className="text-primary">PhuocTruongPortfolio</span>());</p>
              <p className="text-tertiary">{'}'}</p>
              <p className="pt-4 text-outline">/* Building fluid UI with */</p>
              <p className="text-on-surface-variant">WidgetsBinding.instance.addPostFrameCallback((_) {'{'})</p>
              <p className="pl-4 text-secondary">optimizePerformance();</p>
              <p className="pl-4 text-primary">renderBeautifulUI();</p>
              <p className="text-on-surface-variant">{'});'}</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-10 -left-10 p-6 bg-surface-container-high rounded-xl shadow-xl border border-outline-variant/10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Gauge className="text-secondary w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-on-surface-variant">Performance Score</div>
                <div className="text-xl font-bold font-headline text-secondary">99.9%</div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
