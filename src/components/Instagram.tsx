
import React from 'react';
import { Instagram as InstagramIcon, ExternalLink, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Instagram = () => {
  const stores = [
    {
      name: '@rrestofados_sofasbotucatu',
      city: 'Botucatu',
      url: 'https://www.instagram.com/rrestofados_sofasbotucatu/',
      gradient: 'from-orange-500 via-orange-600 to-red-500'
    },
    {
      name: '@rrestofados_sofasjau',
      city: 'Jaú',
      url: 'https://www.instagram.com/rrestofados_sofasjau/',
      gradient: 'from-red-500 via-pink-500 to-purple-600'
    },
    {
      name: '@rrestofados_sofaslencois',
      city: 'Lençóis Paulista',
      url: 'https://www.instagram.com/rrestofados_sofaslencois/',
      gradient: 'from-purple-600 via-purple-500 to-orange-500'
    }
  ];

  return (
    <section id="instagram" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-white py-20 xl:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 xl:mb-24">
          <div className="inline-flex items-center justify-center gap-4 mb-8 bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="relative">
              <InstagramIcon className="w-10 h-10 xl:w-12 xl:h-12 text-orange-500" />
              <Heart className="absolute -top-1 -right-1 w-4 h-4 text-red-500 fill-current animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Siga nosso Instagram
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Acompanhe nossos trabalhos, novidades e bastidores da criação dos nossos sofás personalizados. 
            <span className="text-orange-600 font-semibold"> Conteúdo exclusivo em cada unidade!</span>
          </p>
        </div>

        {/* Instagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${store.gradient} opacity-90`}></div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8 xl:p-10 text-center text-white">
                {/* Instagram Icon with Animation */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <InstagramIcon className="w-10 h-10 xl:w-12 xl:h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 xl:w-24 xl:h-24 mx-auto rounded-full border-2 border-white/30 animate-pulse"></div>
                </div>

                {/* Store Info */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold leading-tight break-all">
                    {store.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm xl:text-base font-medium">Unidade {store.city}</span>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="mt-8">
                  <Button 
                    size="lg"
                    className="bg-white/90 hover:bg-white text-gray-900 hover:text-gray-800 font-bold px-8 py-3 xl:px-10 xl:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base xl:text-lg group-hover:animate-bounce"
                    onClick={() => window.open(store.url, '_blank')}
                  >
                    <InstagramIcon className="w-5 h-5 xl:w-6 xl:h-6 mr-3" />
                    Seguir Agora
                    <ExternalLink className="w-4 h-4 xl:w-5 xl:h-5 ml-3" />
                  </Button>
                </div>

                {/* Stats Decoration */}
                <div className="mt-6 flex justify-center items-center gap-6 text-white/80">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Posts diários</span>
                  </div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <InstagramIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Stories exclusivos</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-3xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 xl:mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full px-8 py-4 shadow-lg">
            <Heart className="w-5 h-5 fill-current animate-pulse" />
            <span className="font-semibold text-lg">Não perca nenhuma novidade!</span>
            <Heart className="w-5 h-5 fill-current animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
