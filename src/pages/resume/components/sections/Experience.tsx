import { Circle } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-2xl font-bold tracking-tight">
          {t('resume.experience.title')}
        </h2>
        <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
      </div>
      <div className="relative pl-8 border-l-2 border-primary-container/30 space-y-12">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                {t('resume.experience.role')}
              </h3>
              <p className="text-primary font-medium">CSS Can Tho</p>
            </div>
            <div className="text-sm font-label text-on-surface-variant bg-surface-container-high px-3 py-1 rounded mt-2 md:mt-0">
              {t('resume.experience.date')}
            </div>
          </div>
          <ul className="space-y-4 text-on-surface-variant">
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                <Trans i18nKey="resume.experience.bullet1">
                  Xử lý các yêu cầu phức tạp về truyền phát đa phương tiện bằng cách triển khai <span className="text-primary">HTTP Live Streaming (HLS)</span>, tạo proxy cục bộ (local proxy) trên thiết bị và xây dựng các cơ chế mạng/bộ nhớ đệm mạnh mẽ để đảm bảo quá trình phát video không bị gián đoạn.
                </Trans>
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                <Trans i18nKey="resume.experience.bullet2">
                  Thiết kế và xây dựng tính năng <span className="text-primary">nguồn cấp dữ liệu video (video feed)</span> với hiệu suất cao, tối ưu hóa đáng kể độ mượt mà khi cuộn và giảm thiểu dung lượng tải trước (pre-load) của video để mang lại trải nghiệm người dùng liền mạch.
                </Trans>
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                <Trans i18nKey="resume.experience.bullet3">
                  Thiết kế các kiến trúc mã nguồn có khả năng mở rộng và dễ bảo trì bằng cách áp dụng nghiêm ngặt các nguyên lý <span className="text-primary">OOP và SOLID</span>.
                </Trans>
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                {t('resume.experience.bullet4')}
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                {t('resume.experience.bullet5')}
              </span>
            </li>
            <li className="flex gap-3">
              <Circle className="w-2.5 h-2.5 text-secondary mt-1.5 shrink-0 fill-current" />
              <span>
                <Trans i18nKey="resume.experience.bullet6">
                  Tích cực tham gia vào việc bảo trì ứng dụng liên tục, bao gồm gỡ lỗi (debugging) kỹ lưỡng, theo dõi hiệu suất và giải quyết các vấn đề tuân thủ chính sách của <span className="text-primary">Google Play</span> để đảm bảo các bản cập nhật diễn ra trơn tru.
                </Trans>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
