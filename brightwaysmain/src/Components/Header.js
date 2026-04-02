import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.css";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Detect system Reduce Motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    
    const handleMotionChange = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      <div className="header-0">
        {/* SKIP LINK */}
        <a href="#main-content" className="skip-link" style={{
          position: "absolute",
          top: "-40px",
          left: "10px",
          background: "#000",
          color: "#fff",
          padding: "8px",
          zIndex: "1000",
          textDecoration: "none"
        }} onFocus={(e) => {
          e.target.style.top = "10px";
        }} onBlur={(e) => {
          e.target.style.top = "-40px";
        }}>
          Skip to main content
        </a>

        {/* HEADER LANDMARK */}
        <header className="navigation" role="banner" aria-label="Main header">
          {/* Logo */}
          <a href="/" className="brand-name" aria-label="Brightways Financial - Home">
            <img
              src="/logo2.jpg"
              className="roy"
              alt="Brightways Financial Services logo"
              style={{ width: "160px" }}
            />
          </a>

          {/* Hamburger for Mobile */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={isNavExpanded}
            aria-label={isNavExpanded ? "Close menu" : "Open menu"}
            style={{ background: "#357997", color: "white", border: "none", fontSize: "24px", padding: "5px 10px", cursor: "pointer" }}
          >
            {isNavExpanded ? "✕" : "☰"}
          </button>

          {/* NAVIGATION LANDMARK */}
          <nav
            className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
            aria-label="Main navigation"
            aria-hidden={!isNavExpanded}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    bsPrefix="custom-dropdown-toggle"
                    id="dropdown-basic"
                    aria-label="Services menu"
                  >
                    Service ▼
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/service" aria-label="View all services">
                      All Services
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <a href="/investor">Investor Charter</a>
              </li>

              <li>
                <a href="/complaint">Complaint Table</a>
              </li>

              <li>
                <a href="/about">About us</a>
              </li>

              <li>
                <a href="/disclosure-disclaimer">Disclosure & Disclaimer</a>
              </li>

              <li>
                <a href="/contact">Contact us</a>
              </li>

              <li>
                <a href="/accessibility-statement" aria-label="Accessibility statement">
                  Accessibility
                </a>
              </li>

              {/* Payment Button */}
              <li>
                <a href="/payment" className="btn-payment" aria-label="Make a payment">
                  Payment
                </a>
              </li>

              {/* KYC Button */}
              <li>
                <a href="/kyc" className="btn-kyc" aria-label="Complete KYC form">
                  KYC
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;