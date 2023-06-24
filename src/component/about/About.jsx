import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import Brother from '../../assets/hack.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, []);

  const [typedText, setTypedText] = useState('');

  const lastIndex = useRef(0);

  useEffect(() => {
    const text = "I am a young software engineering student at the Faculty of Engineering and Technology (FET) of the University of Buea. I look forward to my B.Eng in 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas ut pretium sapien, nec consequat arcu. Sed hendrerit, quam eget suscipit vestibulum, mauris ipsum placerat elit, eu hendrerit felis felis at nisi.";
    const intervalId = setInterval(() => {
      if (lastIndex.current === text.length) {
        clearInterval(intervalId);
      } else {
        setTypedText(prevText => prevText + text.charAt(lastIndex.current));
        lastIndex.current++;
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__image'>
            <img src={Brother} alt='Brown ' />
          </div>
        </div>
        <div className='about__me__content'>
          <div className='about__cards'>
            <article className='about__card' data-aos='zoom-in' data-aos-delay='100'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className='about__card' data-aos='zoom-in' data-aos-delay='300'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>3 world widely</small>
            </article>
            <article className='about__card' data-aos='zoom-in' data-aos-delay='500'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>
          <p className='so' >
            I am a young software engineering student at the Faculty of Engineering and Technology (FET) of the University of Buea. I look forward to my B.Eng in 2022. 
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;