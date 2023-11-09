import Heart from "../images/Heart";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>legal</div>
      <div className={styles.bottom}>
        <div>made with</div>
        <Heart />
        <div>in Seattle 2023</div>
      </div>
    </footer>
  );
}
