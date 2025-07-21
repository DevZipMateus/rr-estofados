
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:%0A%0A` +
      `Nome: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Telefone: ${formData.phone}%0A` +
      `Mensagem: ${formData.message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/5514998473439?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contato" className="section bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu ambiente? Entre em contato conosco e solicite 
            seu orçamento personalizado sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Solicite seu Orçamento</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground font-medium">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-card-foreground font-medium">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-card-foreground font-medium">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(14) 99999-9999"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-card-foreground font-medium">Mensagem</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva o que você precisa (tipo de sofá, tamanho, cor, etc.)"
                  required
                  rows={4}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary"
              >
                <Send className="mr-2" size={20} />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Contato Rápido</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5514998473439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group border"
                >
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground group-hover:text-green-600">WhatsApp</h4>
                    <p className="text-muted-foreground">(14) 99847-3439</p>
                  </div>
                </a>

                <a 
                  href="tel:+5514998473439"
                  className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group border"
                >
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground group-hover:text-blue-600">Telefone</h4>
                    <p className="text-muted-foreground">(14) 99847-3439</p>
                  </div>
                </a>

                <a 
                  href="mailto:rrestofados2@hotmail.com"
                  className="flex items-center p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group border"
                >
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground group-hover:text-primary">E-mail</h4>
                    <p className="text-muted-foreground">rrestofados2@hotmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Resposta <span className="text-primary">Rápida</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Respondemos todas as mensagens em até 2 horas durante nosso horário de funcionamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5514998473439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:+5514998473439"
                  className="btn-secondary text-center"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
