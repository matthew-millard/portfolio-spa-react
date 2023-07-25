import resume from './cv/matt_millard_placeholder_cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { proficiencies } from './proficiencies';
import img from '../../../images/headshot/matt_millard_headshot.jpg';
import styles from './Resume.module.css';

function Resume() {
  return (
    <section className={styles.container}>
      <div className={styles.resume}>
        <h1>Resume</h1>
        <p>
          Feel free to{' '}
          <a href={resume} download>
            download my resume
          </a>
        </p>
      </div>
      <div className={styles.proficiencies}>
        <h2>Proficiencies</h2>
        <ul>
          {proficiencies.map((proficiency, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon icon={proficiency.icon} className={styles.icons} />
                <span className={styles.skills}>{proficiency.skill}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.img}>
        <img src={img} alt="Matt" />
      </div>
    </section>
  );
}

export default Resume;
