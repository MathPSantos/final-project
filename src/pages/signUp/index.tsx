import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Navbar } from "../../components/pages/signUp";

import styles from "../../styles/pages/signUp.module.scss";

function SignUp() {
  return (
    <>
      <Head>
        <title>Cadastro | indica</title>
      </Head>

      <Navbar />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1>
            Oiii, tudo bem?! Nós da indica vamos te ajudar durante o seu
            cadastro! Vamos lá?
          </h1>

          <Link href="/signUp/step-1">
            <Button
              label="boraaa!"
              icons={[<FiArrowRight />, <FiArrowRight />]}
            />
          </Link>

          <p>Etapas do processo de cadastro:</p>

          <ul>
            <li>
              <span>1</span>
              <p>Dados pessoais</p>
            </li>

            <li className={styles.green}>
              <span>2</span>
              <p>Formulário</p>
            </li>

            <li className={styles.cyan}>
              <span>3</span>
              <p>Indicações de cursos</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default SignUp;
