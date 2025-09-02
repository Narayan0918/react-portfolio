// src/components/Experience.jsx

import styles from './Experience.module.css';

const Experience = ({ data }) => {
  return (
    <section className="section">
      <h2 className={styles.title}>Experience</h2>
      <div>
        {data.map((job) => (
          <div key={job.company} className={styles.experienceItem}>
            <div className={styles.itemHeader}>
              <div>
                <h3 className={styles.itemRole}>{job.role}</h3>
                <p className={styles.itemCompany}>
                  {job.company} | {job.location}
                </p>
              </div>
              <p className={styles.itemDuration}>{job.duration}</p>
            </div>
            <ul className={styles.itemList}>
              {job.description.map((point, index) => (
                <li key={index} className={styles.descriptionItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;