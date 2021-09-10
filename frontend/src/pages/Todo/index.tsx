import React from "react";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/form";
import List from "./items/list";

// styls
import { Container } from "./styles";

const Todo = () => {
  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form />
      <List />
    </Container>
  );
};

export default Todo;
