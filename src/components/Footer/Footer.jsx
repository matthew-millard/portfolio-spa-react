import styles from './Footer.module.css';
import { footerLinks } from '../../constants/nav-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '../../icons/social-icons';
function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {footerLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.socials}>
          {socialIcons.map((icon, index) => {
            return (
              <li key={index}>
                <a href={icon.url}>
                  <FontAwesomeIcon icon={icon.brand} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.copyright}>
          <small>&copy; 2023 Copyright Matt Millard</small>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
