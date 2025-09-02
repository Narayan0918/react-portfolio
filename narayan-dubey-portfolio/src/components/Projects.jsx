// src/components/Projects.jsx

import styles from './Projects.module.css';

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.linkIcon}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Projects = ({ data }) => {
  return (
    <section className="section">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {data.map((project) => (
          <div key={project.title} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <ul className={styles.techList}>
              {project.techStack.split(', ').map((tech) => (
                <li key={tech} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLinkIcon />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;