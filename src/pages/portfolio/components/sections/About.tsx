import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-8">
              Bridging Sophistication with <span className="text-secondary">Simplicity</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7">
            <p className="text-xl text-on-surface-variant leading-relaxed">
              With a strong foundation in software development and a deep focus on the Flutter ecosystem, I bridge the gap between sophisticated backend logic and intuitive UI/UX. I thrive on optimizing app performance, managing state with GetX, and implementing robust caching mechanisms to ensure a lag-free experience. 
            </p>
            <p className="mt-6 text-xl text-on-surface-variant leading-relaxed">
              Whether it's a food-themed social app or a high-utility link manager, my goal is always the same: <span className="text-on-surface font-semibold">Efficiency, Scalability, and Clean Code.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
