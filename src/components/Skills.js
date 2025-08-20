import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiExpress, SiLoopback, SiRedis, SiBootstrap,SiMysql } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { FaSpider } from "react-icons/fa6"; // for Web Scraping (creative)
import "./Skills.css";

const skills = [
  {
    name: "JavaScript (ES6+)",
    level: "90%",
    icon: <FaJsSquare className="icon js" />,
  },
  { name: "Node.js", level: "90%", icon: <FaNodeJs className="icon node" /> },
  {
    name: "Express.js",
    level: "85%",
    icon: <SiExpress className="icon express" />,
  },
  {
    name: "LoopBack.js",
    level: "75%",
    icon: <SiLoopback className="icon loopback" />,
  },
  {
    name: "MongoDB",
    level: "80%",
    icon: <FaDatabase className="icon mongo" />,
  },
  { name: "SQL", level: "70%", icon: <SiMysql className="icon sql" /> },
  { name: "Python", level: "70%", icon: <FaPython className="icon python" /> },
  { name: "Java", level: "60%", icon: <FaJava className="icon java" /> },
  { name: "Redis", level: "60%", icon: <SiRedis className="icon redis" /> },
  { name: "AWS S3", level: "60%", icon: <FaAws className="icon aws" /> },
  {
    name: "Web Scraping",
    level: "80%",
    icon: <FaSpider className="icon spider" />,
  },
  {
    name: "API Integration",
    level: "85%",
    icon: <MdApi className="icon api" />,
  },
  { name: "React.js", level: "70%", icon: <FaReact className="icon react" /> },
  {
    name: "Bootstrap",
    level: "60%",
    icon: <SiBootstrap className="icon bootstrap" />,
  },

];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
