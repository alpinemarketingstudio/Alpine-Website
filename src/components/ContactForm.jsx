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
    const { firstName, lastName, email, phone } = form;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <div className="container-fluid contact-form-wrapper py-4">
      <div className="row min-vh-100 align-items-center">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
          <div className="form-headings text-center mb-4">
            <h2 className="mb-2">Get in touch</h2>
            <p className="text-muted">Our friendly team would love to hear from you.</p>
          </div>
          <form onSubmit={handleSubmit} className="w-100 px-3">
            <div className="row g-2 mb-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control animate-input"
                  onChange={handleChange}
                  value={form.firstName}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control animate-input"
                  onChange={handleChange}
                  value={form.lastName}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control animate-input"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-4">
                <label htmlFor="country" className="form-label">Code</label>
                <select
                  className="form-select animate-input"
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
              <div className="col-8">
                <label htmlFor="phone" className="form-label">Phone number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control animate-input"
                  onChange={handleChange}
                  value={form.phone}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="form-control animate-input"
                onChange={handleChange}
                value={form.message}
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="policyCheck" />
              <label className="form-check-label text-muted" htmlFor="policyCheck">
                You agree to our friendly <a href="#">privacy policy</a>.
              </label>
            </div>

            {error && <div className="text-danger mb-2">{error}</div>}

            <button type="submit" className="btn btn-success w-100">
              Send message
            </button>
          </form>
        </div>

        <div className="col-md-6 p-0 image-side align-items-center justify-content-center d-none d-md-flex">
          <div className="image-container">
            <img
              src={flexImage}
              alt="Contact visual"
              className="img-fluid rounded-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
