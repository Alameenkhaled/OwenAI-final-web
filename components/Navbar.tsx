import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'The Problem', href: `#${SectionId.TRANSFORMATION}` },
  { label: 'Proof', href: `#${SectionId.PROOF}` },
  { label: 'Technology', href: `#${SectionId.TECHNOLOGY}` },
  { label: 'Opportunity', href: `#${SectionId.OPPORTUNITY}` },
  { label: 'Ask Owen', href: `#${SectionId.CHAT}` },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo(`#${SectionId.HERO}`)}>
          <Hexagon className="w-8 h-8 text-cyan group-hover:rotate-90 transition-transform duration-700" strokeWidth={1.5} />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            OWEN<span className="text-cyan">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-body text-slate-400 hover:text-cyan transition-colors tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => scrollTo(`#${SectionId.CHAT}`)}
             className="px-5 py-2 text-sm font-display font-bold text-void bg-cyan hover:bg-white transition-colors clip-path-polygon"
             style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            INVESTOR LOGIN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-left text-slate-300 hover:text-cyan font-display py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};