import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import StepText from "./StepText";
import { Link } from "@fluentui/react-link";
import { useStore } from "../state/useStore";
import { defaultTheme } from "../themes/default-theme";
import classNames from "classnames";
import Signup from "./Signup";

export default function () {
  const [showSteps, setShowSteps] = useState(false);
  const setTheme = useStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(defaultTheme);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>
          mingle & munch is a new concept for enjoying good food and meeting new
          people in Seattle.{" "}
        </div>
        <Link
          className={classNames(styles.link, {
            [styles.fade]: showSteps,
          })}
          appearance="subtle"
          onClick={() => setShowSteps(true)}
        >
          Tell me more...
        </Link>
        {!showSteps && <div className={styles.spacer}></div>}
        {showSteps && <StepText />}
        <Signup />
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
