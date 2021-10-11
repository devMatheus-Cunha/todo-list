import axios from "axios";

// axios
const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event: any) => {
  return {
    type: "DESCRIPTION_CHAGED",
    payload: event.target.value,
  };
};

export const search = () => {
  // const search = description ? `&description__regex=/${description}/` : "";
  // const getData = axios.get(`${URL}?sort=-createAt${search}`);
  const getData = axios.get(`${URL}?sort=-createAt`);
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
      .then(() => dispatch(search()));
  };
};

export const remove = (id: any) => {
  return (dispatch: any) => {
    axios.delete(`${URL}/${id}`).then(() => dispatch(search()));
  };
};

export const markAsDone = (todo: any) => {
  return (dispatch: any) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search()));
  };
};

export const markAsPedding = (todo: any) => {
  return (dispatch: any) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search()));
  };
};

export const clear = () => {
  return {
    type: "CLEAR_DESCRIPTION",
  };
};
