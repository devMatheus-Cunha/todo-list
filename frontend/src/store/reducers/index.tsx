import { combineReducers, createStore } from "redux";

 const rootReducer = combineReducers({
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar livro",
        done: true,
      },
      {
        _id: 2,
        description: "Pagar celular",
        done: false,
      },
      {
        _id: 3,
        description: "Cobrar vizinha",
        done: false,
      },
    ],
  }),
});

export function storeConfig() {
  return createStore(rootReducer);
}