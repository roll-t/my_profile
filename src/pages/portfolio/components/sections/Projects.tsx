import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Filter = 'ALL' | 'RELEASED' | 'OPEN SOURCE';

interface Project {
  id: string;
  name: string;
  typeKey: string;
  descKey: string;
  image: string;
  imageAlt: string;
  tags: string[];
  isFlutter: boolean;
  isOpenSource?: boolean;
  route?: string;
  githubUrl?: string;
  delay: number;
}

const PROJECTS: Project[] = [
  {
    id: 'click-ed',
    name: 'CLICK-Ed',
    typeKey: 'portfolio.projects.p1Type',
    descKey: 'portfolio.projects.p1Desc',
    image: '/lick_banner.png',
    imageAlt: 'CLICK-Ed educational social network app',
    tags: ['FLUTTER', 'LOCAL PROXY', 'PLAYER POOL'],
    isFlutter: true,
    route: '/project/click-ed',
    delay: 0.1,
  },
  {
    id: 'mydtu',
    name: 'MyDTU',
    typeKey: 'portfolio.projects.p2Type',
    descKey: 'portfolio.projects.p2Desc',
    image: '/my_dtu_banner.png',
    imageAlt: 'MyDTU student portal app',
    tags: ['TRIPLE DES / MD5', 'GETX', 'ZERO LAG SEARCH'],
    isFlutter: true,
    route: '/project/mydtu',
    delay: 0.2,
  },
  {
    id: 'linkeep',
    name: 'Linkeep',
    typeKey: 'portfolio.projects.p3Type',
    descKey: 'portfolio.projects.p3Desc',
    image: '/linkeep_banner.png',
    imageAlt: 'Linkeep link management app',
    tags: ['HYBRID CACHE', 'OFFLINE-FIRST', 'BIOMETRICS'],
    isFlutter: true,
    route: '/project/linkeep',
    delay: 0.3,
  },
  {
    id: 'realjobs',
    name: 'RealJobs',
    typeKey: 'portfolio.projects.p4Type',
    descKey: 'portfolio.projects.p4Desc',
    image: '/realjobs_banner.jpeg',
    imageAlt: 'RealJobs mobile recruitment ecosystem',
    tags: ['CLEAN ARCHITECTURE', 'GETX', 'MULTI-FLAVORS'],
    isFlutter: true,
    route: '/project/realjobs',
    delay: 0.4,
  },
  // Open Source
  {
    id: 'food-quest',
    name: 'FoodQuest',
    typeKey: 'portfolio.projects.p5Type',
    descKey: 'portfolio.projects.p5Desc',
    image: 'https://opengraph.githubassets.com/1/roll-t/food_quest',
    imageAlt: 'FoodQuest food discovery Flutter app',
    tags: ['FLUTTER', 'FIREBASE', 'MULTI-FLAVOR'],
    isFlutter: true,
    isOpenSource: true,
    route: '/project/food-quest',
    delay: 0.1,
  },
  {
    id: 'bookara',
    name: 'Bookara',
    typeKey: 'portfolio.projects.p6Type',
    descKey: 'portfolio.projects.p6Desc',
    image: 'https://opengraph.githubassets.com/1/roll-t/reading_app',
    imageAlt: 'Bookara reading app for comics and novels',
    tags: ['FLUTTER', 'GETX', 'SQFLITE', 'OFFLINE'],
    isFlutter: true,
    isOpenSource: true,
    route: '/project/bookara',
    delay: 0.2,
  },
  {
    id: 'auto-fin',
    name: 'AutoFin',
    typeKey: 'portfolio.projects.p7Type',
    descKey: 'portfolio.projects.p7Desc',
    image: 'https://opengraph.githubassets.com/1/roll-t/auto_fin',
    imageAlt: 'AutoFin personal finance automation Flutter app',
    tags: ['FLUTTER', 'FINANCE', 'AUTOMATION'],
    isFlutter: true,
    isOpenSource: true,
    route: '/project/auto-fin',
    delay: 0.3,
  },
];

export function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL');

  const filters: Filter[] = ['ALL', 'RELEASED', 'OPEN SOURCE'];

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'RELEASED') return !p.isOpenSource;
    if (activeFilter === 'OPEN SOURCE') return !!p.isOpenSource;
    return true;
  });

  const handleClick = (project: Project) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else if (project.route) {
      navigate(project.route);
    }
  };

  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">
              {t('portfolio.projects.title')}
            </h2>
            <p className="text-on-surface-variant mt-2">{t('portfolio.projects.subtitle')}</p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block" />
          {/* Filter bar */}
          <div className="flex items-center gap-1 bg-surface-container rounded-full px-3 py-1.5 border border-outline-variant/15">
            <span className="text-[0.65rem] font-mono text-outline mr-2 tracking-wider">FILTER:</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`
                  text-[0.65rem] font-mono font-bold px-3 py-1 rounded-full transition-all
                  ${activeFilter === f
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-outline hover:text-on-surface hover:bg-surface-container-high'}
                `}
              >
                {f === 'ALL' && t('portfolio.projects.filterAll')}
                {f === 'RELEASED' && t('portfolio.projects.filterReleased')}
                {f === 'OPEN SOURCE' && t('portfolio.projects.filterOpenSource')}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="h-full flex flex-col">
              <Reveal
                delay={project.delay}
                className="group flex flex-col h-full bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
                onClick={() => handleClick(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="label-md uppercase text-[0.6875rem] font-bold text-secondary tracking-widest">
                      {t(project.typeKey)}
                    </span>
                    {project.isOpenSource ? (
                      <Github className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4">{project.name}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {t(project.descKey)}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-surface-bright/50 backdrop-blur-md rounded text-[10px] font-bold text-outline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
