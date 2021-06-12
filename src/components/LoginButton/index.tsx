import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles.module.scss";

export function LoginButton() {
  return (
    <Link href="/login">
      <a className={styles.loginButton}>
        login <FiArrowRight />
      </a>
    </Link>
  );
}
