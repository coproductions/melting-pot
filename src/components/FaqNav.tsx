import { Button, Link } from "@fluentui/react-components";
import InstaIcon from "../images/InstaIcon";
import styles from "./FaqNav.module.css";
import { useLocation } from "react-router-dom";

export default function FaqNav() {
  const { pathname } = useLocation();
  const isFaqPage = pathname === "/faq";

  return (
    <div className={styles.container}>
      {isFaqPage ? (
        <Link className={styles.link} appearance="subtle" href="#">
          home
        </Link>
      ) : (
        <Link className={styles.link} appearance="subtle" href="#faq">
          faq
        </Link>
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
