import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';

const HeaderSocial = () => {
  const iconVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='header__social'>
      <motion.a
        href='https://linkedin.com'
        target='blank'
        variants={iconVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 2 }}
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        href='https://github.com'
        target='blank'
        variants={iconVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 2.2 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href='https://facebook.com'
        target='blank'
        variants={iconVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 2.4 }}
      >
        <FaFacebookF />
      </motion.a>
      <motion.a
        href='https://twitter.com'
        target='blank'
        variants={iconVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 2.6 }}
      >
        <CgTwitter />
      </motion.a>
    </div>
  );
};

export default HeaderSocial;