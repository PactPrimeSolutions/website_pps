import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We are available to take up new outsourcing projects. Connect with us today for a free quote.</p>
        <div className="contact-info">
          <div>
            <h4>📞 Call to ask any question:</h4>
            <p>+918073060365</p>
          </div>
          <div>
            <h4>📧 Email to get free quote:</h4>
            <p>support@pactprimesolutions.com</p>
          </div>
        </div>
      </div>
      <div className="location-cards">
        <div className="location-card">
          <h4>Visit Our US Office</h4>
          <p>PactPrime Solutions LLC 1309 Coffeen Ave. Suite 1200, Sheridan WY, 82801</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.5495737970534!2d-106.909518!3d44.7957819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534f07f54f48b7df%3A0x3204c245f35b3a8e!2s1309%20Coffeen%20Ave%20ST%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1681849380498!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-image">
        <img src="/conct.png" alt="Contact" />
      </div>
        <div className="location-card">
          <h4>Visit Our India Office</h4>
          <p>PactPrime Solutions 117/1, RMC Complex Kodathi Gate, Sarjapura, Bengaluru, Karnataka 560035</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.185302537699!2d77.7214339!3d12.895803299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171cc0eb5869%3A0x2d21db5a196422df!2sPACTPRIME%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1725428811488!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
