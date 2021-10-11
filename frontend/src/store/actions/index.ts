import axios from "axios";

// axios
const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event: any) => {
  return {
    type: "DESCRIPTION_CHAGED",
    payload: event.target.value,
  };
};

export const search = (description: any) => {
  const search = description ? `&description__regex=/${description}/` : "";
  const getData = axios.get(`${URL}?sort=-createAt${search}`);
  return {
    type: "LIST_CHAGED",
    payload: getData,
  };
};

export const add = (description: string) => {
  return (dispatch: any) => {
    axios
      .post(URL, { description })
      .then(() => dispatch(clear()))
      .then(() => dispatch(search(false)));
  };
};

export const remove = (id: any) => {
  return (dispatch: any) => {
    axios.delete(`${URL}/${id}`).then(() => dispatch(search(false)));
  };
};

export const markAsDone = (todo: any, description: any) => {
  return (dispatch: any) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search(description)));
  };
};

export const markAsPedding = (todo: any, description: any) => {
  return (dispatch: any) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search(description)));
  };
};

export const clear = () => {
  return (dispatch: any) => {
    dispatch({ type: "CLEAR_DESCRIPTION"})
    dispatch(search(false))
  }
};
