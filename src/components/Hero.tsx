
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
              Sofás <span className="text-orange-500">Personalizados</span> de Alta Qualidade
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Desde 2020 criamos sofás únicos e personalizados, feitos com materiais premium para transformar seu ambiente com conforto e estilo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5514998473439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos" 
                className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Nossos Serviços
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png" 
                  alt="RR Estofados - Logo" 
                  className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
