import styles from './AboutMe.module.css';
import img from '../../../images/headshot/matt_millard_headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/pro-light-svg-icons';

function AboutMe() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Hello, I'm Matt.{' '}
        <span>
          <FontAwesomeIcon icon={faBadgeCheck} className={styles.checkIcon} />
        </span>
        <br />
        Welcome to my home on the internet.
      </h1>
      <p className={styles.heroParagraph}>
        As a MERN stack developer based in Ottawa, I build robust, user-friendly web applications. This is where I
        showcase my projects, share my coding insights, and connect with the broader tech community. Take a look around
        and explore my work. Thanks for stopping by.
      </p>
      <img className={styles.heroImage} src={img} alt="Matt" />
    </section>
  );
}

export default AboutMe;
