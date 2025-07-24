
import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const BauruUnit = () => {
  const address = "Av. Duque de Caxias, 253 - Vila Mesquita, Bauru - SP, 17014-340";
  const encodedAddress = encodeURIComponent(address);
  
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5514998473439?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado.', '_blank');
  };

  return (
    <section id="unidade-bauru" className="section bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unidade <span className="text-primary">Bauru SP</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visite nossa unidade em Bauru e conheça de perto nossos produtos e serviços de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl p-2 shadow-lg border overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO2TdZ4fJmAXfQ&q=${encodedAddress}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Localização da Unidade Bauru"
              />
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
};

export default BauruUnit;
