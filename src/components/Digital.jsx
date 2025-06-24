import React from "react";
import { useTranslation } from "react-i18next";
import p4Image from "../assets/p4.jpeg";
import "../styles/DigitalMarketing.css";

const DigitalMarketing = () => {
  const { t } = useTranslation();

  return (
    <section className="digitalmarketing-page">
      {/* Background Image */}
      <div
        className="digitalmarketing-hero"
        style={{ backgroundImage: `url(${p4Image})` }}
      >
        <div className="digitalmarketing-overlay" />
        <div className="digitalmarketing-content">
          <h1>{t("serviceData.digitalMarketing.title")}</h1>
          <p>{t("serviceData.digitalMarketing.desc")}</p>
          <p>
            We use data-driven strategies and the latest tools to boost your
            brand’s visibility, engagement, and conversion rates across social
            media, search engines, and digital ads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
