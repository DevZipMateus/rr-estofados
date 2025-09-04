
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                href="https://www.instagram.com/rrestofados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Jaú Unit */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-500">Unidade Jaú</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={16} />
                <span>Av. João Ferraz Neto, 54<br />Chácara Dr. Lopes, Jaú - SP</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={16} />
                <span>(14) 3626-6146</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={16} />
                <div>
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Other Units */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Outras Unidades</h4>
            
            {/* Lençóis Paulista */}
            <div className="mb-6">
              <h5 className="font-semibold text-yellow-500 mb-2">Lençóis Paulista</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={14} />
                  <span>R. Cel. Joaquim Gabriel, 667<br />Centro, Lençóis Paulista - SP</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={14} />
                  <span>(14) 99781-7532</span>
                </li>
              </ul>
            </div>

            {/* Botucatu */}
            <div>
              <h5 className="font-semibold text-yellow-500 mb-2">Botucatu</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={14} />
                  <span>Av. Leonardo Vilas Boas, 2114<br />Vila Nova Botucatu - SP</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={14} />
                  <span>(14) 99757-6800</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="flex items-start">
                <Mail className="mr-2 mt-1 flex-shrink-0 text-yellow-500" size={16} />
                <span className="text-sm">rrestofados2@hotmail.com</span>
              </div>
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
