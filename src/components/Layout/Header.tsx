
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-3'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png" 
              alt="RR Estofados - Logo" 
              className={`${isMobile ? 'h-12 w-12' : 'h-14 w-14'} transition-all duration-300`}
            />
            <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-black ml-3`}>
              <span className="text-orange-500">RR</span> Estofados
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Início
            </a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Sobre
            </a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Serviços
            </a>
            <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Depoimentos
            </a>
            <a href="#unidade-bauru" onClick={(e) => handleNavClick(e, '#unidade-bauru')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Localização
            </a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
              Contato
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-white border-t`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Início
          </a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Sobre
          </a>
          <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Serviços
          </a>
          <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Depoimentos
          </a>
          <a href="#unidade-bauru" onClick={(e) => handleNavClick(e, '#unidade-bauru')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Localização
          </a>
          <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
