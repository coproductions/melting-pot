import { useState } from "react";
import { Widget } from "@typeform/embed-react";
import { Button } from "@fluentui/react-components";
import "./Signup.css";
import styles from './StepText.module.css'
import StepText from "./StepText";

export default function () {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <>
        <StepText />
        <Button appearance="primary" className="signup-button" shape="square" size="large" onClick={() => setShowForm(true)}>
          join now
        </Button>
        <div className={styles.disclaimer}>
        * Once admin fees are covered, all remaining proceeds will be donated to
        charities focused on addressing homelessness in Seattle.
      </div>
      </>
    );
  }
  return (
    <section className="signup-container">
      <Widget id="HAsS6rLn" className="signup-form" autoResize />
    </section>
  );
}
