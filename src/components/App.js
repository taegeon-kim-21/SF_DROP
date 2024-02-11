import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
// import Footer from "./layout/Footer";
import styles from "./App.module.css";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar className={styles.navbar} />
      <div className={styles.body}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
