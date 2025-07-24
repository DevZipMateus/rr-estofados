import React from 'react';
import { Star, Quote } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: "Maria Silva",
    location: "Bauru - SP",
    text: "Simplesmente perfeito! O sofá ficou exatamente como eu sonhava. A qualidade é excepcional e o atendimento foi impecável desde o primeiro contato.",
    rating: 5
  }, {
    name: "João Santos",
    location: "Marília - SP",
    text: "Reformaram meu sofá antigo e o resultado foi incrível! Ficou como novo, com um acabamento profissional. Recomendo de olhos fechados.",
    rating: 5
  }, {
    name: "Ana Costa",
    location: "Lençóis Paulista - SP",
    text: "Excelente trabalho! Criaram um sofá personalizado que se encaixou perfeitamente no meu ambiente. Entrega no prazo e montagem perfeita.",
    rating: 5
  }, {
    name: "Carlos Oliveira",
    location: "Jaú - SP",
    text: "Qualidade superior em materiais e acabamento. O sofá está há 2 anos em casa e continua como novo. Investimento que vale muito a pena!",
    rating: 5
  }];
  return <section id="depoimentos" className="section bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border">
              <div className="flex items-center mb-4">
                <Quote className="text-primary mr-2" size={20} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-primary fill-current" size={16} />)}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Quer Ser Nosso Próximo <span className="text-gray-50">Cliente Satisfeito?</span>
            </h3>
            <p className="text-xl mb-8 text-gray-300">
              Junte-se a centenas de clientes que já transformaram seus ambientes conosco.
            </p>
            <a href="https://wa.me/5514998473439" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Começar Meu Projeto
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;