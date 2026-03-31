import { Link as LinkIcon, Mail } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  return (
    <section className="py-32 px-8 overflow-hidden relative" id="contact">
      <div className="absolute inset-0 bg-primary-container opacity-5 mix-blend-overlay"></div>
      <Reveal className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface mb-8 tracking-tighter">
          Let's Build Something <span className="text-primary">Great</span> Together.
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-on-primary font-headline font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0px_10px_20px_rgba(179,197,255,0.2)] hover:shadow-[0px_15px_30px_rgba(179,197,255,0.4)] btn-hover-effect" href="mailto:phuoc@example.com">
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a className="flex items-center justify-center gap-3 px-10 py-5 border border-outline-variant/30 text-on-surface font-headline font-bold rounded-md hover:bg-surface-variant/30 transition-all btn-hover-effect" href="#">
            <LinkIcon className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
