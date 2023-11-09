import styles from "./StepText.module.css";

const steps = [
  "Join mingle & munch society.",
  "Receive invites to a shared restaurant dinner in your preferred neighbourhood.",
  "Accept an invite and pay $10 to attend*.",
//   "Join the dinner with other invitees at a restaurant in your preferred neighbourhood.",
  "Enjoy your mingle & munch culinary social experience.",
  "Pay your own bill + tip.",
];

export default function StepText() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <ol className={styles.list}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
