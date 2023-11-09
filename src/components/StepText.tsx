import styles from "./StepText.module.css";

const steps = [
  "Join mingle & munch society.",
  "Receive invites to shared restaurant dinners in your preferred neighbourhood(s).",
  "Accept an invite and pay $10 to attend*.",
//   "Join the dinner with other invitees at a restaurant in your preferred neighbourhood.",
  "Enjoy your mingle & munch culinary social experience.",
  "Pay your own bill + tip.",
  "Repeat.",
];

export default function StepText() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.preAmble}>mingle & munch is a new concept combining good food with meeting new people in Seattle. Here is how it works:</div>
        <ol className={styles.list}>
          {steps.map((step) => (
            <li className={styles.listItem} key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
