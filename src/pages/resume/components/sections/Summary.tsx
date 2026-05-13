import { useTranslation, Trans } from "react-i18next";

export function Summary() {
  const { t } = useTranslation();
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0">
          <span className="font-headline text-primary font-bold tracking-tighter text-sm uppercase px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            {t('resume.summary.title')}
          </span>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant mb-4">
            <Trans i18nKey="resume.summary.p1">
              Là một <span className="text-on-surface font-semibold">Mobile Developer</span> thành thạo với nền tảng kỹ thuật vững chắc trong việc phát triển ứng dụng đa nền tảng (cross-platform).
            </Trans>
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant mb-4">
            <Trans i18nKey="resume.summary.p2">
              Có chuyên môn sâu sắc và đã được chứng minh về <span className="text-on-surface font-semibold">kiến trúc phần mềm</span>, tổ chức mã nguồn sạch (clean code) và áp dụng các nguyên lý OOP, SOLID để xây dựng các giải pháp có khả năng mở rộng và dễ bảo trì.
            </Trans>
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed text-on-surface-variant">
            <Trans i18nKey="resume.summary.p3">
              Thành thạo trong việc phân tích các yêu cầu UI/UX và tận dụng các framework hiện đại như <span className="text-on-surface font-semibold">Flutter</span> để mang lại trải nghiệm di động trực quan, hiệu suất cao và lấy người dùng làm trung tâm.
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}
