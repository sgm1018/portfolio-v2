import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Mis <span className="text-crimson">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-crimson mx-auto rounded-full" aria-hidden="true"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {SERVICES.map((service) => (
            <article 
              key={service.id}
              role="listitem"
              className="group bg-dark-700 p-8 rounded-xl border border-white/5 hover:border-crimson transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <service.icon size={100} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-dark-600 rounded-lg flex items-center justify-center mb-6 text-crimson group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-300" aria-hidden="true">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-crimson transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Soluciones profesionales adaptadas a tus necesidades específicas con tecnologías de vanguardia.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;