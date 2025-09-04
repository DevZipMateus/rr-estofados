
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import StoreSelector from './StoreSelector';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);
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
    setIsStoreSelectorOpen(true);
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
          className={`${isMobile ? 'p-3' : 'p-4'} bg-transparent rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95`}
          aria-label="Abrir WhatsApp"
        >
          <img 
            src="/lovable-uploads/319a4dea-4839-4af3-9af4-df825e495eb3.png" 
            alt="WhatsApp" 
            className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'}`}
          />
        </button>
      </div>
      
      <StoreSelector 
        isOpen={isStoreSelectorOpen}
        onClose={() => setIsStoreSelectorOpen(false)}
      />
    </div>
  );
};

export default FloatingWhatsApp;
