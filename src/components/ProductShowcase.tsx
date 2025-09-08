import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
const ProductShowcase = () => {
  // Lista de todas as imagens de produtos
  const productImages = ['/lovable-uploads/produtos/02bb79a4-3aeb-40ff-9777-e3e8d6fb5de0.jpeg', '/lovable-uploads/produtos/09eb5c91-7b9a-409c-b96d-79aa0c504346.jpeg', '/lovable-uploads/produtos/0ac38ab3-4f48-44c6-8c2c-4079ada6de69.jpeg', '/lovable-uploads/produtos/0ea727bb-f0c8-4188-b688-ff56e0350858.jpeg', '/lovable-uploads/produtos/13f07f6e-c902-4bec-9af3-f19b3a8cd899.jpeg', '/lovable-uploads/produtos/13f0b67e-bea4-41ff-ac5a-12b1e58052c7.jpeg', '/lovable-uploads/produtos/16d95ddf-c57b-4354-b057-187fb22526bc.jpeg', '/lovable-uploads/produtos/185fc9a6-3074-49d3-ac4f-fb3fc6426286.jpeg', '/lovable-uploads/produtos/20d4bceb-65e3-4c8a-b526-3bd5ba96ab75.jpeg', '/lovable-uploads/produtos/24a0c8bb-8e56-4e37-bd66-e751acdd84fc.jpeg', '/lovable-uploads/produtos/257eb7d2-9554-4ede-a3d3-160b6f79e429.jpeg', '/lovable-uploads/produtos/2e83bdc5-6d14-4943-a6b3-c47bdc4620f1.jpeg', '/lovable-uploads/produtos/31c318f5-862a-4732-9bd7-70084d0b1d6d.jpeg', '/lovable-uploads/produtos/370fd9fa-accb-47b8-9280-aa85441ae510.jpeg', '/lovable-uploads/produtos/3ca9ab37-57a4-4325-bf54-00bcdfd8db25.jpeg', '/lovable-uploads/produtos/3f161061-29fc-4c51-bddd-f5175cb66f69.jpeg', '/lovable-uploads/produtos/42a60aae-79f1-423e-ba67-a2f85f6886aa.jpeg', '/lovable-uploads/produtos/4cc8c2de-485d-47a8-9b57-2ec732c0bc21.jpeg', '/lovable-uploads/produtos/4f85bb99-9ada-4214-af19-644615d0d8b4.jpeg', '/lovable-uploads/produtos/59abb49d-7b36-4e20-877c-f67768510ffd.jpeg', '/lovable-uploads/produtos/6137cc62-b367-48d4-8e35-2c6b34ef015b.jpeg', '/lovable-uploads/produtos/6217071d-77f2-4d37-a7c4-bcae46c1de7f.jpeg', '/lovable-uploads/produtos/6a51e3ab-146e-4f83-ac3b-b120484a56a0.jpeg', '/lovable-uploads/produtos/6d8566e6-5bed-46fa-8df1-34edda36965e.jpeg', '/lovable-uploads/produtos/764c6de2-04fc-44a3-922e-d6ba35861d64.jpeg', '/lovable-uploads/produtos/77eeab7d-7f35-4692-b23d-d107a70ff692.jpeg', '/lovable-uploads/produtos/7aab4ebe-2ea9-4ae3-bbe6-28012e69bac0.jpeg', '/lovable-uploads/produtos/81413ef5-a1c7-45f4-bc22-7f5f740de594.jpeg', '/lovable-uploads/produtos/83144da8-de90-4e85-b857-26b11e0b9b12.jpeg', '/lovable-uploads/produtos/858d1864-4383-484e-b147-652f084bc936.jpeg', '/lovable-uploads/produtos/860c7e85-1886-4e97-b28e-44cca8663b5a.jpeg', '/lovable-uploads/produtos/86713642-537f-47f1-8f55-97b1e1352149.jpeg', '/lovable-uploads/produtos/8ff65b5e-3e93-4cc0-a371-cf570f0fa368.jpeg', '/lovable-uploads/produtos/93c830a5-7fe7-4f3a-8f3a-8028af01984e.jpeg', '/lovable-uploads/produtos/96183847-e4de-4325-b658-ffd8d86df024.jpeg', '/lovable-uploads/produtos/96eef951-3252-460f-bea2-cfd0f1969edd.jpeg', '/lovable-uploads/produtos/9ae93933-2541-44bc-ad97-7b013e105c44.jpeg', '/lovable-uploads/produtos/a0ba50f0-8bc7-4b53-87de-30da25d0e900.jpeg', '/lovable-uploads/produtos/a83a8f81-ae7b-4af0-b8e6-d69d94b2aa8d.jpeg', '/lovable-uploads/produtos/a853f8eb-78a7-4d6b-9a6b-487e86faf1f9.jpeg', '/lovable-uploads/produtos/a8a8f838-edf0-4df2-8bd9-66e368bec403.jpeg', '/lovable-uploads/produtos/ac92feff-5fc2-400e-bb64-87dd1274eee0.jpeg', '/lovable-uploads/produtos/b1b6664d-eed8-4cf5-b641-3e1deeec820f.jpeg', '/lovable-uploads/produtos/b39dab9e-4a9d-4167-9311-52bcf6c2147d.jpeg', '/lovable-uploads/produtos/b7fbea05-3a3e-4559-a509-c35b245e78ee.jpeg', '/lovable-uploads/produtos/c130f162-ca4f-4082-8d09-1fcdae2943d7.jpeg', '/lovable-uploads/produtos/cdb25d39-d86f-4b66-8a41-a12cd32eb465.jpeg', '/lovable-uploads/produtos/ce28bffb-ae2a-40bc-973c-eacb7ca18035.jpeg', '/lovable-uploads/produtos/d5f204d9-337e-44fe-a544-3f4f3580dfc2.jpeg', '/lovable-uploads/produtos/e4cdd68a-6afb-44b0-bb38-b7d87191ceae.jpeg', '/lovable-uploads/produtos/e81112f4-3119-4f89-a01b-892fd653697c.jpeg', '/lovable-uploads/produtos/e945dc25-7552-45f8-a764-63e14a3e554f.jpeg', '/lovable-uploads/produtos/edff43fe-c25e-477e-a94e-ab8e32116cc8.jpeg', '/lovable-uploads/produtos/f166da65-78f8-4f04-ba8a-51a2e32c57bf.jpeg', '/lovable-uploads/produtos/fc5a52d5-5024-489c-840c-dceeff96f3e7.jpeg', '/lovable-uploads/produtos/fc9f866e-680d-4f79-818f-d44b56daee9d.jpeg', '/lovable-uploads/produtos/ff74bba1-d3af-4c5d-8c8b-4eb5cdc1a450.jpeg', '/lovable-uploads/produtos/ffbd7b2d-8f07-4888-bad8-ea171451fd45.jpeg'];
  return <section id="produtos" className="section bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-[#fc9c22]">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com sofás prontos para entrega e mesas de jantar disponíveis em nosso estoque
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border">
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Sofás Prontos</h3>
              <p className="text-muted-foreground">Diversos modelos disponíveis para entrega imediata</p>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border">
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Mesas de Jantar</h3>
              <p className="text-muted-foreground">Mesas de qualidade prontas para entrega</p>
            </div>
            
            <div className="bg-card rounded-lg p-8 text-center shadow-lg border md:col-span-2 lg:col-span-1">
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Qualidade Garantida</h3>
              <p className="text-muted-foreground">Todos os produtos com garantia conforme código do consumidor</p>
            </div>
          </div>
        </div>

        {/* Galeria de Produtos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Galeria de <span className="text-[#fc9c22]">Produtos</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Confira alguns dos nossos produtos disponíveis
            </p>
          </div>

          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {productImages.map((image, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg border bg-card">
                      <img src={image} alt={`Produto ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-card border shadow-lg" />
            <CarouselNext className="right-2 bg-card border shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;