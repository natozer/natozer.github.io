import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/*
const ProfilePicture = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} className="profile-picture" />;
};
*/

const AboutMe = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const waveTextRef = useRef(null);
  const paragraphRef = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo(
      experienceRef.current.children,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none",
        },
      }
    );

    gsap.fromTo(
      experienceRef.current.querySelectorAll("li"),
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15, 
        ease: "expo.out", 
        duration: 1.5, 
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );


    gsap.fromTo(
      waveTextRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: waveTextRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      headerRef.current.querySelectorAll(".letter"),
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
 
    gsap.fromTo(
      paragraphRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
    
  }, []);
  
  

  return (
    <div ref={ref} className="AboutMe">
      <div ref={headerRef} className="profile-header-container">
      <h2 className="header-text">
  {['H', 'i', ',', ' ', 'I', "'", 'm', ' ', 'N', 'a', 't', 'e', '.'].map((letter, index) => (
    <span key={index} className="letter">{letter}</span>
  ))}
</h2>
    
        
   
      </div>
      <div ref={paragraphRef} className='intro'>
 <span>I'M A WEB DEVELOPER FROM MIRAMICHI, CANADA.</span><span> IN 2023, I GRADUATED WITH HONORS FROM NBCC MONCTON,</span> <span>WHERE I EARNED A DIPLOMA IN WEB AND MOBILE APPLICATION DEVELOPMENT.</span> 
   
</div>


      <div ref={waveTextRef} className='Bold-Immersive-Memorable'>
        <span>I like to build things that are</span><span> Bold,</span> <span>Immersive,</span> <span> and Memorable.</span>
      </div>
      
      <div className="experience-section" ref={experienceRef}>
        <h1>I HAVE EXPERIENCE WITH...</h1>
        <ul>
  <li>ANGULAR</li>
  <li>ASP.NET</li>
  <li>C#</li>
  <li>EXPRESS.JS</li>
  <li>GSAP</li>
  <li>GIT</li>
  <li>JAVA</li>
  <li>JAVASCRIPT</li>
  <li>MONGO DB</li>
  <li>MSSQL</li>
  <li>MYSQL</li>
  <li>NODE.JS</li>
  <li>REACT</li>
  <li>SPRING BOOT</li>
  <li>THREE.JS</li>
</ul>
<h1 className='text-align'>FULL STACK WEB DEVELOPMENT.</h1>

      </div>
    </div>
  );
});

export default AboutMe;
