import React, { useRef, useState } from "react";
import servicesData from "../data/ServicesData";
import "../styles/Services.css";

const Services = () => {
  const videoRefs = useRef([]);
  const [pausedStates, setPausedStates] = useState({});

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPausedStates((prev) => ({ ...prev, [index]: false }));
    } else {
      video.pause();
      setPausedStates((prev) => ({ ...prev, [index]: true }));
    }
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    setPausedStates((prev) => ({ ...prev, [index]: video.paused }));
  };

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">
        <span className="highlight-black">Comprehensive Creative Services to Elevate Your Brand</span>
      </h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className={`service-card ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="media-box">
              {service.mediaType === "video" ? (
                <div className="video-wrapper" onClick={() => handleVideoClick(index)}>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={service.media}
                    muted
                    onClick={() => togglePlay(index)}
                  />
                  {pausedStates[index] !== false && (
                    <button className="play-button" onClick={() => togglePlay(index)}>
                      <i className="fas fa-play"></i>
                    </button>
                  )}
                </div>
              ) : (
                <img src={service.media} alt={service.title} className="media-img" />
              )}
            </div>
            <div className="desc-box">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
