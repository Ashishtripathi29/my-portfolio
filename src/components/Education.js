import React from "react";
import "./Education.css";

export default function Education() {
  const education = [
    {
      school: "Uttaranchal University Dehradun Uttarakhand",
      degree: "MCA (Online)",
      year: "jun/2023 – jun/2025",
      details: (
        <p>
          Pursuing a <b>Master of Computer Applications (MCA)</b> from{" "}
          <b>Uttaranchal University, Dehradun</b>, focusing on{" "}
          <b>Data Structures</b>, <b>Responsive Web Applications</b>,{" "}
          <b>Software Engineering</b>,<b> Project Management</b>, and{" "}
          <b>Cloud Computing fundamentals</b>. The program emphasizes both{" "}
          <b>theoretical understanding</b> and <b>hands-on practice</b>,
          covering <b>Algorithms</b>,{" "}
          <b>Advanced Database Management Systems</b>, <b>DevOps</b>,{" "}
          <b>Agile Practices</b>, and <b>IoT</b>. It also includes{" "}
          <b>mini-projects</b> and <b>career readiness modules</b> that bridge
          the gap between <b>academics</b> and <b>industry</b>.
        </p>
      ),
    },
    {
      school: "FunctionUp BootCamp (Online)",
      degree: "Backend Developer Trainee",
      year: "23rd July 2022 – 10th April 2023",
      details: (
        <p>
          Completed an intensive, industry-focused{" "}
          <b>Backend Development BootCamp</b> at <b>FunctionUp</b>, where I
          gained hands-on expertise in <b>JavaScript</b>, <b>Node.js</b>,{" "}
          <b>Express.js</b>, <b>MongoDB</b>,<b>DBMS</b>, <b>Redis</b>, and{" "}
          <b>AWS S3</b>. I also built strong foundations in{" "}
          <b>Data Structures & Algorithms (DSA)</b>,
          <b>version control with GitHub</b>, and real-world{" "}
          <b>team collaboration</b>. This BootCamp was a{" "}
          <b>major turning point</b> in my career, enabling me to transition
          from <b>fundamentals</b>
          to building <b>scalable backend systems</b> and developing the{" "}
          <b>confidence</b> to contribute to <b>production-grade projects</b>.
        </p>
      ),
    },
    {
      school: "IICS PrayagRaj",
      degree: "O level by NIELIT Delhi",
      year: "Jan 2022 – April 2023",
      details: (
        <p>
          Completed the <b>O Level certification</b> from <b>NIELIT Delhi</b>,
          which provided a strong foundation in
          <b> computer fundamentals</b>, <b>programming</b>,{" "}
          <b>internet technologies</b>, and <b>IT tools</b>. This course
          enhanced my knowledge of{" "}
          <b>problem-solving with programming concepts</b>, working with{" "}
          <b>databases</b>, and using <b>modern IT applications</b> effectively,
          strengthening the base for my career in <b>software development</b>.
        </p>
      ),
    },
    {
      school: "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj",
      degree: "B.sc ( Physics, Math)",
      year: "jun/2020 – Jun/2023",
      details: (
        <p>
          Completed <b>Bachelor of Science (B.Sc)</b> with <b>Mathematics</b>{" "}
          and <b>Physics</b> from
          <b>Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj</b>. The
          course provided a solid grounding in <b>mathematical logic</b>,{" "}
          <b>problem-solving techniques</b>, and <b>scientific principles</b>,
          along with practical exposure to <b>analytical methods</b> and{" "}
          <b>experiments</b>. It enhanced my ability to think <b>critically</b>,
          approach problems <b>logically</b>, and apply{" "}
          <b>quantitative reasoning</b>, which became a strong foundation for my
          career in <b>software development</b> and <b>backend engineering</b>.
        </p>
      ),
    },
    {
      school: "Sardar Patel Inter College Sikaro, Koraon Prayagraj",
      degree: "Intermediat (PCM)",
      year: "April/2017 – April/2019",
      details: (
        <p>
          Completed <b>Intermediate (Class 12th)</b> in{" "}
          <b>Physics, Chemistry, and Mathematics (PCM)</b> from
          <b> Sardar Patel Inter College, Sikaro, Koraon, Prayagraj</b>. This
          academic journey strengthened my <b>analytical skills</b>,{" "}
          <b>logical reasoning</b>, and <b>problem-solving ability</b>,
          providing a strong foundation for pursuing higher studies in{" "}
          <b>Mathematics</b> and <b>Physics</b>. During this time, I was{" "}
          <b>selected by my college</b> to represent at{" "}
          <b>NASI (National Academy of Sciences, India)</b>, where I formed a{" "}
          <b>team of 4 members</b> and participated in a{" "}
          <b>6-day practical science education program</b> held from{" "}
          <b>Prayagraj to Lucknow</b>. This exposure enhanced my{" "}
          <b>scientific curiosity</b>, <b>teamwork</b>, and{" "}
          <b>leadership skills</b>, which continue to support my growth in
          academics and my <b>professional career</b>.
        </p>
      ),
    },
    {
      school: "Sardar Patel Inter College Sikaro, Koraon Prayagraj",
      degree: "High School (Science)",
      year: "April/2015 – April/2017",
      details: (
        <p>
          Completed <b>High School (Class 10th)</b> in <b>Science stream</b>{" "}
          from
          <b>
            {" "}
            Sardar Patel Inter College, Sikaro, Koraon, Prayagraj
          </b> with <b>79.83%</b>. Along with academics, I actively participated
          in <b>extracurricular activities</b>, especially <b>Cricket</b>, where
          I represented my school team and contributed to winning a{" "}
          <b>district-level match</b>. This phase not only strengthened my{" "}
          <b>academic foundation</b> in <b>science and mathematics </b>
          but also helped me develop <b>teamwork</b>, <b>discipline</b>, and{" "}
          <b>leadership qualities</b>
          that continue to shape my <b>professional journey</b>.
        </p>
      ),
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <p className="education-year">{edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
