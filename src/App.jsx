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
      <Home />
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <WhyAlpine />
      <section id="blog">
        <Blog />
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
