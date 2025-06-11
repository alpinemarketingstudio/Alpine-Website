import React, { useState, useEffect } from 'react';
import pricingData from '../data/pricingsection';
import '../styles/PricingSection.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const categories = Object.keys(pricingData);

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_code: '',
    phone: '',
    message: '',
    agree: false,
  });

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
      full_name: `${formData.first_name.trim()} ${formData.last_name.trim()}`,
      email: formData.email,
      phone: `${formData.phone_code} ${formData.phone}`,
      message: formData.message,
      service_category: selectedPlan.category,
      plan_title: selectedPlan.planTitle,
    };

    try {
      await axios.post('http://localhost:8000/api/service-inquiry/', payload);
      toast.success('Inquiry submitted successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_code: '',
        phone: '',
        message: '',
        agree: false,
      });
      setShowModal(false);
    } catch (err) {
      toast.error('Submission failed. Try again!');
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
          <div className="modal-content slide-in">
            <h2>Get Started with {selectedPlan.planTitle} ({selectedPlan.category})</h2>
            <form onSubmit={handleSubmit} className="modal-form">

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name*</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name*</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone_code">Country Code</label>
                  <select
                    name="phone_code"
                    id="phone_code"
                    value={formData.phone_code}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+91">+91 (IN)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us more about your needs"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="checkbox-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree || false}
                    onChange={(e) =>
                      setFormData({ ...formData, agree: e.target.checked })
                    }
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>

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
