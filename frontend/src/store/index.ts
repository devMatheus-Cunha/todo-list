import { combineReducers, createStore } from "redux";
import { ReduceStateTodoAndDescription } from "./reducers";

 const rootReducer = combineReducers({
  todo: ReduceStateTodoAndDescription,
});

export function storeConfig() {
  return createStore(rootReducer);
}