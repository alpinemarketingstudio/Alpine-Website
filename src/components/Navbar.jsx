import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const navItems = [
  { name: "home", href: "#home" },
  { name: "services", href: "#services" },
  { name: "pricing", href: "#pricing" },
  { name: "about", href: "#about" },
  { name: "blog", href: "#blog" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [activeNav, setActiveNav] = useState(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleToggle = () => setMenuOpen(!menuOpen);

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
    setActiveNav(name === "home" ? null : name);
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
        if (item.name !== "home") {
          const section = document.querySelector(item.href);
          if (section) {
            const sectionTop = section.offsetTop - 150;
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
          onClick={() => handleNavClick("home")}
        >
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-text">Alpine Marketing Studio</span>
        </a>

        <div className="d-lg-none">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#fff"
            duration={0.4}
          />
        </div>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center gap-3">
            {navItems
              .filter((item) => item.name !== "home")
              .map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className={`nav-link nav-animate text-success ${
                      activeNav === item.name ? "active" : ""
                    }`}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}

            <li className="nav-item d-lg-none mt-3">
              <button
                className="btn btn-success w-100 d-flex justify-content-center align-items-center"
                onClick={handleContactClick}
              >
                <i className="bi bi-telephone me-2"></i> {t("contact")}
              </button>
            </li>

            <li className="nav-item d-lg-none mt-2">
              <select
                className="form-select form-select-sm bg-dark text-white border-success"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language || "en"}
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-2">
          <button
            className="btn btn-success rounded-pill px-3 d-flex align-items-center"
            onClick={handleContactClick}
          >
            <i className="bi bi-telephone me-2"></i> {t("contact")}
          </button>

          <select
            className="form-select form-select-sm bg-dark text-white border-success ms-2"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language || "en"}
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
