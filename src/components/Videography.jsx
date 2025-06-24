import React from "react";
import vid3 from "../assets/vid3.mp4";
import "../styles/Videography.css";

export default function Videography() {
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

      {/* Overlay for darkening video */}
      <div className="overlay"></div>

      {/* Content Section */}
      <div className="content-wrapper">
        <h1 className="title">Professional Videography Services</h1>
        <p className="description">
          At Alpine Marketing Studio, we craft compelling stories through the
          power of video. From corporate promos to cinematic event coverage,
          our expert team brings your vision to life with high-quality
          production and creative direction.
        </p>
        <p className="description">
          We use state-of-the-art equipment and innovative techniques to
          capture stunning visuals that engage your audience and elevate your
          brand. Whether you need marketing videos, social media clips, or
          documentaries, we deliver cinematic excellence tailored to your needs.
        </p>
        <ul className="services-list">
          <li>🎥 Corporate & Brand Videos</li>
          <li>🎬 Event & Conference Coverage</li>
          <li>📹 Social Media & Promotional Clips</li>
          <li>🎞️ Documentary & Storytelling Films</li>
          <li>🚁 Drone & Aerial Videography</li>
        </ul>
      </div>
    </section>
  );
}
