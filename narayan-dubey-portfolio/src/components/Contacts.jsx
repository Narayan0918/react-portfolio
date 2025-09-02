// src/components/Contact.jsx
import styles from './Contact.module.css';

const Contact = ({ data }) => {
  const { email } = data;
  return (
    <section className="section">
      <div className={styles.contact}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.text}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
        </p>
        <a href={`mailto:${email}`} className={styles.emailLink}>
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;