
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl 2xl:max-w-[1600px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png" 
              alt="RR Estofados - Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-18 2xl:w-18 transition-all duration-300"
            />
            <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black ml-2 sm:ml-3">
              <span className="text-orange-500">RR</span> Estofados
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex lg:space-x-6 xl:space-x-8 2xl:space-x-10">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Início
            </a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Sobre
            </a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Serviços
            </a>
            <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Depoimentos
            </a>
            <a href="#unidade-bauru" onClick={(e) => handleNavClick(e, '#unidade-bauru')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Localização
            </a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl">
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
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Início
          </a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Sobre
          </a>
          <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Serviços
          </a>
          <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Depoimentos
          </a>
          <a href="#unidade-bauru" onClick={(e) => handleNavClick(e, '#unidade-bauru')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Localização
          </a>
          <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors text-base">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
