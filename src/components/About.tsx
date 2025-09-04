import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Award,
    title: "Alta Qualidade",
    description: "Materiais premium e acabamento impecável em cada produto"
  }, {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva e projetos únicos"
  }, {
    icon: Clock,
    title: "Desde 2020",
    description: "Experiência consolidada no mercado de estofados"
  }, {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada sofá é produzido com cuidado e dedicação"
  }];
  return <section id="sobre" className="section bg-background py-16 xl:py-24 2xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl 2xl:max-w-[1600px]">
        {/* Header and Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center mb-16 xl:mb-24">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-6 xl:mb-8">
              Sobre a <span className="text-[#fc9c22]">RRestofados</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed">
              Somos uma empresa especializada em sofás personalizados, estamos no mercado desde 2020 
              com metas de crescimento, trabalhamos com produtos de alta qualidade para melhor atender 
              todos nossos clientes.
            </p>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <video className="w-full h-auto rounded-lg shadow-lg" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" style={{
              pointerEvents: 'none'
            }}>
                <source src="/lovable-uploads/sofa.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 2xl:gap-12 mb-16 xl:mb-24">
          {features.map((feature, index) => <div key={index} className="text-center p-6 xl:p-8 2xl:p-10 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-200">
              <div className="bg-primary/10 w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full flex items-center justify-center mx-auto mb-4 xl:mb-6">
                <feature.icon size={32} className="text-primary bg-[t#] bg-[#fc9c22]/0" />
              </div>
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-card-foreground mb-3 xl:mb-4">{feature.title}</h3>
              <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 xl:p-16 2xl:p-20 text-white">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 xl:mb-8 text-white">
              Nossa <span className="text-white">História</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-white mb-8 xl:mb-12 leading-relaxed">
              Fundada em 2020, a RRestofados nasceu com o objetivo de transformar ambientes através 
              de sofás únicos e personalizados. Nossa paixão por criar móveis de qualidade superior 
              nos levou a estabelecer parcerias com os melhores fornecedores e a desenvolver técnicas 
              artesanais que garantem durabilidade e conforto incomparáveis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 xl:gap-12 2xl:gap-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2">500+</div>
                <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-white">Sofás Produzidos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2">100%</div>
                <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-white">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2">4+</div>
                <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-white">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;