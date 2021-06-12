import Head from "next/head";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

import styles from "../styles/pages/login.module.scss";

function Login() {
  return (
    <>
      <Head>
        <title>Login | indica.</title>
      </Head>

      <main className={styles.login}>
        <div className={styles.loginContent}>
          <img src="/assets/logo.svg" alt="indica." />

          <h1>Login</h1>
          <p>Feliz em te ver aqui! Preencha seus dados e bora lá!</p>

          <form>
            <div className={styles.formControl}>
              <label htmlFor="email">seu e-mail</label>
              <input required type="email" name="email" id="email" />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="password">sua senha</label>
              <input required type="password" name="password" id="password" />
            </div>

            <div className={styles.footer}>
              <label className={styles.checkbox}>
                Lembrar de mim
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className={styles.checkmark}>
                  <FiCheck />
                </span>
              </label>

              <a href="#">Esqueci minha senha!</a>
            </div>

            <button className={styles.button}>
              boraa!!
              <div className={styles.icons}>
                <FiArrowRight />
                <FiArrowRight />
              </div>
            </button>
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
