import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ashish Tripathi. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Ashishtripathi29" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ashish-tripathi-518692227/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:ashishtripathipara@gmail.com">Email</a>
      </div>
    </footer>
  );
}
