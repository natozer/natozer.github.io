import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/BackEndSkillsColumn.css";

function BackEndSkillsColumn() {
  const backEndSkills = [
    "Node.js",
    "Express.js",
    "ASP.NET",
    "MySQL",
    "MSSQL",
    "NoSQL",
    "Azure",
    "Mongo DB",
    "Spring Framework",
  ];

  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    skillsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          { x: 100, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=50", 
              end: "top center", 
              toggleActions: "play none none reverse", 
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="grid-item backendcolumn" id='blue'>
      <div className="skills-column">
        <ul>
          {backEndSkills.map((skill, index) => (
            <li key={skill} ref={el => skillsRef.current[index] = el}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BackEndSkillsColumn;
