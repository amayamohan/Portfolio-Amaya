import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AmzzVerse',
      category: 'Generative AI • Content Creation',
      description:
        'A creative Generative AI project where I create AI-assisted visual stories and short-form reels using prompt engineering and iterative creative workflows.',
      image: '/Images/amzzverse.png',
      tags: [
        'Generative AI',
        'Prompt Engineering',
        'AI Content',
        'Creative Storytelling'
      ],
      link: 'https://www.instagram.com/amzzverse?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=='
    },

    {
      id: 2,
      title: 'Eye Disease Classification',
      category: 'Deep Learning • Computer Vision',
      description:
        'An academic research project focused on eye disease classification using deep learning. The work involved literature review, data preparation, model development, evaluation, and research presentation.',
      image: '/Images/eyedisease.png',
      tags: [
        'Python',
        'Deep Learning',
        'Computer Vision',
        'Image Classification'
      ],
      link: 'https://github.com/amayamohan/eye-disease-classification-vit'
    },

    {
      id: 3,
      title: 'Online Baker Platform',
      category: 'Web Development • E-commerce',
      description:
        'A full-stack web platform for product showcasing and customer orders, including product management, order handling, and database integration.',
      image: '/Images/Home_baker.png',
      tags: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB'
      ],
      link: 'https://github.com/amayamohan/home-baker-frontend'
    },

    {
      id: 4,
      title: 'Moments Preserved',
      category: 'Computer Vision • Python',
      description:
        'An event photo organization and filtering solution developed to help organize and manage images using computer vision techniques.',
      image: '/Images/Moments_Preserved.png',
      tags: [
        'Python',
        'FastAPI',
        'SQLite',
        'Computer Vision'
      ],
      link: 'https://github.com/amayamohan'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-heading">
        

          <h2>
            Projects <span>⌨</span>
          </h2>

          <div className="projects-line"></div>

          <p className="projects-intro">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.id}>

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <FaArrowUpRightFromSquare />
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;