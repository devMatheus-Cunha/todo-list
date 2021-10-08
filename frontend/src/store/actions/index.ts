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
  const getData =  axios.get(`${URL}?sort=-createAt${search}`)
  return {
    type: "LIST_CHAGED",
    payload: getData,
  };
};

export const add = (description: any) => {
  const request =  axios.post(URL, { description })
  return {
    type: "ADD_DATA",
    payload: request,
  };
};