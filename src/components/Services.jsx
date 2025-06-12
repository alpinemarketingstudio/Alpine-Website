import React from "react";
import servicesData from "../data/ServicesData";

// Import assets
import videography from "../assets/vid1.mp4";
import photography from "../assets/img2.jpg";
import webdesign from "../assets/img3.jpg";
import marketing from "../assets/img5.jpg";
import uiux from "../assets/img4.jpg";

import "../styles/Services.css";

const mediaMap = {
  "vid1.mp4": videography,
  "img2.jpg": photography,
  "img3.jpg": webdesign,
  "img5.jpg": marketing,
  "img4.jpg": uiux,
};

const Services = () => {
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
        Comprehensive <span>Creative Services</span> to <span>Elevate Your Brand</span>
      </h2>

      <div className="services-grid">
        {servicePairs.map((pair, idx) => (
          <div key={idx} className="services-row">
            {pair.map((service, i) => {
              const mediaSrc = mediaMap[service.media];

              return (
                <div
                  key={service.title}
                  className={`service-item ${
                    service.title === "Videography" ||
                    service.title === "Marketing" ||
                    service.title === "UI/UX Design"
                      ? "larger"
                      : service.title === "Web Design"
                      ? "smaller"
                      : "standard"
                  }`}
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
                    <img
                      className="background-image"
                      src={mediaSrc}
                      alt={service.title}
                    />
                  )}

                  <div className={`overlay ${service.title === "UI/UX Design" ? "animated-uiux" : ""}`}>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              );
            })}
            {pair.length === 1 && <div className="service-item empty" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;