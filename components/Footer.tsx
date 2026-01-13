import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section embedded in Footer for layout balance or specifically separated above */}
        <div className="mb-12 border-b border-white/10 pb-12 flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-dark-800 rounded-full flex items-center justify-center text-crimson mb-4 border border-white/5">
                <GraduationCap size={32} />
             </div>
             <h3 className="text-xl font-bold text-white">Ingeniería Informática</h3>
             <p className="text-gray-400">Universidad de Burgos (UBU)</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-display font-bold text-white">SGM<span className="text-crimson">.</span></span>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p className="mb-2">© {new Date().getFullYear()} By Sergio González Martínez</p>
            <p>
              Creado con <span className="text-white">React</span> & <span className="text-white">Tailwind</span>. 
              <a href={SOCIAL_LINKS.repo} className="ml-2 text-crimson hover:underline" target="_blank" rel="noreferrer">Ver código fuente</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;