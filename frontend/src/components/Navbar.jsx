import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h2 className="logo">Sameer</h2>

      {/* HAMBURGER ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/about">About</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/experience">Experience</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/certifications">Certificates</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
