import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Tecnologías', href: '#tech' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`} role="navigation" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-display font-bold text-white hover:text-crimson transition-colors" aria-label="Sergio González - Ir al inicio">
                SGM<span className="text-crimson" aria-hidden="true">.</span>
              </a>
            </div>
            
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-8" role="menubar">
                {links.map((link) => (
                  <li key={link.name} role="none">
                    <a
                      href={link.href}
                      role="menuitem"
                      className="text-gray-300 hover:text-crimson px-3 py-2 rounded-md text-sm font-medium transition-all relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-4">
               <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub" className="text-gray-400 hover:text-white transition-colors"><Github size={20} aria-hidden="true" /></a>
               <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} aria-hidden="true" /></a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-crimson"
              >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-black/95 backdrop-blur-xl border-b border-white/10`} aria-hidden={!isOpen}>
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3" role="menu">
            {links.map((link) => (
              <li key={link.name} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-crimson block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;