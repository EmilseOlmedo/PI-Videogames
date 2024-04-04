import { Link } from "react-router-dom";
import styles from './landingPage.module.css';

const Landing = () =>{
  return (
    <div className={styles.container}>
      <Link to='/home'>
        <button className={styles.start}>START</button>
      </Link>
    </div>
  );
}
  
export default Landing;