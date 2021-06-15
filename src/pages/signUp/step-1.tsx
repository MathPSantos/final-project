import Head from "next/head";

import { Input } from "../../components/Forms";
import { StepContainer } from "../../components/pages/signUp/StepContainer";
import { ButtonsFooter } from "../../components/pages/signUp/ButtonsFooter";

function Step1() {
  return (
    <>
      <Head>
        <title>Cadastro | indica</title>
      </Head>

      <StepContainer>
        <Input required label="seu nome" name="name" />

        <Input required label="seu email" name="email" type="email" />

        <Input
          required
          label="confirme seu email"
          name="confirm-email"
          type="email"
        />

        <Input required label="seu telefone" name="phone" />

        <Input required label="sua senha" name="password" type="password" />

        <Input
          required
          label="confirme sua senha"
          name="confirm-password"
          type="password"
        />

        <ButtonsFooter previous="/signUp" next="/signUp/step-2" />
      </StepContainer>
    </>
  );
}

export default Step1;
