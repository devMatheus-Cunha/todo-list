import axios from "axios";

// axios
const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event: any) => {
  return {
    type: "DESCRIPTION_CHAGED",
    payload: event.target.value
  }
}

export const changeList = () => {
    const search = axios.get(`${URL}?sort=-createAt`)
   
  return {
    type: "LIST_CHAGED",
    payload: search,
  }
}