import { Languages as LanguagesIcon } from "lucide-react";

export function Languages() {
  return (
    <section>
      <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
        <LanguagesIcon className="w-6 h-6 text-primary" />
        Languages
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/15">
          <span className="text-on-surface">English</span>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            Professional
          </span>
        </div>
        <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/15">
          <span className="text-on-surface">Vietnamese</span>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            Native
          </span>
        </div>
      </div>
    </section>
  );
}
