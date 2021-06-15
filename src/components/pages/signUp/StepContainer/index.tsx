import { ReactNode } from "react";

import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";

import styles from "./styles.module.scss";

interface StepContainerProps {
  children: ReactNode;
}

export function StepContainer({ children }: StepContainerProps) {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <Navbar />
        <main>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
