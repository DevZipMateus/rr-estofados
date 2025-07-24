
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import Instagram from '../components/Instagram';
import BauruUnit from '../components/BauruUnit';
import JauUnit from '../components/JauUnit';
import LencoisUnit from '../components/LencoisUnit';
import BotucatuUnit from '../components/BotucatuUnit';
import Contact from '../components/Contact';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <ProductShowcase />
        <Testimonials />
        <Instagram />
        <BauruUnit />
        <JauUnit />
        <LencoisUnit />
        <BotucatuUnit />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
