import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { countryCodes } from '../data/countryCode.js';
import pricingData from '../data/pricingData.js';
import '../styles/PricingSection.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const categories = Object.keys(pricingData);

export default function PricingSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_code: "",
    phone: "",
    message: "",
    agree: false,
  });

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showModal]);

  const handleStartClick = (plan, category) => {
    setSelectedPlan({ planTitleKey: plan.titleKey, category });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
      plan_title: t(selectedPlan.planTitleKey),
    };

    try {
      await axios.post("http://localhost:8000/api/service-inquiry/", payload);
      toast.success(t("inquirySuccess"));
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_code: "",
        phone: "",
        message: "",
        agree: false,
      });
      setShowModal(false);
    } catch (err) {
      toast.error(t("inquiryFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  const plans = pricingData[activeCategory];

  return (
    <section id="pricing" className="pricing-section">
      <h2 className="title">
        <Trans i18nKey="pricingTitle">
          Unleash Your <span>Brand's Potential</span> with Tailored <span>Creative Solutions</span>
        </Trans>
      </h2>

      <p className="subtitle">
        <Trans i18nKey="pricingSubtitle">
          Build your brand with <span className="pulse-highlight">50% less</span> investment — same premium quality.
        </Trans>
      </p>

      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${category === activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {t(`categories.${category}`)}
          </button>
        ))}
      </div>

      <div className="cards-container">
        <div className="cards">
          {plans.map((plan, idx) => (
            <div key={plan.titleKey || idx} className="card">
              <h3>{t(plan.titleKey)}</h3>
              {plan.descriptionKey && <p className="description">{t(plan.descriptionKey)}</p>}
              <p className="price">
                ${plan.price} <span>/ project</span>
              </p>

              {plan.featuresKeys && (
                <ul className="features">
                  {plan.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className="enabled">
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              )}

              <button className="cta-button" onClick={() => handleStartClick(plan, activeCategory)}>
                {t("getStartedNow")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedPlan && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content slide-in">
            <h2>
              {t("getStartedWith")} {t(selectedPlan.planTitleKey)} ({t(`categories.${selectedPlan.category}`)})
            </h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">{t("firstName")}</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">{t("lastName")}</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone_code">{t("phoneCode")}</label>
                  <select
                    name="phone_code"
                    id="phone_code"
                    value={formData.phone_code}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t("selectCode")}</option>
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={code}>
                        {label} ({code})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t("phoneNumber")}</label>
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
                <label htmlFor="email">{t("email")}</label>
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
                <label htmlFor="message">{t("message")}</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={t("messagePlaceholder")}
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
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkmark"></span>
                  <Trans i18nKey="agreeText">
                    I agree to the <a href="#">terms and conditions</a>
                  </Trans>
                </label>
              </div>

              <div className="modal-actions">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t("submitting") : t("submit")}
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowModal(false)}
                  disabled={isSubmitting}
                >
                  {t("cancel")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
