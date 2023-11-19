import Heart from "../images/Heart";
import styles from "./Footer.module.css";
import {useLocation, Link as RouteLink } from "react-router-dom";
import classnames from "classnames";
import navStiles from "./FaqNav.module.css";

export default function Footer() {
  const { pathname } = useLocation();
  const isLegalPage = pathname === "/legal";

  return (
    <footer className={styles.footer}>
      <RouteLink
        to="legal"
        className={classnames({
          [navStiles.link]: true,
          [navStiles.selected]: isLegalPage,
        })}
      >
        legal
      </RouteLink>
      <div className={styles.bottom}>
        <div>made with</div>
        <Heart />
        <div>in Seattle 2023</div>
      </div>
    </footer>
  );
}
