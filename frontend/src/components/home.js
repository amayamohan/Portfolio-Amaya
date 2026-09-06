import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">

        <p className="home-label">
          AI • GENERATIVE AI • RESEARCH
        </p>

        <h1>
          Hi, I'm <span className="text-highlight">AMAYA M</span>
        </h1>

        <h2>
          MSc Computer Science Graduate
        </h2>

        <h3>
          AI &amp; Generative AI Enthusiast
        </h3>

        <p className="home-description">
          Exploring Artificial Intelligence through Generative AI,
          computer vision, research, and creative technology.
        </p>

        <div className="home-focus">
          <span>Generative AI</span>
          <span>Prompt Engineering</span>
          <span>Computer Vision</span>
          <span>AI Research</span>
        </div>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a
            href="/resume.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="home-socials">
          <a
            href="https://github.com/amayamohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="https://www.linkedin.com/in/amaya-mohan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="availability">
          Open to AI, Generative AI, AI Content &amp; Research Opportunities
        </p>

      </div>
    </section>
  );
};

export default Home;