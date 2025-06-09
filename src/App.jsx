import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import WhyAlpine from './components/WhyAlpine';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Navbar />

      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="pricing"><PricingSection /></div>
      <div id="about"><WhyAlpine /></div>
      <div id="contact"><ContactForm /></div>
    </>
  );
}

export default App;
