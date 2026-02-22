import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Arfa<span>Shaikh</span>
        </NavLink>

        <button
          className={`menu-toggle ${open ? "active" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
