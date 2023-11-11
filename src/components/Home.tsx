import { useState } from "react";
import styles from "./Home.module.css";
import StepText from "./StepText";
import { Link } from "@fluentui/react-link";

export default function () {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>
          mingle & munch is a new concept for enjoying good food and meeting new
          people in Seattle.{" "}
          <Link className={styles.link} appearance="subtle" onClick={() => setShowSteps(true)}>
          Tell me more...
          </Link>
        </div>
        {showSteps && <StepText />}

        {showSteps && (
          <div className={styles.disclaimer}>
            * Once admin fees are covered, all remaining proceeds will be
            donated to charities focused on addressing homelessness in Seattle.
          </div>
        )}
      </div>
    </div>
  );
}
