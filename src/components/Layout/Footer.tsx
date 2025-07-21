
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">R</span>Restofados
            </h3>
            <p className="text-gray-300 mb-6">
              Especialistas em sofás personalizados desde 2020. Transformamos seu ambiente 
              com qualidade, conforto e estilo únicos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rrestofados_sofasbauru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-yellow-500" size={18} />
                <span>(14) 99847-3439</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-yellow-500" size={18} />
                <span>rrestofados2@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-yellow-500" size={18} />
                <span>Av Duque de Caxias 253<br />Bauru - SP</span>
              </li>
            </ul>
          </div>
          
          {/* Hours & Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Horário de Funcionamento</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Clock className="mr-3 text-yellow-500" size={18} />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-semibold text-yellow-500">Links Rápidos</h5>
              <ul className="space-y-1">
                <li><a href="#inicio" className="hover:text-yellow-500 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-yellow-500 transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-yellow-500 transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-yellow-500 transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RRestofados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
