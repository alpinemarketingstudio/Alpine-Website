import React from "react";
import heroVideo from "../assets/vid1.mp4";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const scrollToSection = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
