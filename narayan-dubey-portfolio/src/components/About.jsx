// src/components/About.jsx

import styles from './About.module.css';

const About = ({ data }) => {
  // The 'data' prop is the summary string from portfolioData.js
  return (
    <section className="section">
      <div className={styles.about}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.content}>{data}</p>
      </div>
    </section>
  );
};

export default About;