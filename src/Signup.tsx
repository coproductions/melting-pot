import { useState } from "react";
import { Widget } from "@typeform/embed-react";
import { Button } from "@fluentui/react-components";
import "./Signup.css";

export default function () {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return <Button onClick={() => setShowForm(true)}>Sign up</Button>;
  }
  return (
    <section className="signup-container">
      <Widget id="HAsS6rLn" className="signup-form" />
    </section>
  );
}
