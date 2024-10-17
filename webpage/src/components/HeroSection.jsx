import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = ({ scrollToSection, contactsRef }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-container ${loaded ? 'loaded' : ''}`}>
      <div className="hero-text">
        <h1>Managing Business Operations Is Not The Best Use Of Your Time</h1>
        <p>
          <span className="highlight">
            {/* EXPERIENCE HASSLE-FREE OUTSOURCING OF PROCESSES AND OPERATIONS FOR
            BUSINESSES, KNOWLEDGE, AND LEGAL DOMAINS */}
            Experience Hassle-Free Outsourcing Of Processes And Operations For Businesses, Knowledge, And Legal Domains
          </span>
        </p>
        <button 
          className="discover-button"
          onClick={() => scrollToSection(contactsRef)}
        >
          Contact Us
        </button>
      </div>
      <div className="hero-image">
        <img src="homeimg.webp" alt="Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
