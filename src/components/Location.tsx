
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossa <span className="text-yellow-500">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visite nossa loja física ou entre em contato para agendar uma visita. 
            Estamos prontos para atendê-lo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Endereço</h4>
                    <p className="text-gray-600">Av Duque de Caxias 253<br />Bauru - SP</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Telefone</h4>
                    <a href="tel:+5514998473439" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      (14) 99847-3439
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">E-mail</h4>
                    <a href="mailto:rrestofados2@hotmail.com" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      rrestofados2@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Horário de Funcionamento</h4>
                    <div className="text-gray-600">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 14h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">Agende sua Visita</h3>
              <p className="mb-6 opacity-90">
                Venha conhecer nossa loja e veja de perto a qualidade dos nossos produtos.
              </p>
              <a 
                href="https://wa.me/5514998473439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Agendar Visita
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1234567890123!2d-49.0606!3d-22.3147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67a8b7d4e8b3%3A0x123456789abcdef0!2sAv.%20Duque%20de%20Caxias%2C%20253%20-%20Bauru%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da RRestofados"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
