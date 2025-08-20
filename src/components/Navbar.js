import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Ashish Tripathi</h1>

      {/* Right side: ThemeToggle + Hamburger */}
      <div className="right-icons">
        <ThemeToggle />
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Links */}
      <ul className={isOpen ? "active" : ""}>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" onClick={handleLinkClick}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#education" onClick={handleLinkClick}>
            Education
          </a>
        </li>
        <li>
          <a href="#interests" onClick={handleLinkClick}>
            Interest
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
