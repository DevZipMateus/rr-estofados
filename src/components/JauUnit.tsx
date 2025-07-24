
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

  return (
    <section id="unidade-jau" className="section bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unidade <span className="text-primary">Jaú SP</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visite nossa unidade em Jaú e conheça de perto nossos produtos e serviços de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div className="order-1 lg:order-1">
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">Nossa Localização</h3>
                  <p className="text-muted-foreground">Fácil acesso e estacionamento</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Endereço</h4>
                  <p className="text-muted-foreground">{address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Horário de Funcionamento</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda à Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                {/* View on Google Maps button */}
                <div className="pt-2">
                  <Button 
                    onClick={handleViewOnGoogleMaps}
                    variant="outline"
                    className="w-full mb-4"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Ver no Google Maps
                  </Button>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="w-full btn-primary"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-2 lg:order-2">
            <div className="bg-card rounded-2xl p-2 shadow-lg border overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.5!2d-48.5583!3d-22.2946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67b6a7b5e5b1%3A0x123456789abcdef0!2sAv.%20Jo%C3%A3o%20Ferraz%20Neto%2C%20N%C2%B054%20-%20Chacara%20Dr.%20Lopes%2C%20Ja%C3%BA%20-%20SP%2C%2017207-330!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Localização da Unidade Jaú"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JauUnit;
