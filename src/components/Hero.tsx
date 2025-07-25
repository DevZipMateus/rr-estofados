
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="inicio" 
      className="pt-20 pb-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/4fa4f1fb-53f6-472d-9d6c-17aa83142d35.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl 2xl:max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8 xl:pr-12 2xl:pr-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-6 xl:mb-8">
              Sofás <span className="text-orange-500">Personalizados</span> de Alta Qualidade
            </h1>
            
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 mb-8 xl:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Desde 2020 criamos sofás únicos e personalizados, feitos com materiais premium para transformar seu ambiente com conforto e estilo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5514998473439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 xl:gap-3 text-base xl:text-lg 2xl:text-xl"
              >
                <Phone size={isMobile ? 20 : 24} />
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos" 
                className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 xl:gap-3 text-base xl:text-lg 2xl:text-xl"
              >
                Nossos Serviços
                <ArrowRight size={isMobile ? 20 : 24} />
              </a>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange gradient background circle */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[550px] 2xl:h-[550px] bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-full"></div>
              
              {/* White circle behind logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 bg-white rounded-full"></div>
              </div>
              
              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img 
                  src="/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png" 
                  alt="RR Estofados - Logo" 
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain"
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
