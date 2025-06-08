import React, { useState } from 'react';
import pricingData from '../data/pricingsection';
import '../styles/PricingSection.css';

const categories = Object.keys(pricingData);

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const plans = pricingData[activeCategory];

  return (
    <section id="pricing" className="pricing-section">
      <h2 className="title">
        Unleash Your Brand’s Potential with Tailored Creative Solutions
      </h2>
      <p className="subtitle">
        Choose your service and explore premium packages designed to accelerate your success.
      </p>

      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${category === activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards">
        {plans.map((plan) => (
          <div key={plan.title} className="card">
            <h3>{plan.title}</h3>
            <p className="description">{plan.description}</p>
            <p className="price">{plan.price} <span>/ Month</span></p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={feature.includes('❌') ? 'disabled' : 'enabled'}>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="cta-button">Get Started Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
