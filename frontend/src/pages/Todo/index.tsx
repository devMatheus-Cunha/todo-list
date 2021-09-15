import React, { useCallback, useState } from "react";
import axios from "axios";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/Form/form";
import List from "./items/List/list";

// stylseee
import { Container } from "./styles";

// axios
const URL = "http://localhost:3003/api/todos"

const Todo = () => {
  // states
  const [valueDescription, setValueDescription] = useState("");
  const [list, setList] = useState([]);


  // functions
  const handleAdd = useCallback(() => {
    const description = valueDescription;
    axios.post(URL, {description}).then(resp => console.log("funfun"))
  }, [valueDescription]);

  const handleChange = useCallback((value) => {
    setValueDescription(value);
  }, []);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form
        handleAdd={handleAdd}
        description={valueDescription}
        handleChange={handleChange}
      />
      <List />
    </Container>
  );
};

export default Todo;
