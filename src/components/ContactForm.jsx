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
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = form;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    if (!/\b\w+\b/.test(message.trim())) {
      setError("Please enter at least one word in the message.");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
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
              <input type="checkbox" id="policyCheck" />
              <label htmlFor="policyCheck">
                You agree to our <a href="#">privacy policy</a>.
              </label>
            </div>

            {error && <div className="error">{error}</div>}

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
