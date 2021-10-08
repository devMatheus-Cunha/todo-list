import { combineReducers, applyMiddleware, createStore } from "redux";
import { ReduceStateTodoAndDescription } from "./reducers";
import promise from "redux-promise";
import multi from "redux-multi";

const rootReducer = combineReducers({
  todo: ReduceStateTodoAndDescription,
});

export function storeConfig() {
  return applyMiddleware(multi, promise)(createStore)(rootReducer);
}
