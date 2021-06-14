import { FiCheck } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Checkbox() {
  return (
    <label className={styles.checkbox}>
      Lembrar de mim
      <input type="checkbox" name="checkbox" id="checkbox" />
      <span className={styles.checkmark}>
        <FiCheck />
      </span>
    </label>
  );
}
