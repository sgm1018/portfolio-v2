import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Proyectos <span className="text-crimson">Destacados</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Una selección de mis trabajos más recientes en desarrollo web, seguridad y DevOps.
            </p>
          </div>
          <a href="https://github.com/sgm1018" target="_blank" rel="noopener noreferrer" aria-label="Ver todos los proyectos en GitHub" className="hidden md:flex items-center gap-2 text-crimson hover:text-white transition-colors mt-4 md:mt-0">
            Ver todo en GitHub <Github size={16} aria-hidden="true" />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
          {PROJECTS.map((project) => (
            <article key={project.id} role="listitem" className="group relative rounded-xl overflow-hidden bg-dark-800 border border-white/5 hover:border-crimson/50 transition-all duration-500">
              {/* Image Container */}
              <figure className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" aria-hidden="true"></div>
                <img 
                  src={project.image} 
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </figure>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-crimson transition-colors">
                    {project.title}
                  </h3>
                  <nav className="flex gap-3" aria-label={`Enlaces de ${project.title}`}>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} en GitHub`} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-crimson">
                      <Github size={18} aria-hidden="true" />
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.title}`} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-crimson">
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                  </nav>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-crimson/10 text-crimson border border-crimson/20">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="https://github.com/sgm1018" target="_blank" rel="noopener noreferrer" aria-label="Ver todos los proyectos en GitHub" className="inline-flex items-center gap-2 text-crimson hover:text-white transition-colors">
            Ver todo en GitHub <Github size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;