import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="alpine-footer">
      <div className="footer-overlay">
        <div className="footer-header">
          <h2>{t("footer.studioName")}</h2>
        </div>

        <div className="footer-wrapper">
          <div className="footer-mobile-row">
            <div className="footer-column">
              <h4>{t("footer.services")}</h4>
              <ul>
                <li><a href="#design">{t("footer.design")}</a></li>
                <li><a href="#photo">{t("footer.photo")}</a></li>
                <li><a href="#video">{t("footer.video")}</a></li>
                <li><a href="#web">{t("footer.web")}</a></li>
                <li><a href="#social">{t("footer.social")}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t("footer.resources")}</h4>
              <ul>
                <li><a href="#blog">{t("footer.blog")}</a></li>
                <li><a href="#tutorials">{t("footer.tutorials")}</a></li>
                <li><a href="#case-studies">{t("footer.caseStudies")}</a></li>
                <li><a href="#guides">{t("footer.guides")}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-mobile-row contact-subscribe-row">
            <div className="footer-column">
              <h4>{t("footer.contactUs")}</h4>
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
              <h4>{t("footer.subscribe")}</h4>
              <form className="subscribe-form">
                <input type="email" placeholder={t("footer.placeholderEmail")} />
                <button type="submit">{t("footer.subscribeBtn")}</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {t("footer.studioName")}. {t("footer.rightsReserved")}
          </div>
          <div className="footer-links">
            <a href="#privacy">{t("footer.privacyPolicy")}</a>
            <a href="#terms">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
