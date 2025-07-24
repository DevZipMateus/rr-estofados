
import React from 'react';
import LocationMap from './LocationMap';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossas <span className="text-yellow-500">Localizações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossas unidades e escolha a mais próxima de você.
          </p>
        </div>

        {/* Four location divisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location 1 - Mapa */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px] flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-black mb-2">Unidade Bauru</h3>
              <p className="text-sm text-gray-600">
                Av. Duque de Caxias, 253 - Vila Mesquita, Bauru - SP, 17014-340
              </p>
            </div>
            <div className="h-48 mb-4">
              <LocationMap address="Av. Duque de Caxias, 253 - Vila Mesquita, Bauru - SP, 17014-340" />
            </div>
            <div className="mt-auto">
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://wa.me/5514362666146?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={16} />
                  Entrar em Contato
                </a>
              </Button>
            </div>
          </div>

          {/* Location 2 - Jaú */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px] flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-black mb-2">Unidade Jaú</h3>
              <p className="text-sm text-gray-600">
                Av. João Ferraz Neto, N°54 - Chacara Dr. Lopes, Jaú - SP, 17207-330
              </p>
            </div>
            <div className="h-48 mb-4">
              <LocationMap address="Av. João Ferraz Neto, N°54 - Chacara Dr. Lopes, Jaú - SP, 17207-330" />
            </div>
            <div className="mt-auto">
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://wa.me/5514362666146?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={16} />
                  Entrar em Contato
                </a>
              </Button>
            </div>
          </div>

          {/* Location 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px]">
            {/* Conteúdo da localização 3 será adicionado aqui */}
          </div>

          {/* Location 4 */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px]">
            {/* Conteúdo da localização 4 será adicionado aqui */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
