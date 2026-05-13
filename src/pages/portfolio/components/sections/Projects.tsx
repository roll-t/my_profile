import { ExternalLink } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">{t('portfolio.projects.title')}</h2>
            <p className="text-on-surface-variant mt-2">{t('portfolio.projects.subtitle')}</p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          <div className="flex gap-2">
            <span className="text-xs font-mono text-outline">FILTER:</span>
            <span className="text-xs font-mono text-primary font-bold underline underline-offset-4 cursor-pointer">{t('portfolio.projects.filterAll')}</span>
            <span className="text-xs font-mono text-outline cursor-pointer hover:text-on-surface">FLUTTER</span>
            <span className="text-xs font-mono text-outline cursor-pointer hover:text-on-surface">OPEN SOURCE</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Reveal 
            delay={0.1} 
            className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
            onClick={() => navigate('/project/click-ed')}
          >
            <div className="aspect-video overflow-hidden">
              <img alt="Modern food discovery mobile app interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/lick_banner.png" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">{t('portfolio.projects.p1Type')}</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">CLICK-Ed</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {t('portfolio.projects.p1Desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">FLUTTER</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">LOCAL PROXY</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">PLAYER POOL</span>
              </div>
            </div>
          </Reveal>

          {/* Project 2 */}
          <Reveal 
            delay={0.2} 
            className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
            onClick={() => navigate('/project/mydtu')}
          >
            <div className="aspect-video overflow-hidden">
              <img alt="Minimalist productivity app UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/my_dtu_banner.png" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">{t('portfolio.projects.p2Type')}</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">MyDTU</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {t('portfolio.projects.p2Desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">TRIPLE DES / MD5</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">GETX</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">ZERO LAG SEARCH</span>
              </div>
            </div>
          </Reveal>

          {/* Project 3 */}
          <Reveal 
            delay={0.3} 
            className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
            onClick={() => navigate('/project/linkeep')}
          >
            <div className="aspect-video overflow-hidden">
              <img alt="High-performance video feed app UI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/linkeep_banner.png" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">{t('portfolio.projects.p3Type')}</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Linkeep</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {t('portfolio.projects.p3Desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">HYBRID CACHE</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">OFFLINE-FIRST</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">BIOMETRICS</span>
              </div>
            </div>
          </Reveal>

          {/* Project 4 */}
          <Reveal 
            delay={0.4} 
            className="group flex flex-col bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
            onClick={() => navigate('/project/realjobs')}
          >
            <div className="aspect-video overflow-hidden">
              <img alt="RealJobs mobile application ecosystem interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/realjobs_banner.jpeg" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">{t('portfolio.projects.p4Type')}</span>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">RealJobs</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {t('portfolio.projects.p4Desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">CLEAN ARCHITECTURE</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">GETX</span>
                <span className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline">MULTI-FLAVORS</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
