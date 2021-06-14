import { ButtonHTMLAttributes, ReactElement, Fragment } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icons?: ReactElement[];
  color?: "pink" | "green";
  display?: "flex" | "block";
}

export function Button({
  label,
  icons = [],
  color = "pink",
  display = "flex",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[color], styles[display]].join(" ")}
      {...rest}
    >
      {label}
      <div className={styles.icons}>
        {icons?.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </div>
    </button>
  );
}
