
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

        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 xl:p-16 2xl:p-20 text-white">
          <div className="max-w-2xl 2xl:max-w-3xl mx-auto">
            <InstagramIcon className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mx-auto mb-6 xl:mb-8" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 xl:mb-6">
              @rrestofados_sofasbauru
            </h3>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-8 xl:mb-12 opacity-90">
              Não perca nenhuma novidade! Siga-nos no Instagram e veja nossos trabalhos mais recentes, 
              dicas de decoração e muito mais.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3 xl:px-10 xl:py-4 2xl:px-12 2xl:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base xl:text-lg 2xl:text-xl"
              onClick={() => window.open('https://www.instagram.com/rrestofados_sofasbauru?igsh=bGtsbDd3bTU4cjNi&utm_source=qr', '_blank')}
            >
              <InstagramIcon className="w-5 h-5 xl:w-6 xl:h-6 mr-2" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4 xl:w-5 xl:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
