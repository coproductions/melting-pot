import styles from "./StepText.module.css";

export default function StepText() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <ol className={styles.list}>
          <li>You join mingle & munch society.</li>
          <li>
            You receive invites to dinner in your preferred neighbourhood.
          </li>
          <li>
            You pick a dinner invite that you like and pay $10 to attend (this
            is to cover admin fees with any money left over going to causes *).
          </li>
          <li>
            You join the dinner with other invitees at a restaurant in your
            preferred neighbourhood.
          </li>
          <li>You enjoy your mingle & munch culinary experience.</li>
          <li>You pay your own bill + tip.</li>
        </ol>
      </div>
    </div>
  );
}
