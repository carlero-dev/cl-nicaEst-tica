import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Facial', href: '#facial' },
    { name: 'Corporal', href: '#corporal' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="bg-emerald-800 p-2 rounded-lg mr-2 group-hover:bg-emerald-700 transition-colors">
              <Flower2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                Sua Clínica
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-amber-600 font-semibold">
                Estética Avançada
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-amber-600 transition-colors uppercase tracking-wide ${scrolled ? 'text-stone-600' : 'text-stone-800'}`}
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" variant="primary">Agendar Agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 focus:outline-none p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block px-3 py-4 text-stone-600 hover:text-emerald-800 font-medium text-lg w-full text-center border-b border-stone-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 w-full px-4">
             <Button fullWidth onClick={() => setIsOpen(false)}>Agendar Avaliação</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
