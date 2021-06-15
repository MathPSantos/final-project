import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Button } from "../../../Button";

import styles from "./styles.module.scss";

export function ButtonsFooter() {
  return (
    <footer className={styles.footer}>
      <button>
        <FiArrowLeft />
      </button>

      <Button label="continuar" icons={[<FiArrowRight />, <FiArrowRight />]} />
    </footer>
  );
}
