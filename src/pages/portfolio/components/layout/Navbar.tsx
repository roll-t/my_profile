import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../../../components/LanguageSwitcher';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const sections = ['projects', 'tech-stack', 'about', 'contact'];

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#tech-stack', label: t('nav.techStack') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div 
          className="text-xl font-headline font-bold text-primary tracking-tighter cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          PHAM PHUOC TRUONG
        </div>
        
        {/* Desktop Navigation */}
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
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary transition-all duration-300'
              }
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <button 
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-headline font-bold hover:opacity-90 active:scale-95 transition-all btn-hover-effect"
            onClick={() => navigate('/resume')}
          >
            {t('nav.resume')}
          </button>
        </div>

        {/* Mobile Menu Toggle & Lang Switcher */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            className="text-on-surface hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-b border-primary/10 shadow-xl py-4 flex flex-col items-center gap-6 font-headline font-bold">
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
                  ? 'text-primary text-lg'
                  : 'text-on-surface-variant hover:text-primary text-lg transition-colors'
              }
            >
              {item.label}
            </a>
          ))}
          <button 
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-md font-headline font-bold w-[80%] mx-auto mt-2"
            onClick={() => navigate('/resume')}
          >
            {t('nav.resume')}
          </button>
        </div>
      )}
    </nav>
  );
}
