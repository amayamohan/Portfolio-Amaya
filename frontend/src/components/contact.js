import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <p className="contact-label">GET IN TOUCH</p>

      <h2 className="contact-title">
        Let's Connect
      </h2>

      <p className="contact-description">
        I'm open to opportunities in Generative AI, AI Content Creation,
        AI Research, Project Coordination, and related fields.
      </p>

      <div className="contact-cards">

        <a
          href="mailto:amayam1903@gmail.com"
          className="contact-card"
        >
          <MdEmail className="contact-icon" />
          <div>
            <span className="contact-card-title">Email</span>
            <span className="contact-card-text">
              amayam1903@gmail.com
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/amaya-mohan/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <div>
            <span className="contact-card-title">LinkedIn</span>
            <span className="contact-card-text">
              Connect with me
            </span>
          </div>
        </a>

        <a
          href="https://github.com/amayamohan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <div>
            <span className="contact-card-title">GitHub</span>
            <span className="contact-card-text">
              Explore my work
            </span>
          </div>
        </a>

      </div>

      <a
        href="mailto:amayam1903@gmail.com"
        className="contact-button"
      >
        GET IN TOUCH
        <span>→</span>
      </a>

    </section>
  );
};

export default Contact;