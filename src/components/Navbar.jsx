import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Blog", id: "blog" },
    { name: "About", id: "about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar px-3">
      <div className="container-fluid justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-text">Alpine Marketing Studio</span>
        </a>

        <button
          className="navbar-toggler bg-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center gap-3">
            {navLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a className="nav-link nav-animate text-success" href={`#${item.id}`}>
                  {item.name}
                </a>
              </li>
            ))}

            <li className="nav-item d-lg-none mt-3">
              <a href="#contact" className="btn btn-success w-100 d-flex justify-content-center align-items-center">
                <i className="bi bi-telephone me-2"></i> Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <a href="#contact" className="btn btn-success rounded-pill px-3 d-flex align-items-center">
            <i className="bi bi-telephone me-2"></i> Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
