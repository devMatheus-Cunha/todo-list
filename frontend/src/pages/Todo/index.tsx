import React, { useCallback } from "react";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/Form/form";
import List from "./items/List/list";

// styls
import { Container } from "./styles";

const Todo = () => {
  // functions
  const handleAdd = useCallback(() => {
    console.log("rodou");
  }, []);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form handleAdd={handleAdd} />
      <List />
    </Container>
  );
};

export default Todo;
