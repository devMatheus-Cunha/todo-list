import { combineReducers, createStore } from "redux";

 const rootReducer = combineReducers({
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar livro",
        done: true,
        createdAt: new Date(),
      },
      {
        _id: 2,
        description: "Pagar celular",
        done: false,
        createdAt: new Date(),
      },
      {
        _id: 3,
        description: "Cobrar vizinha",
        done: false,
        createdAt: new Date(),
      },
    ],
  }),
});

export function storeConfig() {
  return createStore(rootReducer);
}