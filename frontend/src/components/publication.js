import React from 'react';
import { FaFileAlt, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './publication.css';

const Publication = () => {
  return (
    <section id="publication" className="publication-section">

      <div className="publication-container">

        {/* Section Heading */}
        <div className="publication-heading">

          <p className="publication-label">
            RESEARCH ACHIEVEMENT
          </p>

          <h2>
            Publication
          </h2>

         

          <div className="publication-line"></div>

        </div>


        {/* Publication Card */}
        <div className="publication-card">

          {/* Top Row */}
          <div className="publication-top">

            <div className="publication-type">

              <div className="publication-icon">
                <FaFileAlt />
              </div>

              <div>
                <span>CONFERENCE</span>
                <span>PUBLICATION</span>
              </div>

            </div>


            <div className="publication-year">
              2025
              <FaCalendarAlt />
            </div>

          </div>


          {/* Paper Title */}
          <h3 className="publication-title">
            Enhancing Eye Disease Classification Using Deep Learning Techniques:
            A Survey and Comparative Study
          </h3>


          {/* Conference */}
          <p className="publication-conference">
            International Conference on Computational Intelligence and Emerging
            Technologies (ICCIET 2025)
          </p>


          {/* Details */}
          <div className="publication-details">

            <div className="publication-detail">
              <FaMapMarkerAlt />
              <span>
                St. Joseph’s College (Autonomous), Devagiri, Kozhikode , Kerala
              </span>
            </div>

            <div className="publication-divider"></div>

            <div className="publication-detail">
              <FaCalendarAlt />
              <span>
                26 November 2025
              </span>
            </div>

          </div>


          {/* Tags */}
          <div className="publication-tags">

            <span>Deep Learning</span>
            <span>Computer Vision</span>
            <span>Medical Image Analysis</span>
            <span>Survey Study</span>

          </div>


          {/* Description */}
          <p className="publication-description">
            A survey and comparative study exploring deep learning techniques
            for eye disease classification, with a focus on recent advances
            in medical image analysis and AI-based approaches.
          </p>


          {/* Action Buttons */}
          <div className="publication-actions">

            <a
              href="https://drive.google.com/file/d/1w-bwiWpOQnAianzh2_1a0O3FaJ4ZpLYR/view?usp=sharing"
              className="publication-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>View Published Paper</span>
              <span className="button-arrow">↗</span>
            </a>


            <a
              href="https://drive.google.com/file/d/1U8tdi57y8JxYxjfJiqK50jrwvjy0YBiI/view?usp=sharing"
              className="publication-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt />
              <span>View Presentation Certificate</span>
              <span className="button-arrow">↗</span>
            </a>

          </div>

        </div>


        {/* Bottom Detail */}
        <div className="publication-footer">

          <div className="footer-line"></div>
          <div className="footer-line"></div>

        

        </div>

      </div>

    </section>
  );
};

export default Publication;