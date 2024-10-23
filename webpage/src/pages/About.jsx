import React, { useState, useEffect } from 'react';
import './About.css';
import ImageHoverEffect from '../components/ImageHoverEffect';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        setLoaded(true);
      }
    };

    // Check if section is in view on component mount
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="about-section" className={`about-container ${loaded ? 'loaded' : ''}`}>
        <div className="about-image">
          <img src="about.webp" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <h1>Driving your digital transformation with scalable outsourcing solutions</h1>
          <p>
            Pactprime Solutions aims to globally drive the digital growth of organizations by taking care of all types of work processes across various industries.
          </p>
          <ul>
            <li>✔ We have Global Ambitions</li>
            <li>✔ We adopt Sustainable Practices</li>
            <li>✔ We believe in Innovation</li>
            <li>✔ We value our Employees</li>
          </ul>
        </div>
      </div>
      <ImageHoverEffect />
    </>
  );
};

export default About;
