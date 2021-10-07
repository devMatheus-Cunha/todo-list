const initialState = 
  {
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
      {
        _id: 4,
        description: "Pagar Ber e Tide",
        done: true,
        createdAt: new Date(),
      },
    ],
  }

export const ReduceStateTodoAndDescription = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case "DESCRIPTION_CHAGED":
      return {
        ...state,
        description: payload,
      };
    default:
      return {
        ...state,
      };
  }
};