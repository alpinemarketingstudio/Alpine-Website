import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/WhyAlpine.css";
import features from "../data/whyFeatures";

export default function WhyAlpine() {
  return (
    <section className="why-alpine-section">
      <div className="why-alpine-container">
        <h2 className="why-heading">
          <span className="white-text">Why Only </span>
          <span className="green-text">Alpine</span>
          <span className="white-text">? </span>
        </h2>

        <Swiper
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Navigation]}
          className="feature-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`feature-card ${isActive ? 'active' : ''}`}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}