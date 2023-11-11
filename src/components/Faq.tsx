import faq from "../faq.json";
import styles from "./Faq.module.css";
import { FluentProvider } from "@fluentui/react-components";
import { defaultTheme, theme2 } from "../themes/default-theme";

type FaqType = {
  Q: string;
  A: string;
};
function FaqItem({ Q, A }: FaqType) {
  return (
    <div className={styles.line}>
      <div className={styles.question}>{Q}</div>
      <div className={styles.answer}>{A}</div>
    </div>
  );
}

export default function Faq() {
  return (
    <FluentProvider theme={theme2}>
      <div className={styles.container}>
        <h2>FAQ</h2>
        {faq.map((item) => (
          <FaqItem key={item.Q} {...item} />
        ))}
      </div>
    </FluentProvider>
  );
}
