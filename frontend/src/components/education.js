import React from 'react';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import './education.css';

const Education = () => {
  const education = [
    {
      title: "Master's in Computer Science (MSc.CS)",
      institution: "St. Joseph's College, Devagiri (Calicut University)",
      period: "2024 – 2026",
      description:
        "Completed my postgraduate studies with a CGPA of 8.8 and an O Grade. Published and presented research on eye disease classification using deep learning techniques at ICCIET 2025.."
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "The Cochin College (MG University)",
      period: "2021 – 2024",
      description:
        "Graduated as college topper with an outstanding CGPA of 8.9. Also anchored TECZA, the inter-university fest by the BCA department, engaging audiences and managing events smoothly."
    }
  ];

  return (
    <section id="education" className="education-section">

      <div className="education-container">

        {/* Heading */}
        <div className="education-heading">

          <p className="education-label">
            MY ACADEMIC JOURNEY
          </p>

          <h2>
            Education
          </h2>

         

          <div className="education-line"></div>

        </div>


        {/* Education Cards */}
        <div className="education-list">

          {education.map((item, index) => (

            <article className="education-card" key={index}>

              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-content">

                <h3>
                  {item.title}
                </h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <div className="education-period">
                  <FaCalendarAlt />
                  <span>{item.period}</span>
                </div>

                <p className="education-description">
                  {item.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* Footer */}
        <div className="education-footer">

          <div className="education-footer-line"></div>

         

          <div className="education-footer-line"></div>

          

        </div>

      </div>

    </section>
  );
};

export default Education;