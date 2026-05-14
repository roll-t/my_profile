import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  AlertCircle,
  Trophy,
  Clock,
  User,
  Layers,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Reveal } from "../portfolio/components/ui/Reveal";

interface ProjectMeta {
  techStack: string[];
  imageUrl: string;
  playLink: string;
}

const PROJECT_META: Record<string, ProjectMeta> = {
  "click-ed": {
    techStack: ["Flutter", "Dart", "Local Proxy Server", "GetX", "Video Player Pool", "Adaptive Bitrate (ABR)", "Hive DB", "Firebase"],
    imageUrl: "/lick_banner.png",
    playLink: "https://play.google.com/store/apps/details?id=realjobscomltd.clickqa"
  },
  "mydtu": {
    techStack: ["Flutter", "Dart", "GetX", "Dio Client", "Triple DES / MD5", "Local Search Algorithm", "Multi-Environment", "Timezone Notifications", "GetStorage / SharedPreferences"],
    imageUrl: "/my_dtu_banner.png",
    playLink: "https://play.google.com/store/apps/details?id=cse.duytan.edu.vn.my_dtu_mobile"
  },
  "linkeep": {
    techStack: ["Flutter", "Dart", "GetX", "SQLite", "Firebase Realtime DB", "In-Memory Cache", "Deep Linking", "Biometrics", "InAppWebView"],
    imageUrl: "/linkeep_banner.png",
    playLink: "https://play.google.com/store/apps/details?id=com.phamtruong.keeplink"
  },
  "realjobs": {
    techStack: ["Flutter", "Dart", "Clean Architecture", "GetX", "Multi-Flavors", "Network Interceptors", "Push Notifications", "HTML Dynamic UI", "Dio", "Firebase"],
    imageUrl: "/realjobs_banner.jpeg",
    playLink: "https://play.google.com/store/apps/details?id=realjobscomltd.realjobs"
  }
};

export default function ProjectDetailApp() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const projectId = id?.toLowerCase() || "";
  const meta = PROJECT_META[projectId];

  // Fallback if project not found
  if (!meta) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <AlertCircle className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-on-primary rounded-md font-bold"
        >
          Go Home
        </button>
      </div>
    );
  }

  // Features are stored as arrays in the localization file
  const features = t(`projectDetails.${projectId}.features`, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden">
      {/* Custom Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-2xl">
        <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-on-surface hover:text-primary font-headline font-bold tracking-tight transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('projectDetails.common.back')}</span>
          </button>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Dynamic Hero Banner */}
        <Reveal className="relative rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-video md:aspect-[21/9] mb-8 md:mb-12 border border-outline-variant/10 group shadow-2xl">
          <img
            src={meta.imageUrl}
            alt={t(`projectDetails.${projectId}.title`)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between w-full gap-4 sm:gap-6">
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-2 text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-2 md:mb-3">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Mobile Application
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter mb-1 md:mb-2">
                {t(`projectDetails.${projectId}.title`)}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-on-surface-variant font-medium max-w-2xl">
                {t(`projectDetails.${projectId}.subtitle`)}
              </p>
            </div>
            <a
              href={meta.playLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-headline font-bold text-sm md:text-md hover:bg-primary/90 shadow-[0px_10px_20px_rgba(255,77,77,0.3)] transition-all w-full md:w-auto shrink-0 h-fit btn-hover-effect"
            >
              {t('projectDetails.common.visitApp')}
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </Reveal>

        {/* Project Overview Dashboard Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          <Reveal delay={0.1} className="p-4 md:p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 md:p-3 bg-primary/10 rounded-xl shrink-0">
              <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs uppercase font-bold text-outline tracking-widest">{t('projectDetails.common.role')}</h4>
              <p className="text-sm md:text-base text-on-surface font-bold font-headline leading-tight">{t(`projectDetails.${projectId}.role`)}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="p-4 md:p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 md:p-3 bg-secondary/10 rounded-xl shrink-0">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs uppercase font-bold text-outline tracking-widest">{t('projectDetails.common.duration')}</h4>
              <p className="text-sm md:text-base text-on-surface font-bold font-headline leading-tight">{t(`projectDetails.${projectId}.duration`)}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="p-4 md:p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 md:p-3 bg-tertiary/10 rounded-xl shrink-0">
              <Layers className="w-5 h-5 md:w-6 md:h-6 text-tertiary" />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs uppercase font-bold text-outline tracking-widest">{t('projectDetails.common.techStack')}</h4>
              <p className="text-sm md:text-base text-on-surface font-bold font-headline leading-tight">{meta.techStack.slice(0, 3).join(" / ")}</p>
            </div>
          </Reveal>
        </div>

        {/* In-depth Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Tech Column */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">

            {/* Overview */}
            <Reveal>
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <Trophy className="text-primary w-5 h-5 md:w-7 md:h-7" />
                  {t('projectDetails.common.overview')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed font-body">
                  {t(`projectDetails.${projectId}.overview`)}
                </p>
              </section>
            </Reveal>

            <hr className="border-outline-variant/10" />

            {/* Challenge */}
            <Reveal delay={0.1}>
              <section className="p-5 md:p-8 rounded-2xl bg-error-container/5 border border-error/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-3xl"></div>
                <h2 className="text-xl sm:text-2xl font-headline font-bold text-error mb-4 md:mb-6 flex items-center gap-3 z-10 relative">
                  <AlertCircle className="w-5 h-5 md:w-7 md:h-7" />
                  {t('projectDetails.common.challenge')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed z-10 relative">
                  {t(`projectDetails.${projectId}.challenge`)}
                </p>
              </section>
            </Reveal>

            {/* Solution */}
            <Reveal delay={0.2}>
              <section className="p-5 md:p-8 rounded-2xl bg-surface-container border border-primary/10 relative overflow-hidden">
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <h2 className="text-xl sm:text-2xl font-headline font-bold text-primary mb-4 md:mb-6 flex items-center gap-3 z-10 relative">
                  <Cpu className="w-5 h-5 md:w-7 md:h-7" />
                  {t('projectDetails.common.solution')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed z-10 relative">
                  {t(`projectDetails.${projectId}.solution`)}
                </p>
              </section>
            </Reveal>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-6 md:space-y-10">

            {/* Tech Badges Card */}
            <Reveal className="glass-panel p-5 md:p-8 rounded-2xl border border-outline-variant/10 shadow-lg">
              <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-4 md:mb-6 pb-3 md:pb-4 border-b border-outline-variant/10">
                {t('projectDetails.common.techStack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {meta.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary border border-outline-variant/5 hover:border-primary/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Key Deliverables / Features Card */}
            <Reveal className="bg-surface-container p-5 md:p-8 rounded-2xl border border-outline-variant/10 shadow-lg">
              <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-4 md:mb-6">
                Key Features
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {Array.isArray(features) && features.map((feature, idx) => (
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                    className="flex gap-2.5 text-on-surface-variant font-medium text-xs sm:text-sm items-start"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>

          </div>
        </div>
      </main>
    </div>
  );
}
