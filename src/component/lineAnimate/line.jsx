import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Line = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 2000,
    });
  }, []);

  const lineStyle = {
    height: '4px',
    width: '76vw',
    backgroundColor: '#4db5ff',
    marginTop:'3rem'
  };

  return <div className='container' data-aos='zoom-in' style={lineStyle}></div>;
};

export default Line;