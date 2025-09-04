import React from 'react';
import { MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
const JauUnit = () => {
  const address = "Av. João Ferraz Neto, N°54 - Chacara Dr. Lopes, Jaú - SP, 17207-330";
  const encodedAddress = encodeURIComponent(address);
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/551436266146?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado.', '_blank');
  };
  const handleViewOnGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };
  return <section id="unidade-jau" className="section bg-muted/50 py-16 xl:py-24 2xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="text-center mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-6 xl:mb-8">
            Unidade <span className="text-[#fc9c22]">Jaú SP</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Visite nossa unidade em Jaú e conheça de perto nossos produtos e serviços de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-center">
          {/* Info */}
          <div className="order-1 lg:order-1">
            <div className="bg-card rounded-2xl p-6 sm:p-8 xl:p-10 2xl:p-12 shadow-lg border relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
              backgroundImage: `url('/lovable-uploads/58ba026c-d2f8-49d1-a74b-4eee9845116d.png')`
            }} />
              <div className="absolute inset-0 bg-white/40" />
              
               {/* Content */}
               <div className="relative z-10">
                 <div className="flex items-center mb-6 xl:mb-8">
                <div className="bg-primary w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                 <div>
                   <h3 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900">Nossa Localização</h3>
                   <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-900">Fácil acesso e estacionamento</p>
                 </div>
              </div>

              <div className="space-y-6 xl:space-y-8">
                 <div>
                   <h4 className="font-semibold text-gray-900 mb-2 text-base xl:text-lg 2xl:text-xl">Endereço</h4>
                   <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-900">{address}</p>
                 </div>

                 <div>
                   <h4 className="font-semibold text-gray-900 mb-2 text-base xl:text-lg 2xl:text-xl">Horário de Funcionamento</h4>
                    <div className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-900 space-y-1">
                      <p>Segunda à Sexta: 9h às 19h</p>
                      <p>Sábado: 9h às 18h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                 </div>

                {/* View on Google Maps button */}
                <div className="pt-2">
                  <Button onClick={handleViewOnGoogleMaps} variant="outline" className="w-full mb-4 py-2 xl:py-3 2xl:py-4 text-sm xl:text-base 2xl:text-lg">
                    <ExternalLink className="mr-2" size={16} />
                    Ver no Google Maps
                  </Button>
                </div>

                <div className="pt-4">
                  <Button onClick={handleWhatsAppContact} className="w-full btn-primary py-2 xl:py-3 2xl:py-4 text-sm xl:text-base 2xl:text-lg bg-[#fc9c22]">
                    <MessageCircle className="mr-2" size={20} />
                    Entrar em Contato
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-2 lg:order-2">
            <div className="bg-card rounded-2xl p-2 shadow-lg border overflow-hidden">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.5!2d-48.5583!3d-22.2946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67b6a7b5e5b1%3A0x123456789abcdef0!2sAv.%20Jo%C3%A3o%20Ferraz%20Neto%2C%20N%C2%B054%20-%20Chacara%20Dr.%20Lopes%2C%20Ja%C3%BA%20-%20SP%2C%2017207-330!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr`} width="100%" height="350" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl lg:h-[350px] xl:h-[450px] 2xl:h-[550px]" title="Localização da Unidade Jaú" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default JauUnit;