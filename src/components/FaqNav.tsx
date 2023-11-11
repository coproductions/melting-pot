import { Link } from "@fluentui/react-components";
import InstaIcon from "../images/InstaIcon";
import styles from "./FaqNav.module.css";
import { useLocation, Link as RouteLink } from "react-router-dom";
import classnames from "classnames";

export default function FaqNav() {
  const { pathname } = useLocation();
  const isFaqPage = pathname === "/faq";

  return (
    <div className={styles.container}>
      <RouteLink to="faq" className={classnames({ [styles.link]: true, [styles.selected]: isFaqPage })}>
        faq
      </RouteLink>
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
