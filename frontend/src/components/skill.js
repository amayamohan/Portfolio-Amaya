import React from 'react';
import './skill.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'GENERATIVE AI & CONTENT',
      skills: [
        'Prompt Engineering',
        'Generative AI',
        'AI-Assisted Content Creation',
        'Content Planning',
        'Creative Content Development'
      ]
    },
    {
      title: 'AI & TECHNICAL',
      skills: [
        'Python',
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'HTML',
        'CSS',
        'SQL'
      ]
    },
    {
      title: 'PROJECT & COMMUNICATION',
      skills: [
        'Project Planning',
        'Task Coordination',
        'Problem Solving',
        'Communication',
        'Presentation',
        'Leadership',
        'Team Collaboration'
      ]
    },
    {
      title: 'RESEARCH & TOOLS',
      skills: [
        'Research & Documentation',
        'Literature Review',
        'Technical Writing',
        'Data Analysis',
        'Git',
        'GitHub',
        'VS Code',
        'Canva'
      ]
    }
  ];

  return (
    <section id="skill" className="skills-section">

      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">

          <p className="skills-label">
            MY SKILLS
          </p>

          <h2>
            Skills
          </h2>

          
          <div className="skills-line"></div>

        </div>


        {/* Skill Map */}
        <div className="skills-map">

          {skillGroups.map((group, index) => (

            <div className="skill-group" key={index}>

              <h3>
                {group.title}
              </h3>

              <div className="skill-list">

                {group.skills.map((skill, skillIndex) => (

                  <span key={skillIndex}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Statement */}
      

      </div>

    </section>
  );
};

export default Skills;