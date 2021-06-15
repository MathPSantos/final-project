import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Button } from "../../../Button";

import styles from "./styles.module.scss";

interface ButtonsFooterProps {
  previous: string;
  next: string;
  label?: string;
}

export function ButtonsFooter({
  previous,
  next,
  label = "continuar",
}: ButtonsFooterProps) {
  return (
    <footer className={styles.footer}>
      <Link href={previous}>
        <button>
          <FiArrowLeft />
        </button>
      </Link>

      <Link href={next}>
        <Button label={label} icons={[<FiArrowRight />, <FiArrowRight />]} />
      </Link>
    </footer>
  );
}
