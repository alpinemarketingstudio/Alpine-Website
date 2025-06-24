import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="alpine-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h3>{t("footer.studioName")}</h3>
            <p>{t("footer.studioDescription")}</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="footer-duo">
            <div className="footer-col">
              <h4>{t("footer.services")}</h4>
              <ul>
                <li><a href="#design">{t("footer.design")}</a></li>
                <li><a href="#photo">{t("footer.photo")}</a></li>
                <li><a href="#video">{t("footer.video")}</a></li>
                <li><a href="#web">{t("footer.web")}</a></li>
                <li><a href="#social">{t("footer.social")}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t("footer.resources")}</h4>
              <ul>
                <li><a href="#blog">{t("footer.blog")}</a></li>
                <li><a href="#case-studies">{t("footer.caseStudies")}</a></li>
                <li><a href="#guides">{t("footer.guides")}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t("footer.subscribe")}</h4>
            <p>{t("footer.newsletterText")}</p>
            <form className="subscribe-form">
              <input type="email" placeholder={t("footer.placeholderEmail")} />
              <button type="submit">{t("footer.subscribeBtn")}</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t("footer.studioName")}. {t("footer.rightsReserved")}</p>
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
