import Head from "next/head";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

import * as Form from "../components/Forms";
import { Button } from "../components/Button";

import styles from "../styles/pages/login.module.scss";

function Login() {
  return (
    <>
      <Head>
        <title>Login | indica.</title>
      </Head>

      <main className={styles.login}>
        <div className={styles.loginContent}>
          <Link href="/">
            <img src="/assets/logo.svg" alt="indica." />
          </Link>

          <h1>Login</h1>
          <p>Feliz em te ver aqui! Preencha seus dados e bora lá!</p>

          <form>
            <Form.Input type="email" name="email" label="seu e-mail" />

            <Form.Input type="password" name="password" label="sua senha" />

            <div className={styles.footer}>
              <Form.Checkbox />

              <a href="#">Esqueci minha senha!</a>
            </div>

            <Button
              label="boraa!!"
              icons={[<FiArrowRight />, <FiArrowRight />]}
              display="block"
            />
          </form>

          <p className={styles.signUp}>
            Ainda não faz parte?{" "}
            <Link href="/signUp">
              <a>Cadastre-se</a>
            </Link>
          </p>
        </div>

        <div className={styles.loginBox}></div>
      </main>
    </>
  );
}

export default Login;
