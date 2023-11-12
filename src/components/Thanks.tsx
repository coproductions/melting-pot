import styles from "./Thanks.module.css";

export default function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Thank you for joining mingle & munch.</div>
      <div className={styles.text}>
        We will be in touch soon with an invitation to your first dinner.
      </div>
    </div>
  );
}
