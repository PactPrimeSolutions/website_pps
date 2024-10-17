import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import AnnouncementBar from './AnnouncementBar'; // Import the AnnouncementBar component
import './Header.css';

const Header = ({ scrollToSection, refs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchMapping = {
      home: refs.homeRef,
      about: refs.aboutRef,
      services: refs.servicesRef,
      enquiry: refs.enquiryRef,
      contacts: refs.contactsRef,
      bpo: refs.servicesRef,        // Added new keywords
      mortgage: refs.servicesRef,   // Added new keywords
      consultancy: refs.servicesRef, // Added new keywords
      kpo: refs.servicesRef,        // Added new keywords
    };
    const sectionRef = searchMapping[searchTerm.toLowerCase()];
    if (sectionRef) {
      scrollToSection(sectionRef);
      setSearchTerm(''); // Clear the search bar after successful search
    } else {
      alert('Section not found');
    }
  };

  return (
    <>
      <Navbar expand="xl" className="transparent-navbar" sticky="top">
        <Container>
          <Navbar.Brand onClick={() => scrollToSection(refs.homeRef)} style={{ cursor: 'pointer' }}>
            <img src="/pplogo.png" alt="Logo" height="75" width="140" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link onClick={() => scrollToSection(refs.homeRef)} className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.aboutRef)} className="nav-link">
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.servicesRef)} className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.enquiryRef)} className="nav-link">
                Enquiry
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.contactsRef)} className="nav-link">
                Contacts
              </Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search..."
                className="me-2 s-bar"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-primary" type="submit">
                🔍
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
