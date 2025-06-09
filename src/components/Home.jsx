import React from "react";
import heroVideo from "../assets/vid2.mp4";

const Home = () => {
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

        {/* Content */}
        <div className="hero-content-wrapper container-fluid">
          <div className="row justify-content-center align-items-center text-center text-md-start">
            <div className="col-md-8 col-lg-6 hero-text text-white">
              <h1>
                 Elevate Your Brand with
                Stunning Visuals & Smart Digital Strategy
              </h1>
              <p className="mt-3 text-light">
                We specialize in photography, videography, web development,
                UI/UX design, and result-driven marketing. At Alpine Marketing
                Studio, we don’t just build brands — we craft experiences that
                captivate, convert, and grow your audience.
              </p>
              <button className="cta-button mt-4" onClick={scrollToSection}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
