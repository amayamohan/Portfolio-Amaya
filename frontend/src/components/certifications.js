import React from 'react';
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaChartBar,
  FaCalendarAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

import './certifications.css';

const Certifications = () => {
  const certifications = [
    {
     
      title: 'Artificial Intelligence and Machine Learning',
      provider: 'Microsoft Elevate AI Initiative',
      description:
        'Certification covering core concepts of Artificial Intelligence and Machine Learning through the Microsoft Elevate AI Initiative.',
      link: 'https://drive.google.com/file/d/1NDVWcoFlS2Feh46ZzSpOSsJHs6NDV_kW/view?usp=sharing'
    },
    {
     
      title: 'Microsoft Azure Internship',
      provider: 'Microsoft Elevate Initiative in collaboration with AICTE',
      description:
        'Virtual internship under the Microsoft Elevate Initiative in collaboration with AICTE, focused on cloud computing and Azure technologies.',
      link: 'https://drive.google.com/file/d/1Rs1PAct82e4D4NEj4QqrGxgHCUbsOUjS/view?usp=sharing'
    },
    {
      
      title: 'MERN Stack Web Development',
      provider: 'Certificate of Completion (A+ Grade)',
     
      description:
        'Completed training in MongoDB, Express.js, React.js and Node.js with an A+ grade.',
      link: 'https://drive.google.com/file/d/1Qf81PTrTHh38J8CmQwUzdPTl_uhrCT9Z/view?usp=sharing'
    },
    {
      
      title: 'Python for Data Science and Analytics',
      provider: 'Certificate of Completion (A+ Grade)',
      
      description:
        'Completed training covering Python, data analysis, visualization and data-driven insights with an A+ grade.',
      link: 'https://drive.google.com/file/d/1kbAjfSRfbrQzBiVznW1zVkbZWu3BE1kL/view?usp=sharing'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">

      <div className="certifications-container">

        <div className="certifications-heading">
          <p className="certifications-label">
            MY CERTIFICATIONS
          </p>

          <h2>Certificates</h2>

          
          <div className="certifications-line"></div>
        </div>


        <div className="certifications-list">

          {certifications.map((certificate, index) => (

            <article
              className="certification-card"
              key={index}
            >

              

              <div className="certification-content">

                <h3>
                  {certificate.title}
                </h3>

                <p className="certification-provider">
                  {certificate.provider}
                </p>

                

                <p className="certification-description">
                  {certificate.description}
                </p>

              </div>


              <div className="certification-action">

                <a
                  href={certificate.link}
                  className="certificate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt />
                </a>

              </div>

            </article>

          ))}

        </div>


        <div className="certifications-footer">

          <div className="certification-footer-line"></div>

          

          <div className="certification-footer-line"></div>

          

        </div>

      </div>

    </section>
  );
};

export default Certifications;