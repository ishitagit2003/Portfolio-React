import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

function App() {

  return (
    <>
      <div className={styles.App}>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      </div>
    </>
  )
}

export default App
