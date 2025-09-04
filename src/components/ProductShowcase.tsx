import React from 'react';

const ProductShowcase = () => {
  return <section id="produtos" className="section bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-[#fc9c22]">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com sofás prontos para entrega e mesas de jantar disponíveis em nosso estoque
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border">
              <div className="w-16 h-16 bg-[#fc9c22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#fc9c22] rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Sofás Prontos</h3>
              <p className="text-muted-foreground">Diversos modelos disponíveis para entrega imediata</p>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border">
              <div className="w-16 h-16 bg-[#fc9c22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-6 bg-[#fc9c22] rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Mesas de Jantar</h3>
              <p className="text-muted-foreground">Mesas de qualidade prontas para entrega</p>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#fc9c22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#fc9c22] rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Qualidade Garantida</h3>
              <p className="text-muted-foreground">Todos os produtos com garantia conforme código do consumidor</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;