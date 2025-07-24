
import React from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Instagram = () => {
  return (
    <section id="instagram" className="section bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <InstagramIcon className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Siga nosso <span className="text-pink-500">Instagram</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossos trabalhos, novidades e bastidores da criação dos nossos sofás personalizados
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto">
            <InstagramIcon className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              @rrestofados_sofasbauru
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Não perca nenhuma novidade! Siga-nos no Instagram e veja nossos trabalhos mais recentes, 
              dicas de decoração e muito mais.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pink-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.instagram.com/rrestofados_sofasbauru?igsh=bGtsbDd3bTU4cjNi&utm_source=qr', '_blank')}
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
