import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="alpine-footer">
      <div className="footer-overlay">
        <div className="footer-header">
          <h2>Alpine Marketing Studio</h2>
        </div>

        <div className="footer-wrapper">
          <div className="footer-mobile-row">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#design">Design</a></li>
                <li><a href="#photo">Photo</a></li>
                <li><a href="#video">Video</a></li>
                <li><a href="#web">Web</a></li>
                <li><a href="#social">Social</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#guides">Guides</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-mobile-row contact-subscribe-row">
            <div className="footer-column">
              <h4>Contact Us</h4>
              <p className="phone-row">
                <i
                  className="fab fa-whatsapp"
                  style={{ color: "green", marginRight: "8px" }}
                  aria-hidden="true"
                ></i>
                <a
                  href="https://wa.me/919191919199?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91-9876543211
                </a>
              </p>
              <p className="email-row">
                <span className="email-flex">
                  📧{" "}
                  <a href="mailto:alpinemarketingstudio@gmail.com">
                    alpinemarketingstudio@gmail.com
                  </a>
                </span>
              </p>
              <div className="social-icons">
                <a href="#" className="facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/alpinemarketingstudio"
                  className="github"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div className="footer-column subscribe-column">
              <h4>Subscribe to our Newsletter</h4>
              <form className="subscribe-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Alpine Marketing Studio. All rights reserved.</div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
