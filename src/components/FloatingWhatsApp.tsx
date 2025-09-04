
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  const handleClick = () => {
    window.open('https://wa.me/551436266146?text=Olá! Gostaria de solicitar um orçamento para sofá personalizado.', '_blank');
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-50`}>
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg border opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
        </div>
        
        {/* Button */}
        <button
          onClick={handleClick}
          className={`${isMobile ? 'p-3' : 'p-4'} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95`}
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle size={isMobile ? 24 : 28} />
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
