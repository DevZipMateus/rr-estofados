
import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const BauruUnit = () => {
  const address = "Av. Duque de Caxias, 253 - Vila Mesquita, Bauru - SP, 17014-340";
  const encodedAddress = encodeURIComponent(address);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5514998473439?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado.', '_blank');
  };

  const handleViewOnGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  useEffect(() => {
    console.log('BauruUnit: Component mounted');
    console.log('BauruUnit: Address:', address);
    console.log('BauruUnit: Encoded address:', encodedAddress);
    
    // Check if Google Maps is accessible
    const testGoogleMaps = () => {
      fetch('https://maps.googleapis.com/maps/api/js?key=test', { mode: 'no-cors' })
        .then(() => {
          console.log('BauruUnit: Google Maps API seems accessible');
        })
        .catch((error) => {
          console.log('BauruUnit: Google Maps API access issue:', error);
        });
    };
    
    testGoogleMaps();
  }, []);

  const handleMapLoad = () => {
    console.log('BauruUnit: Map iframe loaded successfully');
    setMapLoaded(true);
    setMapError(false);
  };

  const handleMapError = () => {
    console.log('BauruUnit: Map iframe failed to load');
    setMapLoaded(false);
    setMapError(true);
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
              {/* Map iframe with error handling */}
              {!mapError ? (
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
                  onLoad={handleMapLoad}
                  onError={handleMapError}
                />
              ) : (
                // Fallback when map fails to load
                <div className="w-full h-[400px] bg-muted rounded-xl flex flex-col items-center justify-center text-center p-8">
                  <MapPin className="text-primary mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Mapa não disponível
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Não foi possível carregar o mapa. Clique no botão abaixo para visualizar no Google Maps.
                  </p>
                  <Button 
                    onClick={handleViewOnGoogleMaps}
                    variant="outline"
                    className="mt-2"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Ver no Google Maps
                  </Button>
                </div>
              )}
              
              {/* Loading indicator */}
              {!mapLoaded && !mapError && (
                <div className="absolute inset-0 bg-muted/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Carregando mapa...</p>
                  </div>
                </div>
              )}
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
        </div>
      </div>
    </section>
  );
};

export default BauruUnit;
