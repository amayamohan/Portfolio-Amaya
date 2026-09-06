import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-content">

        <p className="footer-copy">
          © 2026 <span>Amaya M</span>. All rights reserved.
        </p>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#publication">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#skill">Skills</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">

          <a
            href="https://github.com/amayamohan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/amaya-mohan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;