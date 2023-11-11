import { useState } from "react";
import { Widget } from "@typeform/embed-react";
import { Button } from "@fluentui/react-components";
import "./Signup.css";

export default function () {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <section className="button-container">
        <Button
          appearance="primary"
          shape="square"
          size="large"
          onClick={() => setShowForm(true)}
        >
          join now
        </Button>
      </section>
    );
  }
  return (
    <section className="signup-container">
      <Widget id="HAsS6rLn" className="signup-form" autoResize />
    </section>
  );
}
