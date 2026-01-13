import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Stack <span className="text-crimson">Tecnológico</span>
          </h2>
          <p className="text-gray-400">Herramientas y lenguajes que domino</p>
        </div>

        <div className="space-y-12">
          {TECH_STACK.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-gray-300 mb-6 border-l-4 border-crimson pl-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {category.items.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-dark-800 rounded-lg border border-white/5 hover:border-crimson/50 hover:bg-dark-700 transition-all duration-300 group">
                    <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                      <img 
                        src={tech.iconUrl} 
                        alt={tech.name} 
                        className={`w-full h-full ${tech.name === 'Rust' ? 'invert' : ''}`}
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;