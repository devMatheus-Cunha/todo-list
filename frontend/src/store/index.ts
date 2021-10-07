import { combineReducers, applyMiddleware ,createStore } from "redux";
import { ReduceStateTodoAndDescription } from "./reducers";
import promise from "redux-promise";

 const rootReducer = combineReducers({
  todo: ReduceStateTodoAndDescription,
});

export function storeConfig() {
  return  applyMiddleware(promise)(createStore)(rootReducer);
}