import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      <Projects />
    </main>
  );
}

export default Main;
