import Logo from "./Logo";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>mingle</span>
      <span>
        <Logo size={3} />
      </span>
      <span className={styles.text}>munch</span>
    </div>
  );
}
