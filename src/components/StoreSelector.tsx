import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from 'lucide-react';

interface Store {
  name: string;
  city: string;
  phone: string;
  whatsapp: string;
}

interface StoreSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const stores: Store[] = [
  {
    name: "Loja Jaú",
    city: "Jaú - SP",
    phone: "(14) 3626-6146",
    whatsapp: "551436266146"
  },
  {
    name: "Loja Lençóis Paulista",
    city: "Lençóis Paulista - SP", 
    phone: "(14) 3263-1798",
    whatsapp: "5514997817532"
  },
  {
    name: "Loja Botucatu",
    city: "Botucatu - SP",
    phone: "(14) 3882-7728", 
    whatsapp: "5514997576800"
  }
];

const StoreSelector: React.FC<StoreSelectorProps> = ({ 
  isOpen, 
  onClose, 
  message = "Olá! Gostaria de solicitar um orçamento para sofá personalizado." 
}) => {
  const handleStoreSelect = (whatsapp: string) => {
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Escolha a loja mais próxima
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3">
          {stores.map((store, index) => (
            <Button
              key={index}
              onClick={() => handleStoreSelect(store.whatsapp)}
              variant="outline"
              className="w-full p-4 h-auto flex items-center justify-between hover:bg-green-50 hover:border-green-500 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <div className="text-left">
                  <div className="font-semibold">{store.name}</div>
                  <div className="text-sm text-muted-foreground">{store.city}</div>
                  <div className="text-sm text-muted-foreground">{store.phone}</div>
                </div>
              </div>
              <MessageCircle className="h-5 w-5 text-green-500" />
            </Button>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          Clique na loja de sua preferência para abrir o WhatsApp
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default StoreSelector;