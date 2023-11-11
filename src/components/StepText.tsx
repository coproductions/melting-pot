import styles from "./StepText.module.css";

const steps = [
  "Join mingle & munch society.",
  "Receive invites to shared restaurant dinners in your preferred neighbourhood(s).",
  "Accept an invite and pay $10 to attend*.",
//   "Join the dinner with other invitees at a restaurant in your preferred neighbourhood.",
  "Enjoy your mingle & munch culinary social experience and grow your community.",
  "Pay your own bill + tip.",
  "Repeat.",
];

export default function StepText() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.preAmble}>It’s an evening experience with future friends over a scrumptious meal. How does it work?</div>
        <ol className={styles.list}>
          {steps.map((step) => (
            <li className={styles.listItem} key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
