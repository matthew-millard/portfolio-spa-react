import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
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
    case 'resume':
      ComponentToRender = Resume;
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
