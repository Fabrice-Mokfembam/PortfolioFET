import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/Fab1.jpeg";
import img2 from "../../assets/Fab2.jpg";
import img3 from "../../assets/Fab3.jpg";
import img4 from "../../assets/Fab4.png";
import img5 from "../../assets/Fab5.png";
import img6 from "../../assets/Fab6.jpg";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 4,
      title:'Project 4'
    },
    {
      image : img4,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 5,
      title:'Project 5'
    },
    {
      image : img5,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 6,
      title:'Project 6'
    },
      {
      image : img6,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 7,
      title:'Project 7'
    },
  
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2> 
    </section>
  );
};
export default Portfolio;
