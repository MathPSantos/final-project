import { ActiveLink } from "./ActiveLink";
import { LoginButton } from "../LoginButton";

import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/assets/logo.svg" alt="indica" />

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/about">
            <a>sobre</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/contact">
            <a>contato</a>
          </ActiveLink>
        </nav>

        <LoginButton />
      </div>
    </header>
  );
}
