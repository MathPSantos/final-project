import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { StepContainer } from "../../components/pages/signUp/StepContainer";
import { Button } from "../../components/Button";

function Step3() {
  return (
    <>
      <Head>
        <title>Cadastro | indica</title>
      </Head>

      <StepContainer>
        <h1>
          Prontoo! Agora nós iremos analisar seu cadastro e em breve te
          indicaremos os cursos!
        </h1>
        <p>
          Fique tranquilo que enviaremos informações para você por email, tudo
          bem? Enquanto isso você pode navegar pela plataforma! Bora?{" "}
        </p>
        <Link href="/login">
          <Button icons={[<FiArrowRight />, <FiArrowRight />]} label="boraaa" />
        </Link>
      </StepContainer>
    </>
  );
}

export default Step3;
