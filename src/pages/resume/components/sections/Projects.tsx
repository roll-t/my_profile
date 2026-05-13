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
                  <strong className="text-on-surface">Kiến trúc Local Proxy Server:</strong> Triển khai local web server bằng thư viện shelf trên thiết bị để đánh chặn m3u8, hỗ trợ CDN Token Injection và Progressive HLS Segment Caching mượt mà như TikTok.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p1B2">
                  <strong className="text-on-surface">Tối ưu Pool & RAM:</strong> Xây dựng VideoPlayerPoolManager tái sử dụng controller cố định qua GetX, tự động giải tỏa imageCache/pause ngầm chủ động khi có áp lực bộ nhớ (didHaveMemoryPressure).
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p1B3">
                  <strong className="text-on-surface">Tải trước & Adaptive Bitrate:</strong> Thiết kế thuật toán tải trước thông minh sử dụng Epoch Tracking, nhường băng thông (Cooperative Bandwidth), CPU Yielding và tự động lựa chọn bitrate tối ưu nhất (ABR) theo tốc độ mạng thực tế.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Flutter
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Local Proxy Server
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Video Player Pool
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
                  <strong className="text-on-surface">Bảo mật 3DES & MD5 Signature:</strong> Áp dụng cơ chế mã hóa Triple DES (ECB Mode, PKCS7 Padding) kết hợp băm MD5 sinh Signature Token đính kèm header, chống giả mạo dữ liệu API tuyệt đối.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p2B2">
                  <strong className="text-on-surface">Tối ưu UI Form & Ảnh:</strong> Xây dựng ScrollToErrorMixin và ExpandController tự động hóa form dài. Tích hợp thuật toán nén ảnh theo chu kỳ (&lt; 300KB) đảm bảo chất lượng tải lên tối ưu.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p2B3">
                  <strong className="text-on-surface">Local Search & Timezone Noti:</strong> Phát triển thuật toán tìm kiếm cục bộ Zero Lag (Debounce 300ms + loại bỏ dấu) kết hợp đồng bộ hóa múi giờ để nhắc nhở lịch học chính xác.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Triple DES / MD5
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                GetX
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Zero Lag Search
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
              <li>
                <Trans i18nKey="resume.projects.p3B1">
                  <strong className="text-on-surface">Offline-first:</strong> Xây dựng luồng dữ liệu (SQLite + in-memory cache) kết hợp với đồng bộ hóa ghi chép (write-through sync) lên Firebase Realtime Database.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p3B2">
                  <strong className="text-on-surface">Chia sẻ & Deep link:</strong> Phát triển luồng chia sẻ thông qua deep link, mã QR và email. Triển khai định tuyến deep link mạnh mẽ và xử lý trình duyệt ngay trong ứng dụng (in-app browser).
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p3B3">
                  <strong className="text-on-surface">Bảo mật:</strong> Tích hợp xác thực mã PIN/Sinh trắc học.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p3B4">
                  <strong className="text-on-surface">Tối ưu hóa:</strong> Phân tích cú pháp clipboard URL, tự động tìm nạp metadata, và cải tiến WebView.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Hybrid Cache
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Offline-First
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Biometrics
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div 
            className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 hover:border-primary/30 transition-all group cursor-pointer"
            onClick={() => navigate('/project/realjobs')}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary mb-1">
                  {t('resume.projects.p4Type')}
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  RealJobs
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
              {t('resume.projects.p4Desc')}
            </p>
            <ul className="list-disc list-outside ml-4 text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
              <li>
                <Trans i18nKey="resume.projects.p4B1">
                  <strong className="text-on-surface">Kiến trúc Modular & Clean:</strong> Áp dụng Clean Architecture kết hợp GetX quản lý hơn 60 module màn hình độc lập, đảm bảo tính mở rộng và dễ dàng bảo trì.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p4B2">
                  <strong className="text-on-surface">Quy trình Thực tập & Lịch Phỏng vấn:</strong> Số hóa toàn diện luồng kết nối và đánh giá thực tập 3 bên, kèm phân hệ scheduler thông minh cập nhật thời gian thực.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p4B3">
                  <strong className="text-on-surface">Quản trị Multi-Flavors:</strong> Thiết lập cấu trúc Flavors (Dev, STG, Test, Prod) độc lập hoàn toàn về Bundle ID, cấu hình Firebase và App Icon bằng flutter_flavorizr.
                </Trans>
              </li>
              <li>
                <Trans i18nKey="resume.projects.p4B4">
                  <strong className="text-on-surface">Khả năng Chịu tải Mạng & Bảo mật:</strong> Xây dựng AuthInterceptor kết hợp connectivity_plus tự động chặn/báo lỗi mất mạng và chuẩn hóa Payload Signature Token chống giả mạo API.
                </Trans>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Modular Clean
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                Multi-Flavor
              </span>
              <span className="px-3 py-1 bg-surface-container-highest/40 backdrop-blur-md rounded-full text-[0.6875rem] font-medium text-on-surface-variant border border-outline-variant/15">
                GetX
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
