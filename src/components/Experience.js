import React from "react";
import "./Experience.css";
import { FaCode, FaChalkboardTeacher } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Trident Analytical Solutions",
      location: "Noida, Uttar Pradesh",
      duration: "Mar 2023 – JUn 2025",
      icon: "",
      logo: "./TAS.png",
      points: [
        <p>
          Led the development of enterprise applications like{" "}
          <b>Virtual Barcode Distribution (VBD)</b>, involving{" "}
          <b>web/app scraping</b>, <b>reverse engineering</b>, and{" "}
          <b>automation workflows</b> using <b>Node.js</b>, <b>Electron</b>,{" "}
          <b>Puppeteer</b>, <b>Frida</b>, and custom <b>Chrome extensions</b>.
        </p>,
        <p>
          Built and optimized <b>REST APIs</b> and <b>microservices</b> with{" "}
          <b>Node.js</b> and the <b>LoopBack framework</b>, integrating{" "}
          <b>MongoDB</b> and <b>Redis</b> for scalable data management and
          caching.
        </p>,
        <p>
          Contributed to projects like <b>Shabd.in</b> and other internal tools,
          working on <b>backend development</b>, <b>data workflows</b>, and{" "}
          <b>performance optimization</b>.
        </p>,
        <p>
          Collaborated with cross-functional teams to enhance <b>security</b>,{" "}
          <b>efficiency</b>, and <b>scalability</b> while mentoring junior
          developers, assigning tasks, and reviewing code.
        </p>,
        <p>
          Deployed and maintained services on <b>AWS (S3)</b>, ensuring
          reliability and high availability.
        </p>,
        <p>
          Worked on <b>more than 4 projects</b>, gaining expertise in multiple{" "}
          <b>tools</b>, <b>technologies</b>, and{" "}
          <b>team collaboration practices</b>. I now hold{" "}
          <b>2.5+ years of professional experience</b> in backend and full-stack
          development.
        </p>,
      ],
    },
    {
      role: "Backend Developer Trainee",
      company: "FunctionUp Bootcamp (Remote)",
      location: "Remote",
      duration: "Jul 2022 – March 2023",
      icon: "",
      logo: "./functionup.jpeg",
      points: [
        <p>
          Completed a <b>9-month intensive Backend Development Bootcamp</b> at{" "}
          <b>FunctionUp</b>, where I gained expertise in <b>JavaScript</b>,{" "}
          <b>Node.js</b>, <b>Express.js</b>, <b>MongoDB</b>, and{" "}
          <b>RESTful APIs</b>.
        </p>,
        <p>
          Built <b>5+ real-world projects</b> including an{" "}
          <b>E-commerce Website</b>,<b>URL Shortener</b>,{" "}
          <b>Book Management System</b>, <b>Blog Platform</b>, and{" "}
          <b>College Management System</b>, with all code saved on my{" "}
          <b>GitHub</b>.
        </p>,
        <p>
          Worked with <b>npm libraries</b> and advanced tools such as{" "}
          <b>Redis</b> for caching,
          <b>AWS S3</b> for media storage, <b>Buffer</b>, <b>JWT</b> and{" "}
          <b>Bcrypt</b> for encryption & salting, along with <b>middleware</b>{" "}
          for secure and modular application design.
        </p>,
        <p>
          Practiced <b>microservices architecture</b>, <b>JWT authentication</b>
          , and{" "}
          <b>Agile methodologies</b> while improving collaboration through{" "}
          <b>Git/GitHub</b> version control, <b>Postman</b> for API testing, and
          <b>peer code reviews</b>.
        </p>,
        <p>
          Actively solved <b>DSA problems</b>, participated in{" "}
          <b>mock interviews</b>, and improved <b>team collaboration skills</b>,
          guided by <b>IIT mentors</b>.
        </p>,
        <p>
          Participated in a <b>Hackathon</b> conducted by FunctionUp, which
          further strengthened my problem-solving and real-world coding
          abilities.
        </p>,
        <p>
          This Bootcamp was a <b>turning point</b> in my career, where I learned
          to move beyond fundamentals and started building{" "}
          <b>scalable backend systems</b>, making me confident to contribute to{" "}
          <b>production-grade projects</b>.
        </p>,
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <div className="experience-header">
              {exp.icon && <span className="experience-icon">{exp.icon}</span>}
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">
                  {exp.duration} | {exp.location}
                </p>
              </div>
            </div>
            <ul>
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
