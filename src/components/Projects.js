import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "VBD ( Virtual Barcode Distribution )",
      image: "./vbd.png", // add your project image in public/images folder
      description: (
        <p>
          <p>
            Contributed to the development of{" "}
            <b>Virtual Barcode Distribution (VBD)</b>, an{" "}
            <b>enterprise-grade platform</b> designed to generate, manage, and
            distribute <b>virtual barcodes</b> at scale. My role involved
            building a <b>robust backend</b> using <b>Node.js</b> and the{" "}
            <b>LoopBack framework</b>, integrating <b>MongoDB</b> for efficient
            data management, and implementing <b>REST APIs</b> to ensure smooth
            barcode transactions across multiple services.
          </p>

          <p>
            I also worked on <b>web scraping</b> for VBD by creating a custom{" "}
            <b>browser</b> using <b>Node.js</b> libraries like <b>Electron</b>{" "}
            and <b>Puppeteer</b>. Additionally, I developed{" "}
            <b>app scraping solutions</b> for <b>Android</b> using <b>Frida</b>{" "}
            (reverse engineering) and for <b>iOS</b> applications. I even built
            a<b> Chrome extension</b> to automate data scraping tasks.
          </p>

          <p>
            The VBD system is mainly divided into four parts:{" "}
            <b>scraping data</b>, sending it to the <b>API endpoint</b>,
            verifying and storing it in the <b>database</b>, and finally
            managing it through the <b>Admin Panel</b> and <b>Ticket Panel</b>.
            From the Admin Panel, data is monitored and controlled, while the
            Ticket Panel displays validated information.
          </p>

          <p>
            I contributed to <b>all parts of the project</b>, including{" "}
            <b>deployment</b>. Additionally, I <b>led the project</b> by
            assigning tasks to new members, monitoring their progress, and
            ensuring smooth team collaboration.
          </p>
        </p>
      ),
      github: "",
      demo: "",
    },
    {
      title: "Shabd.in",
      image: "./shabd_dot_in.png",
      description: (
        <p>
          <p>
            <b> Shabd.in </b> is a leading multilingual self-publishing and book
            e-commerce platform in India, supporting authors and readers in{" "}
            <b> 22 Indian languages </b>. Founded in 2012 by Amitesh Mishra,
            Kalpnesh Gupta, and Nikhil Tiwari, and based in Delhi, the platform
            has published over <b> 700 e-books </b>, with approximately{" "}
            <b> 27 titles available in paperback </b>. It fosters a vibrant
            literary community through writing competitions, open-mic sessions,
            and affordable publishing opportunities.
          </p>

          <p>
            Implemented an <b> email system </b> using the EJS library for
            dynamic templates and <b> Nodemailer </b> for sending emails.
            Integrated <b> in-app popup notifications </b> featuring images to
            enhance user engagement and overall platform interactivity.
          </p>
        </p>
      ),
      github: "",
      demo: "",
    },

    {
      title: "Tradedesk",
      image: "./tradedesk.png",
      description: (
        <p>
          <b> Tradedesk </b> is a compact web-based project focused on{" "}
          <b> web scraping </b>, designed to function like a VBD. It
          consolidates multiple features and functionalities into a single
          project, providing a comprehensive view of data collection, analysis,
          and presentation. The project demonstrates skills in automated data
          extraction, data processing, and dynamic display, making it a
          versatile tool for small-scale business intelligence and monitoring
          tasks.
        </p>
      ),
      github: "",
      demo: "",
    },
    {
      title: "Stocktwits",
      image: "./stocktwits.png",
      description: (
        <p>
          <b> StockTwits </b> is a small web-scraping project designed to handle
          comments and watchlists. The project covers all aspects of
          development, with the UI built using <b> Next.js </b> and the backend
          developed using <b> Node.js </b>, <b> Express </b>, and{" "}
          <b> MongoDB </b>. For web scraping, a custom browser was implemented
          to efficiently extract and manage data.
        </p>
      ),
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <div className="project-desc">{proj.description}</div>

              {/* Conditionally render links */}
              {(proj.github || proj.demo) && (
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
