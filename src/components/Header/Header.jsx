import { useState } from 'react';
import { navLinks } from '../../constants/nav-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/pro-light-svg-icons';
import { socialIcons } from '../../icons/social-icons';
import styles from './Header.module.css';

function Header({ setView, currentView }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleNavClick(e, viewName) {
    e.preventDefault();
    setView(viewName);
    setClicked(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            <span>Matt Millard</span>
          </a>
        </div>
        <div className={styles.menuIcon}>
          <FontAwesomeIcon
            icon={clicked ? faXmark : faBars}
            onClick={handleClick}
            className={`${styles.menuIcon}  ${clicked ? styles.rotateIcon : ''}`}
          />
        </div>
        <div className={`${styles.sidebar} ${clicked ? styles.open : ''}`}>
          <ul className={styles.links}>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={currentView === link.view ? styles.activeLink : ''}>
                  <a href={link.url} onClick={e => handleNavClick(e, link.view)}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className={styles.socialIcons}>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
