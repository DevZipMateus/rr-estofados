import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [api, setApi] = useState<any>(null);
  const images = ['/lovable-uploads/img/517924727_18019589411721722_5215946469178719760_n.jpg', '/lovable-uploads/img/4020adcb-8280-4f99-b4f3-3cacabefba89.jpeg', '/lovable-uploads/img/7929b27b-c2d7-468f-9571-02107b8d5cf2.jpeg', '/lovable-uploads/img/0f62847d-6bf7-47e3-b88f-76a3d3221e7e.jpeg', '/lovable-uploads/img/801a4920-8dff-492c-8137-f28dcf23359d.jpeg', '/lovable-uploads/img/f2c733b6-2dab-47cd-9fa9-1b60b982c67d.jpeg', '/lovable-uploads/img/0e05a9a9-9143-49dd-afef-a17bea62d5bf.jpeg', '/lovable-uploads/img/8fbd3b03-24b0-4ee3-86e9-df392c4571d9.jpeg', '/lovable-uploads/img/e1c8a7a7-fb2f-490e-ac0c-23f8f2534ee7.jpeg', '/lovable-uploads/img/a7eafd4f-564d-4192-99d6-6347a7c45422.jpeg', '/lovable-uploads/img/8b314b07-438d-4680-8b0d-9c5cb24893a1.jpeg', '/lovable-uploads/img/c3cd2740-af9c-4ba7-81c0-17a4beb8edee.jpeg', '/lovable-uploads/img/bb6e25c9-4707-451b-9e63-3e36e255d180.jpeg', '/lovable-uploads/img/82a0913c-4f48-4579-b328-d6c96b9ea075.jpeg', '/lovable-uploads/img/e8711e83-5fb8-4099-aa76-423c3c29f798.jpeg', '/lovable-uploads/img/f1db5e0b-e42a-4f3c-9955-fdb9b1daa651.jpeg', '/lovable-uploads/img/881a73be-9877-4c8a-8b95-ebcbf2b46562.jpeg', '/lovable-uploads/img/0b9b70f7-af7e-4a09-aaa9-d3951236b97f.jpeg'];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [api]);
  const handleImageClick = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };
  const closeExpandedImage = () => {
    setExpandedImage(null);
  };
  return <section id="produtos" className="section bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Um pouco de nossos <span className="text-[#fc9c22]">produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos sofás personalizados, cada um feito com muito carinho e dedicação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel setApi={setApi} opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {images.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" onClick={() => handleImageClick(image)}>
                      <img src={image} alt={`Produto ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium bg-black/50 px-3 py-1 rounded">
                            Clique para expandir
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Expanded Image Modal */}
        {expandedImage && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeExpandedImage}>
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button onClick={closeExpandedImage} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
              <img src={expandedImage} alt="Produto expandido" className="w-full h-full object-contain rounded-lg" onClick={e => e.stopPropagation()} />
            </div>
          </div>}
      </div>
    </section>;
};
export default ProductShowcase;