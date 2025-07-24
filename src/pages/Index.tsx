
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import BauruUnit from '../components/BauruUnit';
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
        <Plans />
        <Testimonials />
        <BauruUnit />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
