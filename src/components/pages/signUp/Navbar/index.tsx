import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "../../../Button";

import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <img src="/assets/logo.svg" alt="indica." />
        </Link>

        <Link href="/login">
          <Button label="login" icons={[<FiArrowRight />]} color="green" />
        </Link>
      </div>
    </nav>
  );
}
