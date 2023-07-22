import AboutMe from './AboutMe';
import Contact from './Contact';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      {/* <AboutMe /> */}
      <Contact />
    </main>
  );
}

export default Main;
