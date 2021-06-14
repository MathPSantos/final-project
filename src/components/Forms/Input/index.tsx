import { InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <div className={styles.formControl}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} {...rest} />
    </div>
  );
}
