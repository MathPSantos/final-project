import { FiInstagram, FiLinkedin } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="/assets/logo.svg" alt="indica." />
        <p>Nos acompanhe nas redes sociais!</p>

        <div className={styles.social}>
          <a href="/">
            <FiInstagram />
          </a>

          <a href="/">
            <FiLinkedin />
          </a>
        </div>
      </div>

      <p>indica. 2021 - Todos os direitos reservados</p>
    </footer>
  );
}
