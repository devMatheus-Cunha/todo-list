import React, { useCallback, useState } from "react";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/Form/form";
import List from "./items/List/list";

// stylseee
import { Container } from "./styles";

const Todo = () => {
  // states
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  // functions
  const handleAdd = useCallback(() => {
    console.log(description);
  }, [description]);

  const handleChange = useCallback((value) => {
    setDescription(value)
  },[])

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form handleAdd={handleAdd} description={description} handleChange={handleChange}/>
      <List />
    </Container>
  );
};

export default Todo;
