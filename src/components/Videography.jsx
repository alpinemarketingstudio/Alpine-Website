import React from "react";
import { useTranslation } from "react-i18next";
import vid3 from "../assets/vid3.mp4";
import "../styles/Videography.css";

const Videography = () => {
  const { t } = useTranslation();

  return (
    <section className="videography-page">
      {/* Background Video */}
      <video
        className="videography-video"
        src={vid3}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="videography-overlay" />

      {/* Content Section */}
      <div className="videography-content-wrapper">
        <h1 className="videography-title">{t("serviceData.videography.title")}</h1>
        <p className="videography-description">{t("serviceData.videography.desc")}</p>
        <p className="videography-description">
          We craft compelling stories through the power of video. From
          corporate promos to cinematic events, our expert team brings your
          vision to life with high-quality production and creativity.
        </p>
        <p className="videography-description">
          We use state-of-the-art equipment and innovative techniques to
          capture stunning visuals that engage your audience. Whether it's
          marketing clips, social media content, or documentaries, we deliver
          cinematic excellence tailored to your needs.
        </p>
        <ul className="videography-services-list">
          <li>🎥 {t("serviceData.videography.list1")}</li>
          <li>🎬 {t("serviceData.videography.list2")}</li>
          <li>📹 {t("serviceData.videography.list3")}</li>
          <li>🎞️ {t("serviceData.videography.list4")}</li>
          <li>🚁 {t("serviceData.videography.list5")}</li>
        </ul>
      </div>
    </section>
  );
};

export default Videography;
