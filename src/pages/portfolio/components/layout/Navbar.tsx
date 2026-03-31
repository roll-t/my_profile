import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sections = ['projects', 'tech-stack', 'about', 'contact',];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f141a]/80 backdrop-blur-md border-b border-[#b3c5ff]/10 shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div 
          className="text-xl font-headline font-bold text-[#b3c5ff] tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PHAM PHUOC TRUONG
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.slice(1));
              }}
              className={
                activeSection === item.href.slice(1)
                  ? 'text-[#b3c5ff] border-b-2 border-[#b3c5ff] pb-1'
                  : 'text-slate-400 hover:text-[#b3c5ff] transition-all duration-300'
              }
            >
              {item.label}
            </a>
          ))}
        </div>
        <button 
          className="bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-headline font-bold hover:opacity-90 active:scale-95 transition-all btn-hover-effect"
          onClick={() => navigate('/resume')}
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
