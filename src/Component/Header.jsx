import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import "./Header.css";

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">Arfa</span>
          <div className="logo-text">
            <strong>SHAIKH</strong>
            <span>AI Engineer & Researcher</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="theme-icon sun" />
            ) : (
              <Moon size={20} className="theme-icon moon" />
            )}
          </button>

          {/* Let's Connect CTA */}
          <button
            onClick={() => {
              closeMenu();
              navigate("/contact");
            }}
            className="cta-btn"
          >
            LET'S CONNECT
            <ArrowRight size={14} />
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            className={`menu-toggle-btn mobile-only ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              closeMenu();
              navigate("/contact");
            }}
            className="mobile-cta-btn"
          >
            LET'S CONNECT
            <ArrowRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
