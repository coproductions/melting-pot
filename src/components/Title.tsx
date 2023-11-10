import Logo from "../Logo";
import styles from "./Title.module.css";
import { useLocation, Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.container}>
        <span className={styles.text}>mingle</span>
        <span>
          <Logo size={3} />
        </span>
        <span className={styles.text}>munch</span>
      </div>
    </Link>
  );
}
