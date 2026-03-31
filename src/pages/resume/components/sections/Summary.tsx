export function Summary() {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0">
          <span className="font-headline text-primary font-bold tracking-tighter text-sm uppercase px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            The Vision
          </span>
        </div>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl font-body leading-relaxed text-on-surface-variant">
            Dedicated <span className="text-on-surface font-semibold">Flutter Developer</span>{" "}
            with a strong foundation in{" "}
            <span className="text-on-surface font-semibold">
              cross-platform mobile development
            </span>{" "}
            and{" "}
            <span className="text-on-surface font-semibold">
              software architecture
            </span>
            . Proven track record in optimizing application performance and
            delivering high-quality UI/UX experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
