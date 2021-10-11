const initialState = {
  description: "",
  list: [],
};

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
    case "LIST_CHAGED":
      return {
        ...state,
        list: payload.data,
      };
    case "CLEAR_DESCRIPTION":
      return {
        ...state,
        description: "",
      };
    default:
      return {
        ...state,
      };
  }
};
