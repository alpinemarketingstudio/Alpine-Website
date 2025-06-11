import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="alpine-footer">
      <h2 className="footer-title">Alpine Marketing Studio</h2>
      <p className="footer-tagline">Elevating Brands with Strategy and Style</p>

      <div className="social-icons">
        <a href="#" className="facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" className="linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/alpinemarketingstudio" className="github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p id="contact-phone" className="footer-phone">
  <i className="fab fa-whatsapp" style={{ color: 'green', marginRight: '8px' }}></i>
  <a
    href="https://wa.me/919191919199?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
  >
    +91-9876543211
  </a>
</p>

      <p className="footer-email">📧 <a href="mailto:alpinemarketingstudio@gmail.com">alpinemarketingstudio@gmail.com</a></p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Alpine Marketing Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
