import React from "react";
import { useTranslation } from "react-i18next";
import p3Image from "../assets/p3.jpeg";
import "../styles/GraphicsDesign.css";

const GraphicsDesign = () => {
  const { t } = useTranslation();

  return (
    <section className="graphicsdesign-page">
      {/* Background Image */}
      <div
        className="graphicsdesign-hero"
        style={{ backgroundImage: `url(${p3Image})` }}
      >
        <div className="graphicsdesign-overlay" />
        <div className="graphicsdesign-content">
          <h1>{t("serviceData.graphics.title")}</h1>
          <p>{t("serviceData.graphics.desc")}</p>
          <p>
            From vibrant social media posts to polished posters, flyers, and
            brand identity materials, our graphic design services help your
            business stand out with creativity, clarity, and professional
            impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicsDesign;
