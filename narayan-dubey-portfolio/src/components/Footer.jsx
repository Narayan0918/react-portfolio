// src/components/Footer.jsx
import styles from './Footer.module.css';
import { GitHubIcon, LinkedInIcon } from './Icons'; // Import our reusable icons

const Footer = ({ data }) => {
  const { name, socials } = data;
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {name}
      </p>
      <div className={styles.socials}>
        <a href={socials.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon className={styles.socialIcon} />
        </a>
        <a href={socials.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;