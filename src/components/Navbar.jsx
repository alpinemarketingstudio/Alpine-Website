import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
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
  const [selectedLang, setSelectedLang] = useState("en");

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
    setActiveNav(name === "Home" ? null : name);
  };

  // Load Google Translate script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,it,de",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Helper: Poll iframe until menu ready then click language item
  const changeLanguage = (langCode) => {
    const langMap = { en: "English", it: "Italian", de: "German" };

    const clickLang = () => {
      const frame = document.querySelector("iframe.goog-te-menu-frame");
      if (frame) {
        const innerDoc = frame.contentDocument || frame.contentWindow.document;
        if (innerDoc) {
          const langItems = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
          if (langItems.length > 0) {
            for (const item of langItems) {
              if (
                item.innerText.toLowerCase() === langMap[langCode].toLowerCase()
              ) {
                item.click();
                return true;
              }
            }
          }
        }
      }
      return false;
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (clickLang() || attempts > 50) {
        clearInterval(interval);
      }
    }, 100);
  };

  // Trigger language change after selectedLang updates
  useEffect(() => {
    if (selectedLang === "en") {
      // Reload page with ?hl=en to reset Google Translate to English
      const url = window.location.href.split("?")[0];
      window.location.href = url + "?hl=en";
    } else {
      setTimeout(() => changeLanguage(selectedLang), 500);
    }
  }, [selectedLang]);

  // Scroll detection for navbar style
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
          onClick={() => handleNavClick("Home")}
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

          {/* Custom language dropdown */}
          <div className="language-dropdown ms-3">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value="en">Language: English</option>
              <option value="it">Language: Italian</option>
              <option value="de">Language: German</option>
            </select>
          </div>

          {/* Hidden Google Translate element required for translation to work */}
          <div id="google_translate_element" style={{ display: "none" }}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
