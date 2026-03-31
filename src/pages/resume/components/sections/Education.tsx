import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section>
      <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-primary" />
        Education
      </h2>
      <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15">
        <h4 className="text-on-surface font-bold mb-1">
          Bachelor of Engineering
        </h4>
        <p className="text-primary text-sm mb-4">Can Tho University</p>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Major: <span className="text-on-surface">Information Systems</span>.
          Focused on software engineering principles, database design,
          and mobile application development.
        </p>
      </div>
    </section>
  );
}
