
import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Alta Qualidade",
      description: "Materiais premium e acabamento impecável em cada produto"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva e projetos únicos"
    },
    {
      icon: Clock,
      title: "Desde 2020",
      description: "Experiência consolidada no mercado de estofados"
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada sofá é produzido com cuidado e dedicação"
    }
  ];

  return (
    <section id="sobre" className="section bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">RRestofados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em sofás personalizados, estamos no mercado desde 2020 
            com metas de crescimento, trabalhamos com produtos de alta qualidade para melhor atender 
            todos nossos clientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-200">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossa <span className="text-white">História</span>
            </h3>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Fundada em 2020, a RRestofados nasceu com o objetivo de transformar ambientes através 
              de sofás únicos e personalizados. Nossa paixão por criar móveis de qualidade superior 
              nos levou a estabelecer parcerias com os melhores fornecedores e a desenvolver técnicas 
              artesanais que garantem durabilidade e conforto incomparáveis.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <p className="text-white">Sofás Produzidos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-white">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4+</div>
                <p className="text-white">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
