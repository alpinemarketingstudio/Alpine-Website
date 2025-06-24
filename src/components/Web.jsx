import React from "react";
import { useTranslation } from "react-i18next";
import p5Image from "../assets/p5.jpg";
import "../styles/WebDesign.css";

const WebDesign = () => {
  const { t } = useTranslation();

  return (
    <section className="webdesign-page">
      {/* Background Image */}
      <div
        className="webdesign-hero"
        style={{ backgroundImage: `url(${p5Image})` }}
      >
        <div className="webdesign-overlay" />
        <div className="webdesign-content">
          <h1>{t("serviceData.webDevelopment.title")}</h1>
          <p>{t("serviceData.webDevelopment.desc")}</p>
          <p>
            We build modern, responsive, and user-friendly websites tailored to
            your business goals. Whether it’s an e-commerce platform, portfolio,
            or custom web app, we deliver fast, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
