import { Brain } from "lucide-react";
import { Reveal } from "../../../portfolio/components/ui/Reveal";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const categories = [
    { key: "1", title: t('resume.skills.category1'), desc: t('resume.skills.desc1') },
    { key: "2", title: t('resume.skills.category2'), desc: t('resume.skills.desc2') },
    { key: "3", title: t('resume.skills.category3'), desc: t('resume.skills.desc3') },
    { key: "4", title: t('resume.skills.category4'), desc: t('resume.skills.desc4') },
    { key: "5", title: t('resume.skills.category5'), desc: t('resume.skills.desc5') },
    { key: "6", title: t('resume.skills.category6'), desc: t('resume.skills.desc6') },
    { key: "7", title: t('resume.skills.category7'), desc: t('resume.skills.desc7') },
    { key: "8", title: t('resume.skills.category8'), desc: t('resume.skills.desc8') },
    { key: "9", title: t('resume.skills.category9'), desc: t('resume.skills.desc9') },
    { key: "10", title: t('resume.skills.category10'), desc: t('resume.skills.desc10') },
  ];

  return (
    <Reveal>
      <section className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 shadow-md">
        <h3 className="font-headline text-sm uppercase tracking-widest text-primary mb-8 flex items-center gap-2 font-bold">
          <Brain className="w-5 h-5" />
          {t('resume.skills.title')}
        </h3>
        <div className="space-y-4">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-2 border-b border-outline-variant/5 last:border-b-0 items-start"
            >
              <div className="sm:col-span-4">
                <h4 className="font-headline text-xs uppercase tracking-wider font-bold text-on-surface sm:text-on-surface-variant">
                  {cat.title}
                </h4>
              </div>
              <div className="sm:col-span-8">
                <p className="text-sm text-on-surface leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
