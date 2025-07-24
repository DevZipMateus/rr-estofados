import React from 'react';

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

        {/* Three empty location divisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px]">
            {/* Conteúdo da localização 1 será adicionado aqui */}
          </div>

          {/* Location 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px]">
            {/* Conteúdo da localização 2 será adicionado aqui */}
          </div>

          {/* Location 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 min-h-[300px]">
            {/* Conteúdo da localização 3 será adicionado aqui */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
