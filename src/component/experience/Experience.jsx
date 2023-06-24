import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experience.css";

export const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 200,
    });
  }, []);

  return (
    <section id="experience">
      <h5>What skills I offer</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <article className="about__card" data-aos="zoom-in">
          <div className="text">HTML5</div>
          <h5>3+ years Experience</h5>
          <small>30+ projects Completed</small>
        </article>
        <article className="about__card" data-aos="fade-up">
          <div className="text">CSS3</div>
          <h5>3+ years Experience</h5>
          <small>30+ projects Completed</small>
        </article>
        <article className="about__card" data-aos="zoom-in">
          <div className="text">JavaScript</div>
          <h5>1+ years Experience</h5>
          <small>10+ Completed</small>
        </article>
        <article className="about__card" data-aos="fade-down">
          <div className="text">Bootstrap</div>
          <h5>1+ years Experience</h5>
          <small>2 projects Completed</small>
        </article>
        <article className="about__card" data-aos="zoom-in">
          <div className="text">React.js</div>
          <h5>1month+ years Experience</h5>
          <small>1 project Completed</small>
        </article>
        <article className="about__card" data-aos="fade-right">
          <div className="text">C/C++</div>
          <h5>3+ years Experience</h5>
          <small>50+ exercises Completed</small>
        </article>
        <article className="about__card" data-aos="zoom-in">
          <div className="text">Java</div>
          <h5>1+ years Experience</h5>
          <small>2 projects Completed</small>
        </article>
        <article className="about__card" data-aos="fade-left">
          <div className="text">SQL</div>
          <h5>2+ years Experience</h5>
          <small>20+ exercises Completed</small>
        </article>
      </div>
    </section>
  );
};

export default Experience;