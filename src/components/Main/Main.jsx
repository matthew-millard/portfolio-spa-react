import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import styles from './Main.module.css';

function Main({ currentView }) {
  let ComponentToRender;

  switch (currentView) {
    case 'about':
      ComponentToRender = AboutMe;
      break;
    case 'contact':
      ComponentToRender = Contact;
      break;
    case 'projects':
      ComponentToRender = Projects;
      break;
    default:
      ComponentToRender = AboutMe;
  }

  return (
    <main className={styles.main}>
      <ComponentToRender />
    </main>
  );
}

export default Main;
