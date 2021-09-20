import React, { useCallback, useEffect, useState } from "react";
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
  const refreshPage = () => {
    axios.get(`${URL}?sort=-createAt`).then((resp) => {
      setList(resp.data);
      setValueDescription("");
    });
  };

  const handleChange = useCallback((value) => {
    setValueDescription(value);
  }, []);

  const handleAddTodoList = useCallback(() => {
    const description = valueDescription;
    axios.post(URL, { description }).then((resp) => refreshPage());
  }, [valueDescription]);

  const handleCheckTodoList = useCallback((todoList: ListType) => {
    axios
      .put(`${URL}/${todoList._id}`, { ...todoList, done: true })
      .then((resp) => refreshPage());
  }, []);

  const handleMarkAsPeddingList = useCallback((todoList: ListType) => {
    axios
      .put(`${URL}/${todoList._id}`, { ...todoList, done: false })
      .then((resp) => refreshPage());
  }, []);

  const handleRemoveTodoList = useCallback((id: string) => {
    axios.delete(`${URL}/${id}`).then((resp) => refreshPage());
  }, []);

  useEffect(() => {
    refreshPage();
  }, []);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form
        handleAdd={handleAddTodoList}
        description={valueDescription}
        handleChange={handleChange}
      />

      <List
        dataList={list}
        handleRemove={handleRemoveTodoList}
        handleCheckList={handleCheckTodoList}
        handleMarkAsPeddingList={handleMarkAsPeddingList}
      />
    </Container>
  );
};

export default Todo;
