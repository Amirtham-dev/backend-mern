import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Atom, Menu, X, Sparkles, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'History', href: '#history' },
    { name: 'Why React?', href: '#why-react' },
    { name: 'Features', href: '#features' },
    { name: 'Library vs Framework', href: '#library-vs-framework' },
    { name: 'Drawbacks', href: '#drawbacks' },
    { name: 'Summary', href: '#summary' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['history', 'why-react', 'features', 'library-vs-framework', 'drawbacks', 'summary'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-peach-400 via-babypink-400 via-pista-400 to-skyblue-400 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-skyblue-100 via-white to-babypink-100 border border-slate-200/80 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                  <Atom className="w-6 h-6 text-sky-500" />
                </motion.div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-peach-400 rounded-full border-2 border-white animate-ping" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                  World of React <span className="text-sky-500 font-black">⚛️</span>
                </span>
                <span className="text-xs font-medium text-slate-500">Interactive Learning Guide</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Color Palette Pill indicator */}
            <div className="hidden md:flex items-center gap-2 pl-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-medium text-slate-600">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Pastel Edition</span>
                <div className="flex items-center gap-1 ml-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-peach-300 ring-1 ring-white" title="Peach" />
                  <span className="w-2.5 h-2.5 rounded-full bg-pista-300 ring-1 ring-white" title="Pista Green" />
                  <span className="w-2.5 h-2.5 rounded-full bg-babypink-300 ring-1 ring-white" title="Baby Pink" />
                  <span className="w-2.5 h-2.5 rounded-full bg-skyblue-300 ring-1 ring-white" title="Sky Blue" />
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
              >
                <span>{link.name}</span>
                <BookOpen className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}
