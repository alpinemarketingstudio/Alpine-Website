import React, { useState } from "react";
import { countryCodes } from "../data/countryCode.js";
import flexImage from "../assets/flex1.jpg";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    country: "+39",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message, country, agree } = form;

    // Validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phone.trim())) {
      setError("Please enter a valid phone number (7-15 digits).");
      return;
    }

    if (!/\b\w+\b/.test(message.trim())) {
      setError("Please enter at least one word in the message.");
      return;
    }

    if (!agree) {
      setError("Please agree to the privacy policy.");
      return;
    }

    // Clear previous messages
    setError("");
    setSuccess("");

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
          country_code: country,
          message,
        }),
      });

      if (response.ok) {
        setSuccess("Form submitted successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          country: "+39",
          agree: false,
        });
      } else {
        const data = await response.json();
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to submit. Please try again later.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-container">
        <div className="form-left">
          <div className="form-headings">
            <h2>Get in Touch</h2>
            <p>Our friendly team would love to hear from you.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                  required
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>

            <div className="row">
              <div className="field code">
                <label htmlFor="country">Code</label>
                <select
                  name="country"
                  id="country"
                  value={form.country}
                  onChange={handleChange}
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field phone">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  value={form.phone}
                  required
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                value={form.message}
                required
              ></textarea>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="policyCheck"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <label htmlFor="policyCheck">
                You agree to our <a href="#">privacy policy</a>.
              </label>
            </div>

            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="form-right">
          <img src={flexImage} alt="Contact Visual" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
