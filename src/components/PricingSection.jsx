import React, { useState, useEffect } from 'react';
import pricingData from '../data/pricingsection';
import '../styles/PricingSection.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const categories = Object.keys(pricingData);

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showModal]);

  const handleStartClick = (plan, category) => {
    setSelectedPlan({ planTitle: plan.title, category });
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      ...formData,
      service_category: selectedPlan.category,
      plan_title: selectedPlan.planTitle,
    };
    try {
      await axios.post('http://localhost:8000/api/service-inquiry/', payload);
      toast.success('🎉 Inquiry submitted successfully!');
      setFormData({ full_name: '', email: '', phone: '', message: '' });
      setShowModal(false);
    } catch (error) {
      toast.error('❌ Submission failed. Try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setShowModal(false);
    }
  };

  const plans = pricingData[activeCategory];

  return (
    <section id="pricing" className="pricing-section">
      <ToastContainer position="top-right" />
      <h2 className="title">Unleash Your Brand’s Potential with Tailored Creative Solutions</h2>
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
            <p className="price">{plan.price} <span>/ project</span></p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={feature.includes('❌') ? 'disabled' : 'enabled'}>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="cta-button" onClick={() => handleStartClick(plan, activeCategory)}>
              Get Started Now
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedPlan && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <h2>
              Get Started with {selectedPlan.planTitle} ({selectedPlan.category})
            </h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Tell us more about your needs"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              ></textarea>
              <div className="modal-actions">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowModal(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
