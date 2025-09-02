// src/components/Hero.jsx

import styles from './Hero.module.css';
import { GitHubIcon, LinkedInIcon } from './Icons';


const Hero = ({ data }) => {
  const { name, title, socials } = data;
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.subtitle}>{title}</p>
      <div className={styles.socials}>
        <a href={socials.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className={styles.socialIcon} />
        </a>
        <a href={socials.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className={styles.socialIcon} />
        </a>
      </div>
    </section>
  );
};

export default Hero;