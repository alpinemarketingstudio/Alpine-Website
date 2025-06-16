import React from "react";
import servicesData from "../data/ServicesData";
import { FiArrowRight } from "react-icons/fi";

// Import assets
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
            {pair.map((service) => {
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
                  } ${service.title === "Graphics Designing" ? "portrait" : ""}`}
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

                  <div
                    className={`overlay ${
                      service.title === "UI/UX Design" ? "animated-uiux" : ""
                    }`}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

                    {/* Read More button */}
                    <a href="">
                    <div className="read-more">
                      <span>Read More</span>
                      <FiArrowRight size={14} />
                    </div>
                    </a>
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
