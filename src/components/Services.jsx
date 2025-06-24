import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import servicesData from "../data/ServicesData";

import videography from "../assets/vid3.mp4";
import photography from "../assets/p1.jpg";
import graphics from "../assets/p3.jpeg";
import webdev from "../assets/p5.jpg";
import uiux from "../assets/p4.jpeg";

import "../styles/Services.css";

const mediaMap = {
  "vid1.mp4": videography,
  "img2.jpg": photography,
  "img3.jpg": graphics,
  "img5.jpg": webdev,
  "img4.jpg": uiux,
};

const getServicePath = (titleKey) => {
  switch (titleKey) {
    case "serviceData.photography.title":
      return "/photography";
    case "serviceData.videography.title":
      return "/videography";
    case "serviceData.graphics.title":
      return "/graphics";
    case "serviceData.webDevelopment.title":
      return "/web";
    case "serviceData.digitalMarketing.title":
      return "/digital";
    default:
      return "/";
  }
};

const Services = () => {
  const { t } = useTranslation();

  const chunkServices = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const servicePairs = chunkServices(servicesData, 2);

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">
        <Trans i18nKey="servicesSectionTitle">
          Comprehensive <span>Creative Services</span> to <span>Elevate Your Brand</span>
        </Trans>
      </h2>

      <div className="services-grid">
        {servicePairs.map((pair, idx) => (
          <div key={idx} className="services-row">
            {pair.map((service) => {
              const mediaSrc = mediaMap[service.media];
              const title = t(service.titleKey);
              const desc = t(service.descKey);

              const isLarger =
                service.titleKey === "serviceData.videography.title" ||
                service.titleKey === "serviceData.digitalMarketing.title" ||
                service.titleKey === "serviceData.uiux.title";

              const isSmaller = service.titleKey === "serviceData.webDevelopment.title";
              const isPortrait = service.titleKey === "serviceData.graphics.title";

              return (
                <div
                  key={service.titleKey}
                  className={`service-item ${isLarger ? "larger" : isSmaller ? "smaller" : "standard"} ${isPortrait ? "portrait" : ""}`}
                >
                  {service.mediaType === "video" ? (
                    <video
                      className="background-video"
                      src={mediaSrc}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img className="background-image" src={mediaSrc} alt={title} />
                  )}

                  <div className={`overlay ${service.titleKey === "serviceData.uiux.title" ? "animated-uiux" : ""}`}>
                    <h3>{title}</h3>
                    <p>{desc}</p>

                    <Link to={getServicePath(service.titleKey)} className="read-more">
                      <span>{t("readMore")}</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* Fill empty slot if odd number of items */}
            {pair.length === 1 && <div className="service-item empty" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
