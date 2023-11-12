import faq from "../faq.json";
import styles from "./Faq.module.css";
import { theme2 } from "../themes/default-theme";
import { useStore } from "../state/useStore";
import { useEffect } from "react";
import { Link } from "@fluentui/react-components";

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
  const setTheme = useStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(theme2);
  }, []);

  return (
    <div className={styles.container}>
      <h2>FAQ</h2>
      {faq.map((item) => (
        <FaqItem key={item.Q} {...item} />
      ))}
      <div className={styles.contact}>
        If you have any more questions. Drop us a line{" "}
        <Link appearance="subtle" href="mailto:hi@mingle-munch.com">
          hi@mingle-munch.com
        </Link>
      </div>
    </div>
  );
}
