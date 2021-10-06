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
  const refreshPage = (description: string) => {
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${URL}?sort=-createAt${search}`).then((resp) => {
      setList(resp.data);
      setValueDescription(description);
    });
  };

  const handleSearchList = useCallback(() => {
    refreshPage(valueDescription)
  }, [valueDescription])

  const handleChange = useCallback((value) => {
    setValueDescription(value);
  }, []);

  const handleAddTodoList = useCallback(() => {
    const description = valueDescription;
    if (description.length > 0) {
      axios.post(URL, { description }).then((resp) => {
        console.log(resp);
        refreshPage("");
      });
    } else {
      alert("Campo para adicionar tarefa está vazio!");
    }
  }, [valueDescription]);

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

  const handleRemoveTodoList = useCallback((id: string) => {
    axios.delete(`${URL}/${id}`).then((resp) => refreshPage(valueDescription));
  }, [valueDescription]);

  const handleClearTodoList = useCallback(() => {
    refreshPage("")
  },[])

  useEffect(() => {
    refreshPage("");
  }, []);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form
        handleAdd={handleAddTodoList}
        description={valueDescription}
        handleChange={handleChange}
        handleSearch={handleSearchList}
        handleClear={handleClearTodoList}
      />

      <List
        handleRemove={handleRemoveTodoList}
        handleCheckList={handleAsDoneTodoList}
        handleMarkAsPeddingList={handleMarkAsPeddingList}
      />
    </Container>
  );
};

export default Todo;
