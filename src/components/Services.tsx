
import React, { useState } from 'react';
import { Palette, Wrench, Truck, Shield } from 'lucide-react';
import StoreSelector from './StoreSelector';

const Services = () => {
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);
  const services = [
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Criamos sofás únicos seguindo seu estilo e necessidades específicas",
      features: ["Escolha de tecidos premium", "Cores personalizadas", "Medidas sob medida", "Estilo exclusivo"]
    },
    {
      icon: Wrench,
      title: "Reforma e Restauro",
      description: "Damos nova vida ao seu sofá antigo com qualidade profissional",
      features: ["Troca de espuma", "Novo revestimento", "Estrutura reforçada", "Acabamento impecável"]
    },
    {
      icon: Truck,
      title: "Entrega e Montagem",
      description: "Levamos seu sofá até você com cuidado e instalação completa",
      features: ["Entrega gratuita", "Montagem incluída", "Proteção durante transporte", "Horário flexível"]
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Oferecemos garantia completa em todos os nossos produtos",
      features: ["Garantia de 1 ano", "Suporte pós-venda", "Manutenção gratuita", "Peças de reposição"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades 
            em estofados e móveis personalizados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <service.icon className="text-orange-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar seu Ambiente?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como podemos criar o sofá perfeito para você.
            </p>
            <button 
              onClick={() => setIsStoreSelectorOpen(true)}
              className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
