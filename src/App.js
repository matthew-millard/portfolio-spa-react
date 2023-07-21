import styles from './App.module.css';
import { Header, Main, Sidebar, Footer } from './components/index';

function App() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Main />
      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
}

export default App;
