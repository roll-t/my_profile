import { ExternalLink } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Projects() {
  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Featured Projects</h2>
            <p className="text-on-surface-variant mt-2">Experimental builds and client solutions.</p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          <div className="flex gap-2">
            <span className="text-xs font-mono text-outline">FILTER:</span>
            <span className="text-xs font-mono text-primary font-bold underline underline-offset-4 cursor-pointer">ALL</span>
            <span className="text-xs font-mono text-outline cursor-pointer hover:text-on-surface">FLUTTER</span>
            <span className="text-xs font-mono text-outline cursor-pointer hover:text-on-surface">OPEN SOURCE</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Reveal delay={0.1} className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img alt="Modern food discovery mobile app interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64bL27CPEDjJYElteRAQ6m7cER-YuMFjCrh0ZIh2jMbL1qKmXSpwOQ6Fu6Ex6bqSY9c428Faz4U-_Oe8KUtYxfXbhLA6tC2b-Ot-tmrN-QsIWPIt_g_CvzKXTD4RdufTV5Vi1RwT1ZrVVbqsBhfU-mlQgs7bmYdLeuY8uPIKrcmOzQL2lj2FXc3Pf02it7KLueukJyGGmn0yygupy2WqAsqYWka0wzvBScrpJFnoP7HFKM4Kfs8ErcEIzWTpKF9h7b0iw6whrGg" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">Mobile App</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Ăn gì cũng được</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                A vibrant mobile application designed to solve the daily 'what to eat' dilemma through an engaging interface.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">CUSTOM WIDGETS</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">MAPS</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">FIREBASE</span>
              </div>
            </div>
          </Reveal>

          {/* Project 2 */}
          <Reveal delay={0.2} className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img alt="Minimalist productivity app UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCebJ5oKQwscRPvWxrUcHH2xWWrm0BsHmf6T3BVNIrqVjM5Q45MH8WnrWbIQzuk3EYLAfihEJHnZVxQ7da8OnJIz7xcrDAX2w7uuqJPg9mAMMKCuvcb8EmU6gkrZ5YGHTD8qsVBDV1U8LXsBmdzMSN8h121TTxtbgXG0okiLmyJYO4Y89utwbqkrwhlZLAuOi5OjFbt-ixdEGnTv-bRwN_Aw8O_1rruMi494F2e2Q8ANsAJMQoViRqQk-KwAWYoqhdlPo_vJDLtvg" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">Utility</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Keep Link</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                A streamlined link management tool focused on speed and organization. Minimalist UI for maximum productivity.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">CACHING</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">DEEP LINKING</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">HIVE</span>
              </div>
            </div>
          </Reveal>

          {/* Project 3 */}
          <Reveal delay={0.3} className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img alt="High-performance video feed app UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGpPI0xkuLm4QmtzwlPJ8aWY8RhiFmes0Gd3TBzYnygmYesIJs6rgoT50BCEgnxvvBMeVAArjxVRyitmWi8B4uB1jaQzt-IoqTlpQ_XGz228qbX0MO3d1jWu1oGP1lojwDJ8XStuOZE3ww84uLxD1HpE33zvOjTAdnRa-bEsAyL8Mf89OJgrW9RTEbZu9aWdZTCQN7PSrkgjF7H2gtpyIs1KC-aGCPO13GrzQL_Obg80NCE6OebIWukvcnjJXinv1rNcoK8Irzbg" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">Performance</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Advanced Video Player Feed</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                A social-style video feed featuring seamless scrolling and advanced video caching for instant playback.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">VIDEO_PLAYER</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">CACHE MANAGER</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">MVVM</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
