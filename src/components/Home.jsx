import React from "react";
import heroImg from "../assets/img.jpg";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="hero-content row align-items-center justify-content-between"> 
          {/* Text Section */}
          <div className="col-md-6 text-white hero-text">
            <h1 className="display-4 fw-bold">Elevate Your Brand with Stunning Visuals & Smart Digital Strategy</h1>
            <p className="mt-3 text-light">
              We specialize in photography, videography, web development, UI/UX design, and result-driven marketing. At Alpine Marketing Studio, 
              we don’t just build brands — we craft experiences that captivate, convert, and grow your audience
            </p>
            <button className="btn btn-success btn-lg mt-4 px-4">Get Started</button>
          </div>
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <div className="hero-img-wrapper">
              <img src={heroImg} alt="Hero" className="img-fluid hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;