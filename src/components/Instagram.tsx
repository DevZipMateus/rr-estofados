
import React from 'react';
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Instagram = () => {
  // Dados fictícios de posts do Instagram
  const instagramPosts = [
    {
      id: 1,
      image: "/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png",
      caption: "Novo sofá personalizado finalizado! 🛋️ #RREstofados #SofaPersonalizado",
      likes: 45,
      comments: 8
    },
    {
      id: 2,
      image: "/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png",
      caption: "Processo de criação em andamento ✨ #Artesanal #QualidadePremium",
      likes: 32,
      comments: 5
    },
    {
      id: 3,
      image: "/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png",
      caption: "Mais um cliente satisfeito! 😊 #ClienteSatisfeito #RREstofados",
      likes: 67,
      comments: 12
    },
    {
      id: 4,
      image: "/lovable-uploads/64ffa4fb-3b87-41c6-bd20-23c4e5f86478.png",
      caption: "Detalhes que fazem a diferença 🎯 #Detalhes #Qualidade",
      likes: 28,
      comments: 3
    },
    {
      id: 5,
      image: "/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png",
      caption: "Sofá moderno para sala de estar 🏠 #Design #Moderno",
      likes: 53,
      comments: 9
    },
    {
      id: 6,
      image: "/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png",
      caption: "Acabamento impecável em cada peça 👌 #Acabamento #Premium",
      likes: 41,
      comments: 6
    }
  ];

  return (
    <section id="instagram" className="section bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <InstagramIcon className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Siga nosso <span className="text-pink-500">Instagram</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossos trabalhos, novidades e bastidores da criação dos nossos sofás personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`Post ${post.id}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-medium mb-2 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto">
            <InstagramIcon className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              @rrestofados
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Não perca nenhuma novidade! Siga-nos no Instagram e veja nossos trabalhos mais recentes, 
              dicas de decoração e muito mais.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pink-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://instagram.com/rrestofados', '_blank')}
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
