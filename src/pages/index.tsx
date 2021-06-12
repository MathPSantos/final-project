import Head from "next/head";
import { FiArrowRight } from "react-icons/fi";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Final project</title>
      </Head>

      <Navbar />
      <main>
        <section className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.hero}>
              <h1>
                Transforme dificuldades em <span>soluções</span>
              </h1>
              <p>
                Nosso objetivo por aqui é te ajudar! Fale um pouco sobre você e
                nossos curadores irão indicar conteúdos para resolver seus
                problemas!
              </p>
              <button className={styles.button}>
                cadastre-se
                <div className={styles.icons}>
                  <FiArrowRight />
                  <FiArrowRight />
                </div>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.sectionContent}>
            <img src="" alt="Ilustração" />

            <div>
              <h2>
                Mais do que uma vitrine de cursos<span>.</span>
              </h2>
              <p>
                Aqui nós vamos te auxiliar para você poder solucionar seus
                problemas/dificuldades! <br />
                Nosso time irá fazer a análise da sua situação e indicaremos os
                conteúdos para te ajudar!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.sectionContent}>
            <div>
              <h2>
                As pílulas de cohecimento<span>.</span>
              </h2>
              <p>
                Entendemos que você não tem todo o tempo do mundo e nem sempre
                pode parar de trabalhar para estudar. Por esse motivo te
                indicaremos pequenas aulas e materiais, mas se quiser fazer o
                curso todo, vá em frente!
              </p>
            </div>

            <img src="" alt="Ilustração" />
          </div>
        </section>

        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <h2>
              E aí? Bora iniciar a transformação<span>?</span>
            </h2>
            <p>
              Inicie o seu cadastro e vamos juntos gerar mudança na sua vida
              profissional!
            </p>
            <button className={styles.button}>
              cadastre-se
              <div className={styles.icons}>
                <FiArrowRight />
                <FiArrowRight />
              </div>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
