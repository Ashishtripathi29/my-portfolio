import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-card">
          <h3>Ashish Tripathi</h3>
          <p className="myMail">
            <FaEnvelope className="icon" />{" "}
            <a href="mailto:ashishtripathipara@gmail.com">
              ashishtripathipara@gamil.com
            </a>
          </p>

          {/* 🔹 Download Resume Button */}
          <a
            href="/Ashish_Tripathi_node_Resume.pdf"
            download="Ashish_Tripathi_Resume.pdf"
            className="resume-download"
          >
            <FaDownload className="icon" /> Download Resume
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ashish-tripathi-518692227/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ASHISHT78893826"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/_.ashish._.tripathi._/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100016717483194"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
