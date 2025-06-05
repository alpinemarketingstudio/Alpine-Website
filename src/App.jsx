import Navbar from './components/Navbar';
import Home from './components/Home'
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import WhyAlpine from './components/WhyAlpine';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <PricingSection />
      <WhyAlpine />
      <ContactForm />
    </>
  );
}

export default App;
