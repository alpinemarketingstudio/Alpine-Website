import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/WhyAlpine.css";
import { useTranslation } from "react-i18next";

export default function WhyAlpine() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const pauseTimerRef = useRef(null);

  const features = t("whyFeatures", { returnObjects: true });

  const handlePause = () => {
    pauseTimerRef.current = setTimeout(() => {
      swiperRef.current?.autoplay?.stop();
    }, 200);
  };

  const handleResume = () => {
    clearTimeout(pauseTimerRef.current);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section className="why-alpine-section">
      <div className="why-alpine-container">
        <h2 className="why-heading">
          <span className="white-text">{t("whyOnly")} </span>
          <span className="green-text">Alpine</span>
          <span className="white-text">?</span>
        </h2>

        <Swiper
          loop={true}
          spaceBetween={30}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            767: { slidesPerView: 1.2 },
            911: { slidesPerView: 2 },
            1199: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          className="feature-swiper moving-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div
                className="feature-card"
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onTouchStart={handlePause}
                onTouchEnd={handleResume}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
