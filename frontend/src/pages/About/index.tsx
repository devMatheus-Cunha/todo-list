import React from "react";

// template
import PageHeader from "../../template/PageHeader";

// styles
import { Container, Section } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <PageHeader name="Sobre" small="Nós" />

      <Section>
        <h2>Objetivo</h2>
        <p>
          <strong>Todo List</strong> tem como objetivo te ajudar a gerenciar
          tarefas cotidias ou até mesmo planejamentos futuros, e com isso
          podendo facilitar sua organização e concluir todos seus objetivos.
        </p>
        <br />
        <p>
          A list conta com algumas funcionalidades basicas, como de Adicionar,
          Excluir, Marcar como conluido e Pesquisar sobre as Tarefas já
          cadastradas que te facilita a encontrar o que você deseja com maior
          facilidade.
        </p>
      </Section>
    </Container>
  );
};

export default About;
