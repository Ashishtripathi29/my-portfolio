import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-bio-grid">
          <div className="about-image-column">
            <img 
              src="/ashish_tripathi.png" 
              alt="Ashish Tripathi" 
              className="profile-image" 
            />
          </div>
          
          <div className="about-text-column">
            <p className="about-intro">
              Hi! I'm <b>Ashish Tripathi</b>, a passionate <b>Software Engineer</b> with 
              <b> 2.5+ years of hands-on experience</b> in building scalable and 
              high-performance web applications. My expertise lies in <b>Node.js</b>, 
              <b> React.js</b>, <b>MongoDB</b>, and <b>Python</b>, with a strong focus on 
              <b> backend systems</b>, <b>API development</b>, and <b>data-driven solutions</b>.
            </p>

            <p>
              At <b>Trident Analytical Solutions</b>, I contributed to multiple 
              large-scale projects including <b>Virtual Barcode Distribution (VBD)</b>, 
              <b> Shabd.in</b>, and other enterprise tools. My responsibilities included 
              designing <b>REST APIs</b>, building <b>microservices</b>, integrating   
              <b> MongoDB & Redis</b>, and leading efforts in <b>web/app scraping </b> 
              using <b>Puppeteer, Electron, and Frida</b>. I also guided new team members 
              by assigning tasks and reviewing their work, strengthening my leadership 
              and collaboration skills.
            </p>

            <p>
              Beyond technical expertise, I enjoy solving challenging <b>DSA problems</b>, 
              working in <b>Agile teams</b>, and contributing to impactful projects. 
              I have built over <b>9 projects</b> so far—including an 
              <b> E-Commerce Platform</b>, <b>URL Shortener</b>, 
              <b> Book Management System</b>, and a <b>Chat Application</b>. 
              Each project helped me grow as a problem solver and a 
              <b> full-stack engineer</b>.
            </p>
          </div>
        </div>

        <div className="exploring-section-container">
          <h2 className="exploring-title">Currently Exploring 🚀</h2>
          <div className="exploring-list">
            <div className="exploring-item">
              <h3>Web Scraping & Automation 🤖</h3>
              <p>
                Enhancing my expertise in <b>web scraping</b> and <b>automation </b> 
                to build powerful data collection and analysis tools. Learning 
                advanced techniques with <b>Puppeteer</b>, <b>Electron</b>, 
                and <b>Beautiful Soup</b>.
              </p>
            </div>
            <div className="exploring-item">
              <h3>Cybersecurity Fundamentals 🔒</h3>
              <p>
                Expanding my knowledge of <b>cybersecurity</b>, focusing on 
                <b> application security</b>, <b>vulnerability assessment</b>, 
                and implementing <b>robust security practices</b> for safer applications.
              </p>
            </div>
            <div className="exploring-item">
              <h3>Performance Optimization ⚡</h3>
              <p>
                Exploring modern techniques like <b>code splitting</b>, 
                <b>lazy loading</b>, and <b>server-side rendering</b> to deliver 
                <b> faster, scalable</b> applications with a great user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
