
import React from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Instagram = () => {
  return (
    <section id="instagram" className="section bg-gradient-to-br from-slate-50 to-white py-16 xl:py-24 2xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl 2xl:max-w-[1600px]">
        <div className="text-center mb-12 xl:mb-16 2xl:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 xl:mb-8">
            <InstagramIcon className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground">
              Siga nosso <span className="text-orange-500">Instagram</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossos trabalhos, novidades e bastidores da criação dos nossos sofás personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {/* Botucatu */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 xl:p-12 text-white">
            <InstagramIcon className="w-12 h-12 xl:w-16 xl:h-16 mx-auto mb-4 xl:mb-6" />
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold mb-3 xl:mb-4">
              @rrestofados_sofasbotucatu
            </h3>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl mb-6 xl:mb-8 opacity-90">
              Unidade Botucatu
            </p>
            <Button 
              size="sm"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-4 py-2 xl:px-6 xl:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              onClick={() => window.open('https://www.instagram.com/rrestofados_sofasbotucatu/', '_blank')}
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Seguir
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>

          {/* Jaú */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 xl:p-12 text-white">
            <InstagramIcon className="w-12 h-12 xl:w-16 xl:h-16 mx-auto mb-4 xl:mb-6" />
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold mb-3 xl:mb-4">
              @rrestofados_sofasjau
            </h3>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl mb-6 xl:mb-8 opacity-90">
              Unidade Jaú
            </p>
            <Button 
              size="sm"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-4 py-2 xl:px-6 xl:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              onClick={() => window.open('https://www.instagram.com/rrestofados_sofasjau/', '_blank')}
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Seguir
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>

          {/* Lençóis Paulista */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 xl:p-12 text-white">
            <InstagramIcon className="w-12 h-12 xl:w-16 xl:h-16 mx-auto mb-4 xl:mb-6" />
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold mb-3 xl:mb-4">
              @rrestofados_sofaslencois
            </h3>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl mb-6 xl:mb-8 opacity-90">
              Unidade Lençóis Paulista
            </p>
            <Button 
              size="sm"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-4 py-2 xl:px-6 xl:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              onClick={() => window.open('https://www.instagram.com/rrestofados_sofaslencois/', '_blank')}
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Seguir
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
