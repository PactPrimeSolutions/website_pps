import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegram } from 'react-icons/fa';

const Footer = ({ scrollToSection, refs }) => {
  // Function to handle link click and smooth scroll
  const handleLinkClick = (e, sectionRef) => {
    e.preventDefault(); // Prevent default anchor link behavior
    scrollToSection(sectionRef); // Scroll to the section
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/pplogo.png" alt="Company Logo" />
        </div>
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Call us on:</p>
          <p>+918073060365</p>
          <p>Email us on:</p>
          <p>support@pactprimesolutions.com</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e) => handleLinkClick(e, refs.homeRef)}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, refs.aboutRef)}>About Us</a></li>
            <li><a href="#services" onClick={(e) => handleLinkClick(e, refs.servicesRef)}>Services</a></li>
            <li><a href="#enquiry" onClick={(e) => handleLinkClick(e, refs.enquiryRef)}>Enquiry</a></li>
            <li><a href="#contacts" onClick={(e) => handleLinkClick(e, refs.contactsRef)}>Contacts</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href=" https://www.facebook.com/pactprimesolutions?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/pactprimesolns?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/pactprimesolns/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@pactprimesolutions" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href=" https://t.me/pactprime" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
            <a href="https://wa.link/qmeqg5" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href=" https://www.instagram.com/pactprimesolutions/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © PactPrime Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
