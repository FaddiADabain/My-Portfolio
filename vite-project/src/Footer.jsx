import React from 'react';
import './assets/Footer.css';

function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="contact-info footer-item">
          <a href="mailto:dabainfaddi@google.com" className="footer-link">Email</a>
          <a href="tel:+19146896900" className="footer-link">Phone: (914) 689-6900</a>
        </div>
        <div className="social-media footer-item">
          <a href="https://github.com/FaddiADabain" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/faddi-dabain-556698171/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
        <div className="additional-resources footer-item">
          <a href="#resume" className="footer-link">Resume</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Faddi Dabain. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
