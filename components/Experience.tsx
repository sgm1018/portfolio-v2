import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Experiencia <span className="text-crimson">Laboral</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          {/* Mobile: Left side. Desktop: Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson/50 via-crimson to-crimson/50 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-dark-900 border-2 border-crimson z-10 shadow-[0_0_10px_rgba(220,20,60,0.5)] mt-1 md:mt-0">
                  <Briefcase size={14} className="text-crimson" />
                </div>

                {/* Spacer for Desktop Layout Balance */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`relative bg-dark-700/50 p-6 rounded-xl border border-white/5 hover:border-crimson/50 transition-all duration-300 group ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    
                    {/* Connector Line for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-crimson/30 ${index % 2 !== 0 ? '-right-12' : '-left-12'}`}></div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-crimson/10 text-crimson text-xs font-bold rounded mb-3 border border-crimson/20">
                      <Calendar size={12} />
                      {job.period}
                    </span>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-crimson transition-colors">
                      {job.role}
                    </h3>
                    
                    <h4 className="text-lg text-gray-400 mb-4 font-light">
                      {job.company}
                    </h4>
                    
                    <ul className={`space-y-2 flex flex-col ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {job.description.map((item, i) => (
                        <li key={i} className={`text-gray-400 text-sm leading-relaxed flex items-start gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}>
                          <span className="text-crimson mt-1.5 min-w-[6px] h-[6px] bg-crimson rounded-full block flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;