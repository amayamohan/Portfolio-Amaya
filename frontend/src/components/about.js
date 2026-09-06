import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-heading">
          <p className="about-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="gold-line"></div>
        </div>

        <div className="about-content">

          <p>
            I am an MSc Computer Science graduate from St. Joseph’s College,
            Devagiri (Calicut University), with a strong foundation in
            Artificial Intelligence, Machine Learning, and computer science.
            I also hold a BCA degree from MG University, where I graduated as
            a college topper with an 8.9 CGPA.
          </p>

          <p>
            My interests lie at the intersection of
            <strong> Artificial Intelligence, Generative AI, computer vision,
            research, and creative technology.</strong> I enjoy exploring
            emerging AI tools, experimenting with generative workflows, and
            turning ideas into meaningful digital experiences.
          </p>

          <p>
            My academic work includes research in
            <strong> AI-based medical image analysis</strong>, with a focus on
            eye disease classification using deep learning and
            transformer-based models. I have also presented my research at
            <strong> ICCIET 2025.</strong>
          </p>

          <p>
            Beyond technical work, I enjoy
            <strong> teaching, knowledge sharing, communication, and creative
            problem-solving.</strong> I am particularly interested in
            opportunities where I can combine AI, creativity, research, and
            continuous learning to contribute to innovative projects.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;