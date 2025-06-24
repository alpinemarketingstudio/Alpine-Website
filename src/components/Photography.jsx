import React from "react";
import { useTranslation } from "react-i18next";
import p1Image from "../assets/p1.jpg";
import "../styles/Photography.css";

const Photography = () => {
  const { t } = useTranslation();

  return (
    <section className="photography-page">
      {/* Background Image */}
      <div
        className="photography-hero"
        style={{ backgroundImage: `url(${p1Image})` }}
      >
        <div className="photography-overlay" />
        <div className="photography-content">
          <h1>{t("serviceData.photography.title")}</h1>
          <p>{t("serviceData.photography.desc")}</p>
          <p>
            Our photography captures the true essence and detail of your brand, 
            skillfully portraying food, products, and hospitality with clarity 
            and style. Each shot tells a story of quality and ambiance that 
            enhances your brand's visual presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
