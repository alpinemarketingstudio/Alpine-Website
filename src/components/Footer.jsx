import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="alpine-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h3>Alpine Marketing Studio</h3>
            <p>
              We create standout content & digital solutions for forward-thinking businesses. Let's grow together.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="footer-duo">
  <div className="footer-col">
    <h4>Services</h4>
    <ul>
      <li><a href="#design">Design</a></li>
      <li><a href="#photo">Photo</a></li>
      <li><a href="#video">Video</a></li>
      <li><a href="#web">Web</a></li>
      <li><a href="#social">Social</a></li>
    </ul>
  </div>

  <div className="footer-col">
    <h4>Resources</h4>
    <ul>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#case-studies">Case Studies</a></li>
      <li><a href="#guides">Guides</a></li>
    </ul>
  </div>
</div>


          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe for updates, strategies & insights.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email address" />
              <button  type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alpine Marketing Studio. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
