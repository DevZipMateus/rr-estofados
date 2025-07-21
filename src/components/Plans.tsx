
import React from 'react';
import { Check, Star } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Básico",
      price: "A partir de R$ 899",
      description: "Ideal para quem busca qualidade com economia",
      features: [
        "Sofá 2 lugares",
        "Tecido padrão",
        "Espuma D33",
        "Garantia 6 meses",
        "Entrega grátis"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "A partir de R$ 1.299",
      description: "Nosso plano mais popular com excelente custo-benefício",
      features: [
        "Sofá 3 lugares",
        "Tecido premium",
        "Espuma D45",
        "Garantia 1 ano",
        "Entrega e montagem",
        "Almofadas extras"
      ],
      popular: true
    },
    {
      name: "Luxo",
      price: "A partir de R$ 1.899",
      description: "Máximo conforto e personalização",
      features: [
        "Sofá sob medida",
        "Tecido importado",
        "Espuma premium D50",
        "Garantia 2 anos",
        "Entrega premium",
        "Design exclusivo",
        "Suporte técnico"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos <span className="text-yellow-500">Planos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e orçamento. 
            Todos incluem nossa garantia de qualidade.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                plan.popular 
                  ? 'bg-gradient-to-b from-yellow-50 to-white border-2 border-yellow-500 shadow-lg' 
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="bg-yellow-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-yellow-600" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}>
                <a 
                  href="https://wa.me/5514998473439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  Escolher Plano
                </a>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Precisa de Algo Personalizado?
          </h3>
          <p className="text-gray-600 mb-6">
            Criamos soluções sob medida para projetos especiais e necessidades específicas.
          </p>
          <a 
            href="https://wa.me/5514998473439" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
