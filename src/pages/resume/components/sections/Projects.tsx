import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          {t('resume.projects.title')}
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="space-y-6">
        <Reveal>
          <div 
            className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => navigate('/project/click-ed')}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  {t('resume.projects.p1Type')}
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  CLICK-Ed
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
              {t('resume.projects.p1Desc')}
            </p>
            <ul className="list-disc list-outside ml-4 text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
              <li>
                <Trans i18nKey="resume.projects.p1B1">
                  <strong className="text-on-surface">Mobile Video Performance:</strong> Optimized feed rendering and playback lifecycle with pooled video controllers and bounded async initialization, delivering smooth scrolling and stable long-session playback while reducing CPU spikes and thermal risk.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p1B2">
                  <strong className="text-on-surface">Resource Management:</strong> Implemented multi-layer caching and network-aware video delivery (memory + disk cache, cache pruning, request optimization) to lower bandwidth usage, reduce local storage growth, and improve startup/playback consistency.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p1B3">
                  <strong className="text-on-surface">Playback Reliability:</strong> Added lifecycle-safe navigation and controller cleanup guards to prevent duplicate player instances, race conditions, and playback conflicts across screens.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Flutter
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Video Performance
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Caching System
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div 
            className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => navigate('/project/mydtu')}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  {t('resume.projects.p2Type')}
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  MyDTU
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
              {t('resume.projects.p2Desc')}
            </p>
            <ul className="list-disc list-outside ml-4 text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
              <li>
                <Trans i18nKey="resume.projects.p2B1">
                  <strong className="text-on-surface">Architecture & Maintenance:</strong> Restructured the application's codebase to enhance scalability, while actively maintaining and debugging the app to ensure stable, long-term performance.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p2B2">
                  <strong className="text-on-surface">Performance Optimization:</strong> Built a robust local caching system and optimized network handling to significantly reduce redundant API requests, improving app responsiveness and reducing server load.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p2B3">
                  <strong className="text-on-surface">Release & Deployment:</strong> Handled regular version updates and managed the end-to-end deployment process on the Google Play Console.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Flutter
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                State Management
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                API Integration
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div 
            className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => navigate('/project/linkeep')}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  {t('resume.projects.p3Type')}
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Linkeep
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
              {t('resume.projects.p3Desc')}
            </p>
            <ul className="list-disc list-outside ml-4 text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
              <li>{t('resume.projects.p3B1')}</li>
              <li>{t('resume.projects.p3B2')}</li>
              <li>{t('resume.projects.p3B3')}</li>
              <li>{t('resume.projects.p3B4')}</li>
              <li>{t('resume.projects.p3B5')}</li>
              <li>{t('resume.projects.p3B6')}</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Offline-First
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Deep Link
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Biometrics
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                SQLite
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
