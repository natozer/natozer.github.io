import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/FrontEndSkillsColumn.css";

function FrontEndSkillsColumn() {
  const clientSideSkills = [
    "HTML", "CSS", "JavaScript", "React", "Angular", "Three.js", "Responsive Design", "UX", "GSAP",
  ];

  const skillsRef = useRef(new Array(clientSideSkills.length));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    skillsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          { x: -100, autoAlpha: 0 },
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
    <div className="grid-item frontendcolumn">
      <div className="skills-column">
        <ul>
          {clientSideSkills.map((skill, index) => (
            <li key={skill} ref={el => skillsRef.current[index] = el}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FrontEndSkillsColumn;
