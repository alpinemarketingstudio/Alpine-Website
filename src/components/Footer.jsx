import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-4">
      <div className="container text-center">
        <div className="social-icons d-flex justify-content-center flex-wrap gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/alpinemarketingstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon tiktok"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <small className="d-block mt-3">&copy; 2025 Your Company. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
