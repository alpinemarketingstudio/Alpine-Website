import Navbar from './components/Navbar';
import Home from './components/Home'
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
      <Services />
      <PricingSection />
      <WhyAlpine />
      <ContactForm />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
