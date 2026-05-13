import { Reveal } from '../ui/Reveal';
import { useTranslation, Trans } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-8">
              <Trans i18nKey="portfolio.about.title">
                Bridging Sophistication with <span className="text-secondary">Simplicity</span>
              </Trans>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7">
            <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
              {t('portfolio.about.p1')}
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              <Trans i18nKey="portfolio.about.p2">
                Thành thạo trong việc phân tích các yêu cầu UI/UX và tận dụng các framework hiện đại như <span className="text-on-surface font-semibold">Flutter</span> để mang lại trải nghiệm di động trực quan, hiệu suất cao và lấy người dùng làm trung tâm.
              </Trans>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
