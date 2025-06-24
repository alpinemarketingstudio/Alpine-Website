import React, { useEffect } from "react";
import heroVideo from "../assets/vid1.mp4";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Scroll to services section on button click
  const scrollToSection = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to hash section on initial render (when URL contains a hash)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        // Timeout to wait for DOM render
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section className="hero-section">
        {/* Background Video */}
        <video
          className="hero-background-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Centered Content */}
        <div className="hero-content-wrapper">
          <div className="hero-text text-white">
            <h1>
              {t("heroTitlePart1")}
              <br />
              {t("heroTitlePart2")}
            </h1>
            <p className="mt-3">
              {t("heroParagraphPart1")}
              <span> {t("heroPhotography")} </span>
              {t("heroParagraphPart2")}
              <span> {t("heroMarketing")} </span>
              {t("heroParagraphPart3")}
              <span> {t("heroStudioName")} </span>
              {t("heroParagraphPart4")}
            </p>

            <button className="cta-button mt-4" onClick={scrollToSection}>
              {t("getStarted")} <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
