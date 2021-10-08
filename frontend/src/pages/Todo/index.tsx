import React, { useCallback, useState } from "react";
import axios from "axios";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/Form/form";
import List from "./items/List/list";

// styles
import { Container } from "./styles";

// interface and type
type ListType = {
  createdAt: string;
  description: string;
  done: boolean;
  _id: string;
};

interface IListProps {
  list: ListType[];
}

// axios
const URL = "http://localhost:3003/api/todos";

const Todo = () => {
  // states
  const [valueDescription, setValueDescription] = useState<string>("");
  const [list, setList] = useState<IListProps[]>();

  // functions
  const refreshPage = (description: string) => {
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${URL}?sort=-createAt${search}`).then((resp) => {
      setList(resp.data);
      setValueDescription(description);
    });
  };

  const handleAsDoneTodoList = useCallback((todoList: ListType) => {
    axios
      .put(`${URL}/${todoList._id}`, { ...todoList, done: true })
      .then((resp) => refreshPage(valueDescription));
  }, [valueDescription]);

  const handleMarkAsPeddingList = useCallback((todoList: ListType) => {
    axios
      .put(`${URL}/${todoList._id}`, { ...todoList, done: false })
      .then((resp) => refreshPage(valueDescription));
  }, [valueDescription]);


  const handleClearTodoList = useCallback(() => {
    refreshPage("")
  },[])

  const handleRemoveTodoList = useCallback((id: string) => {
    axios.delete(`${URL}/${id}`).then((resp) => refreshPage(valueDescription));
  }, [valueDescription]);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form
        handleClear={handleClearTodoList}
      />

      <List
        handleCheckList={handleAsDoneTodoList}
        handleMarkAsPeddingList={handleMarkAsPeddingList}
        handleRemoveTodoList={handleRemoveTodoList}
      />
    </Container>
  );
};

export default Todo;
