
import React, { useState } from 'react';
import { Palette, Truck, Shield } from 'lucide-react';
import StoreSelector from './StoreSelector';

const Services = () => {
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);
  const services = [
    {
      icon: Palette,
      title: "Trabalhamos com sofás a pronta Entrega e mesas de jantares a pronta entrega",
      description: "Oferecemos uma variedade de sofás e mesas de jantar prontos para entrega imediata",
      features: ["Sofás prontos para entrega", "Mesas de jantar disponíveis", "Qualidade garantida", "Estoque variado"]
    },
    {
      icon: Truck,
      title: "Entrega e Montagem",
      description: "Levamos seu móvel até você com cuidado e instalação completa",
      features: ["Entrega valor a combinar", "Montagem gratuita", "Proteção durante transporte", "Horário flexível"]
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "Oferecemos garantia dentro das normas do código do consumidor",
      features: ["Garantia conforme código do consumidor", "Suporte pós-venda", "Manutenção pós-garantia valores a combinar"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos <span className="text-[#fc9c22]">Serviços</span>
          </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Oferecemos sofás e mesas de jantar prontos para entrega, 
             além de montagem gratuita e garantia conforme o código do consumidor.
           </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#fc9c22]/10 w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <service.icon className="text-[#fc9c22]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-[#fc9c22] rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#fc9c22] to-[#fc9c22]/90 rounded-2xl p-8 md:p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar seu Ambiente?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Conheça nossos sofás e mesas de jantar prontos para entrega e transforme seu ambiente.
            </p>
            <button 
              onClick={() => setIsStoreSelectorOpen(true)}
              className="bg-white hover:bg-gray-50 text-[#fc9c22] px-10 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg hover:shadow-xl border-2 border-white/20 text-lg"
            >
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </div>
      
      <StoreSelector 
        isOpen={isStoreSelectorOpen}
        onClose={() => setIsStoreSelectorOpen(false)}
      />
    </section>
  );
};

export default Services;
