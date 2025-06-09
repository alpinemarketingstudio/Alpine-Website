import React, { useEffect, useRef } from 'react';
import features from '../data/whyFeatures';
import '../styles/WhyAlpine.css';

export default function WhyAlpine() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <section id="why-alpine" className="why-alpine-section">
      <div className="why-alpine-content">
        <h2 className="why-heading">
          Why Only Alpine?
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-up"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
