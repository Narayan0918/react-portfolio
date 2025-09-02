// src/components/Skills.jsx

import styles from './Skills.module.css';

const Skills = ({ data }) => {
  const { technical, professional } = data;

  return (
    <section className="section">
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <h3 className={styles.subtitle}>Technical Skills</h3>
          <ul className={styles.skillsList}>
            {technical.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.subtitle}>Professional Skills</h3>
          <ul className={styles.skillsList}>
            {professional.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;