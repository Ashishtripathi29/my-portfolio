import React from "react";
import "./Interests.css";
import { FaLaptopCode, FaChessKnight, FaBookOpen } from "react-icons/fa"; // icons
import { GiCricketBat } from "react-icons/gi";

// Interests data as JSON/array
const interestsData = [
  {
    icon: <FaLaptopCode className="interest-icon" />,
    title: "Coding & Creating",
    description: (
      <p>
        I’m genuinely <b>passionate about coding</b>, exploring{" "}
        <b>new technologies</b>, and turning ideas into real products. During my
        training, I built <b>5+ projects</b> including an
        <b> E-commerce website</b> and a <b>URL shortener</b>. At my company, I
        contributed to
        <b> 4+ production projects</b> such as{" "}
        <b>VBD (Virtual Barcode Distribution)</b> and
        <b> Shabd.in</b>. I enjoy writing <b>clean code</b>, learning
        continuously, and shipping
        <b> scalable, user-focused solutions</b>.
      </p>
    ),
  },
  {
    icon: <FaChessKnight className="interest-icon" />,
    title: "Chess",
    description: (
      <p>
        I enjoy playing <b>chess online on Lichess</b>, where my current rating
        is around <b>1300</b>. Chess helps me sharpen my <b>problem-solving</b>{" "}
        and <b>strategic thinking </b> skills, as every game requires planning,
        patience, and adaptability. The game also teaches me to stay{" "}
        <b>calm under pressure</b> and to think a few steps ahead — qualities
        that reflect directly in my <b>approach to software development</b>.
      </p>
    ),
  },
  {
    icon: <FaBookOpen className="interest-icon" />,
    title: "Book",
    description: (
      <p>
        Reading is one of my passions, and I enjoy delving into both{" "}
        <b>timeless wisdom</b> and <b>modern insights</b>. My reading list
        includes spiritual and philosophical works like the <b>Ramayana</b> and
        the <b>Bhagavad Gita</b>, alongside popular <b>self-help</b> and{" "}
        <b>finance books</b> such as <b>Rich Dad Poor Dad</b>,{" "}
        <b>Think and Grow Rich</b>, and{" "}
        <b>The Power of Your Subconscious Mind</b>. I also appreciate the{" "}
        <b>practical skills</b> taught in books like{" "}
        <b>Emotional Intelligence</b>.
      </p>
    ),
  },
  {
    icon: <GiCricketBat className="interest-icon" />,
    title: "Cricket",
    description: (
      <p>
        Growing up in my village, cricket was more than just a pastime — it was
        part of our daily life. Matches often happened without clear rules, so I
        took the initiative to introduce structure and fairness by setting
        proper rules. This not only made the game more enjoyable but also taught
        me <b>leadership, decision-making,</b> and the <b>value of teamwork</b>.
        Cricket continues to inspire my focus, strategy, and collaborative
        spirit both on and off the field.
      </p>
    ),
  },
];

function Interests() {
  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>
      <div className="interests-container">
        {interestsData.map((interest, index) => (
          <div key={index} className="interest-card">
            {interest.icon}
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
