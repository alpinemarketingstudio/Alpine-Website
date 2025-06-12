import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [activeNav, setActiveNav] = useState(null);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setMenuOpen(false);
    setActiveNav(null);
  };

  const handleNavClick = (name) => {
    setMenuOpen(false);
    setActiveNav(name === "Home" ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        setIsHome(scrollY < homeHeight - 100);
      }

      let currentSection = null;
      navItems.forEach((item) => {
        if (item.name !== "Home") {
          const section = document.querySelector(item.href);
          if (section) {
            const sectionTop = section.offsetTop - 150; // buffer for navbar height
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              currentSection = item.name;
            }
          }
        }
      });

      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar px-3 ${
        isHome ? "navbar-home" : "navbar-scrolled"
      }`}
    >
      <div className="container-fluid justify-content-between align-items-center">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#home"
          onClick={() => handleNavClick("Home")}
        >
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
            {navItems
              .filter((item) => item.name !== "Home")
              .map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className={`nav-link nav-animate text-success ${
                      activeNav === item.name ? "active" : ""
                    }`}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
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
