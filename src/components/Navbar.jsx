import React, { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#why-alpine" },
  { name: "Blog", href: "#blog" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContactClick = () => {
    const phoneElement = document.getElementById("contact-phone");
    if (phoneElement) {
      phoneElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar px-3">
      <div className="container-fluid justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-text">Alpine Marketing Studio</span>
        </a>

        <button
          className="navbar-toggler bg-success"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  className="nav-link nav-animate text-success"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="nav-item d-lg-none mt-3">
              <button
                className="btn btn-success w-100 d-flex justify-content-center align-items-center"
                onClick={handleContactClick}
              >
                <i className="bi bi-telephone me-2"></i> Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <button
            className="btn btn-success rounded-pill px-3 d-flex align-items-center"
            onClick={handleContactClick}
          >
            <i className="bi bi-telephone me-2"></i> Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
