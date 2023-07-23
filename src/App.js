import { useState } from 'react';
import styles from './App.module.css';
import { Header, Main, Footer } from './components/index';

function App() {
  const [view, setView] = useState('about');

  return (
    <div className={styles.container}>
      <Header className={styles.header} setView={setView} />
      <Main currentView={view} />
      <Footer />
    </div>
  );
}

export default App;
