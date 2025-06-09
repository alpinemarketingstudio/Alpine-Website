// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import PricingSection from '../components/PricingSection';
import WhyAlpine from '../components/WhyAlpine';
import Blog from '../components/Blog';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
