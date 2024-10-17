import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import Services from './pages/Services';
import Enquiry from './pages/Enquiry';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollBar';
import AnnouncementBar from './components/AnnouncementBar';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const enquiryRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Router>
        <AnnouncementBar/>
        <Header
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, servicesRef, enquiryRef, contactsRef }}
        />
        <div ref={homeRef}>
          <HeroSection 
            scrollToSection={scrollToSection} 
            contactsRef={contactsRef} 
          />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={enquiryRef}>
          <Enquiry />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </Router>
      <Footer
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, servicesRef, enquiryRef, contactsRef }}
      />
      <CustomScrollbar />
    </>
  );
};

export default App;
