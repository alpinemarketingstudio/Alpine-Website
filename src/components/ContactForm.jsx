import React, { useState } from "react";
import { countryCodes } from "../data/countryCode.js";
import "../styles/ContactForm.css";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_code: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone_code, phone, message, agree } = form;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      toast.error(t("contactForm.validation.fillRequired"));
      return;
    }

    if (!phone_code) {
      toast.error(t("contactForm.validation.selectCode"));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      toast.error(t("contactForm.validation.invalidEmail"));
      return;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phone.trim())) {
      toast.error(t("contactForm.validation.invalidPhone"));
      return;
    }

    if (!/\b\w+\b/.test(message.trim())) {
      toast.error(t("contactForm.validation.enterMessage"));
      return;
    }

    if (!agree) {
      toast.error(t("contactForm.validation.acceptPolicy"));
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          country_code: phone_code,
          message,
        }),
      });

      if (response.ok) {
        toast.success(t("contactForm.success"));
        setForm({ firstName: "", lastName: "", email: "", phone_code: "", phone: "", message: "", agree: false });
      } else {
        const data = await response.json();
        toast.error(data?.error || t("contactForm.error"));
      }
    } catch {
      toast.error(t("contactForm.fail"));
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-container">
        <div className="form-left">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="field">
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder={t("contactForm.firstName")} required />
              </div>
              <div className="field">
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder={t("contactForm.lastName")} required />
              </div>
            </div>

            <div className="field full">
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t("contactForm.email")} required />
            </div>

            <div className="row">
              <div className="field code">
                <select name="phone_code" value={form.phone_code} onChange={handleChange} required>
                  <option value="">{t("contactForm.countryCode")}</option>
                  {countryCodes.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {label} ({code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="field phone">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("contactForm.phone")} required />
              </div>
            </div>

            <div className="field full">
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder={t("contactForm.message")} required></textarea>
            </div>

            <div className="form-check">
              <input type="checkbox" id="policyCheck" name="agree" checked={form.agree} onChange={handleChange} />
              <label htmlFor="policyCheck">
                {t("contactForm.policyLabel")} <a href="#">{t("contactForm.privacyPolicy")}</a>.
              </label>
            </div>

            <button type="submit" className="btn-submit">
              {t("contactForm.sendMessage")}
            </button>
          </form>
        </div>

        <div className="form-right" aria-hidden="true">
          <div className="creative-message">
            <h1>{t("contactForm.heyThere")}</h1>
            <p className="lead">{t("contactForm.letsChat")}</p>
            <p className="description">
              <h4>{t("contactForm.interested")}</h4>
              <p>{t("contactForm.fillForm")}</p>
            </p>
            <p className="description-2">
              <h4>{t("contactForm.hateForms")}</h4>
              <p>{t("contactForm.emailInstead")}</p>
            </p>
            <div className="contact-points">
              <a href="mailto:info@alpinemarketingstudio.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span className="contact-link">info@alpinemarketingstudio.com</span>
              </a>
              <a href="tel:+441234567890" className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span className="contact-link">+44 123 456 7890</span>
              </a>
              <a href="https://maps.google.com?q=123+Creative+Lane,+London,+UK" target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-link">123 Creative Lane, London, UK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
