import { useState } from "react";
import { Widget } from "@typeform/embed-react";
import { Button } from "@fluentui/react-components";
import "./Signup.css";

export default function () {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return <Button shape="square" onClick={() => setShowForm(true)}>join now</Button>;
  }
  return (
    <section className="signup-container">
      <Widget id="HAsS6rLn" className="signup-form" autoResize />
    </section>
  );
}
