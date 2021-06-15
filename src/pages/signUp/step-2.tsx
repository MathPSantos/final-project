import Head from "next/head";

import { Input } from "../../components/Forms";
import { StepContainer } from "../../components/pages/signUp/StepContainer";
import { ButtonsFooter } from "../../components/pages/signUp/ButtonsFooter";

function Step2() {
  return (
    <>
      <Head>
        <title>Cadastro | indica</title>
      </Head>

      <StepContainer>
        <Input
          required
          label="selecione a área que melhor define sua empresa"
          name="area"
        />

        <Input
          required
          label="fale um pouco sobre o sua empresa"
          name="about"
        />

        <Input
          required
          label="caso tenha, descreva seu problema/dificuldade"
          name="problem"
        />

        <Input
          required
          label="quantas horas você estuda por dia "
          name="study-hours"
        />

        <Input
          required
          label="quantos empregados sua empresa tem?"
          name="employees"
        />

        <ButtonsFooter
          previous="/signUp"
          next="/signUp/step-3"
          label="finalizar"
        />
      </StepContainer>
    </>
  );
}

export default Step2;
