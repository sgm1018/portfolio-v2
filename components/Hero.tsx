import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Particles/Effects */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-20 left-0 w-72 h-72 bg-crimson/10 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-20 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Video de fondo para móvil */}
      <div className="absolute inset-0 lg:hidden z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center pt-20 pb-24 lg:pb-0">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Text Content */}
          <div className={`lg:w-1/2 space-y-6 md:space-y-8 transition-all duration-1000 transform ${textVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
                Sergio<br />
                <span className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight">González</span>
              </h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                Full Stack <span className="text-crimson font-semibold">DevSecOps</span>
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#portfolio" className="px-6 sm:px-8 py-3 bg-crimson hover:bg-crimson-dark text-white rounded-none border border-crimson transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.3)] hover:shadow-[0_0_25px_rgba(220,20,60,0.5)] flex items-center justify-center gap-2 group text-sm sm:text-base">
                Ver Proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 sm:px-8 py-3 bg-transparent hover:bg-white/5 text-white border border-crimson rounded-none transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Contactar
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Video para desktop - lado derecho */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:flex items-center justify-end z-10">
          {/* Gradiente para difuminar el borde izquierdo del video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-20 pointer-events-none"></div>
          <video autoPlay muted loop playsInline className="h-full w-full object-cover object-left">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 z-30 flex flex-col items-center">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-crimson to-transparent mb-2"></div>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;