import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import WhyAlpine from './components/WhyAlpine';
import ContactForm from './components/ContactForm';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="about">
        <WhyAlpine />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
