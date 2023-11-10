import { Button, Link } from "@fluentui/react-components";
import InstaIcon from "../images/InstaIcon";
import styles from "./FaqNav.module.css";
import { useLocation, useHref, Link as RouteLink } from "react-router-dom";

export default function FaqNav() {
  const { pathname } = useLocation();
  const isFaqPage = pathname === "/faq";

  return (
    <div className={styles.container}>
      {isFaqPage ? (
        <RouteLink className={styles.link} to="/">
          home
        </RouteLink>
      ) : (
        <RouteLink to="faq" className={styles.link}>
          faq
        </RouteLink>
      )}
      <Link
        className={styles.insta}
        appearance="subtle"
        href="https://www.instagram.com/mingle_and_munch/"
        target="_blank"
      >
        <InstaIcon />
      </Link>
    </div>
  );
}
