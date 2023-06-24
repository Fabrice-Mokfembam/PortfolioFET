import React, { useState, useEffect } from 'react';
import './header.css';
import './CTA';
import CTA from './CTA';
import me from '../assets/hack.jpg';
import HeaderSocial from './HeaderSocial';
import { motion } from 'framer-motion';

const TYPING_DELAY = 150;
const TEXTS = ['software engineer', 'ui/ux designer', 'tutor', 'mentor'];

export const Header = () => {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = textIndex % TEXTS.length;
      const currentText = TEXTS[currentIndex];

      if (isDeleting) {
        setTypingText((prev) => prev.slice(0, -1));
      } else {
        setTypingText((prev) => {
          const nextCharIndex = prev.length;
          const nextChar = currentText[nextCharIndex];
          if (nextChar === undefined) {
            clearInterval(intervalId);
            return prev;
          }
          return prev + nextChar;
        });
      }

      const isComplete = isDeleting
        ? typingText.length === 0
        : typingText === currentText;

      if (isComplete) {
        setIsDeleting((prev) => !prev);
        setTextIndex((prev) => prev + 1);
      }
    }, TYPING_DELAY);

    return () => clearInterval(intervalId);
  }, [textIndex, typingText, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 2 } },
  };

  const imageVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { delay: 1, duration: 2 } },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 1, duration: 2 } },
  };

  const textLighterVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      rotate: -180,
      skewY: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      skewY: 0,
      transition: {
        delay: 2,
        duration: 2,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <header>
      <div className='container header__container'>
        <motion.div
          className='hero-section'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <h5>Hello I'm</h5>
          <h1>Fabrice-Mokfenbam</h1>
          <motion.h5 className='text-light' animate={{ text: typingText }}>
            {typingText}
          </motion.h5>
          <motion.h5
            className='text-lighter'
            variants={textLighterVariants}
            initial='hidden'
            animate='visible'
          >
            I'm a tech enthusiast and a complete lover of problem solving in a simplified and organized matter such that you can be satisfied.
          </motion.h5>
          <HeaderSocial />
          <motion.button
            className='contact__button'
            variants={buttonVariants}
            initial='hidden'
            animate='visible'
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div
          className='my_image'
          variants={imageVariants}
          initial='hidden'
          animate='visible'
        >
          <img src={me} alt='my image' />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;