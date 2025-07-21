
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6`}>
              Sofás <span className="text-primary">Personalizados</span> de Alta Qualidade
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Desde 2020 criamos sofás únicos e personalizados, feitos com materiais premium para transformar seu ambiente com conforto e estilo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5514998473439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Nossos Serviços
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl lg:text-8xl font-bold mb-4">
                    <span className="text-primary">R</span>R
                  </div>
                  <p className="text-xl lg:text-2xl font-semibold">Restofados</p>
                  <p className="text-gray-300 mt-2">Sofás Personalizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
