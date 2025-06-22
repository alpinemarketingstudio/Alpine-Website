import React, { useState } from "react";
import { countryCodes } from "../data/countryCode.js";

import "../styles/ContactForm.css";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
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

    const { firstName, lastName, email, phone_code, phone, message, agree } =
      form;

    // Validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!phone_code) {
      toast.error("Please select a country code.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phone.trim())) {
      toast.error("Please enter a valid phone number (7-15 digits).");
      return;
    }

    if (!/\b\w+\b/.test(message.trim())) {
      toast.error("Please enter at least one word in the message.");
      return;
    }

    if (!agree) {
      toast.error("Please agree to the privacy policy.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
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
        toast.success("Form submitted successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone_code: "",
          phone: "",
          message: "",
          agree: false,
        });
      } else {
        const data = await response.json();
        toast.error(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to submit. Please try again later.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-container">
        <div className="form-left">
          {/* <div className="form-headings">
            <h2>Get in Touch in our expert team</h2>
            <p>Our friendly team would love to hear from you.</p>
          </div> */}

          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="field">
                <label htmlFor="firstName"></label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  aria-required="true"
                />
              </div>
              <div className="field">
                <label htmlFor="lastName"></label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                aria-required="true"
              />
            </div>

            <div className="row">
              <div className="field code">
                <label htmlFor="phone_code"></label>
                <select
                  name="phone_code"
                  id="phone_code"
                  value={form.phone_code}
                  onChange={handleChange}
                  aria-label="Country dialing code"
                  required
                >
                  <option id="cc" value="">
                    Country Code
                  </option>
                  {countryCodes.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {label} ({code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="field phone">
                <label htmlFor="phone"></label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Message *"
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="policyCheck"
                name="agree"
                className="custom-checkbox"
                checked={form.agree}
                onChange={handleChange}
                aria-required="true"
              />
              <label htmlFor="policyCheck">
                By submitting this for I accept the{" "}
                <a href="#">privacy policy</a> of this site.
              </label>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="form-right" aria-hidden="true">
          <div className="creative-message">
            <h1>Hey there!</h1>
            <p className="lead">Let's chat</p>
            <p className="description">
              <h4>Interested in working with us?</h4>
              <p>
                Or have a general enquiry? Fill in the form today, and our team
                will be in touch shortly.
              </p>
            </p>
            <p className="description-2">
              <h4>Hate Forms?</h4>
              <p>If you’d prefer to email us directly,then here is our :</p>
              <br />
            </p>
            <div className="contact-points">
              <a
                href="mailto:info@alpinemarketingstudio.com"
                className="contact-item"
              >
                <FaEnvelope className="contact-icon" />
                <span className="contact-link">
                  info@alpinemarketingstudio.com
                </span>
              </a>

              <a href="tel:+441234567890" className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span className="contact-link">+44 123 456 7890</span>
              </a>

              <a
                href="https://maps.google.com?q=123+Creative+Lane,+London,+UK"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-link">
                  123 Creative Lane, London, UK
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
