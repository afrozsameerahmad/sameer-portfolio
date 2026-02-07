import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <h2 className="logo">Sameer</h2>
      </div>

      {/* RIGHT ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
        <li><NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/certifications" onClick={() => setMenuOpen(false)}>Certificates</NavLink></li>
        <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>

      </ul>

    </nav>
  );
}

export default Navbar;
