import React, { useEffect } from 'react';
import './Header.css';
import NavBar from '../navBar/NavBar';

const Header = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eye = document.getElementById('eye');
      const { clientX, clientY } = event;
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = eye;

      const eyeX = offsetLeft + offsetWidth / 2;
      const eyeY = offsetTop + offsetHeight / 2;

      const angle = Math.atan2(clientY - eyeY, clientX - eyeX);
      const rotate = angle * (180 / Math.PI) + 90;

      eye.style.transform = `rotate(${rotate}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='d-flex flex-row mb-3 cont'>
      <h1 className='titulo1'>NARUTO API</h1>
      <img id='eye' className='imagen' src="https://cdn9.pngable.com/19/5/25/JDJzL3Cks6/naruto.jpg" alt="" />
      <NavBar />
    </div>
  );
};

export default Header;