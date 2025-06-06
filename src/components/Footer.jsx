import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="alpine-footer">
      <div className="footer-overlay">
        <div className="footer-content">
          <h2 className="footer-title">Alpine Marketing Studio</h2>
          <p className="footer-tagline">Elevating Brands with Strategy and Style</p>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <p id="contact-phone" className="footer-phone">
            📞 <a href="tel:+919191919199">+91 9191919199</a>
          </p>

          <p className="footer-copy">&copy; {new Date().getFullYear()} Alpine Marketing Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
