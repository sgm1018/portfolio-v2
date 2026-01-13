import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Mensaje enviado (simulación). Integrar FormSubmit aquí.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <header>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Hablemos de tu próximo <span className="text-crimson">proyecto</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                ¿Tienes una idea en mente? ¿Necesitas optimizar tu infraestructura o mejorar la seguridad de tus aplicaciones? Estoy disponible para nuevos retos.
              </p>
            </header>

            <address className="space-y-6 not-italic">
              <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Enviar email a Sergio González" className="flex items-center gap-4 text-gray-300 hover:text-crimson transition-colors p-4 bg-black/40 rounded-xl border border-white/5 hover:border-crimson/30">
                <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-crimson" aria-hidden="true">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <span className="text-sm">{SOCIAL_LINKS.email}</span>
                </div>
              </a>
              
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Conectar con Sergio González en LinkedIn" className="flex items-center gap-4 text-gray-300 hover:text-crimson transition-colors p-4 bg-black/40 rounded-xl border border-white/5 hover:border-crimson/30">
                 <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-crimson" aria-hidden="true">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">LinkedIn</h4>
                  <span className="text-sm">Conectar Profesional</span>
                </div>
              </a>

               <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Ver perfil de Sergio González en GitHub" className="flex items-center gap-4 text-gray-300 hover:text-crimson transition-colors p-4 bg-black/40 rounded-xl border border-white/5 hover:border-crimson/30">
                 <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-crimson" aria-hidden="true">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">GitHub</h4>
                  <span className="text-sm">Explorar Código</span>
                </div>
              </a>
            </address>
          </div>

          <div className="bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de contacto" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  required
                  aria-required="true"
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-colors resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                aria-busy={loading}
                className="w-full bg-crimson hover:bg-crimson-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(220,20,60,0.39)] hover:shadow-[0_6px_20px_rgba(220,20,60,0.23)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : (
                  <>
                    Enviar Mensaje <Send size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;