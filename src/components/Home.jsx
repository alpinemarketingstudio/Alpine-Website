import React from "react";
import heroVideo from "../assets/vid1.mp4";
import { GoArrowRight } from "react-icons/go";

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

        {/* Centered Content */}
        <div className="hero-content-wrapper">
          <div className="hero-text text-white">
            <h1>
              Elevate Your Brand with <br />
              Stunning Visuals & Smart Digital Strategy
            </h1>
            <p className="mt-3 ">
              We blend stunning visuals with smart digital strategy — offering
              <span>
                {" "}
                Photography, Videography, Web development, UI/UX design,
              </span>{" "}
              and
              <span> Marketing</span> that delivers results. At{" "}
              <span>Alpine Marketing Studio,</span> we turn your brand into a
              story your audience remembers.
            </p>
            
            <button className="cta-button mt-4" onClick={scrollToSection}>
              Get Started<i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
