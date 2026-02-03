import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Sameer | Data Scientist</h2>

      <div>
           <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>

        <button onClick={() => setDark(!dark)}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
