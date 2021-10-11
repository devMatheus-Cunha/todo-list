import { combineReducers, applyMiddleware, createStore } from "redux";
import { ReduceStateTodoAndDescription } from "./reducers";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  todo: ReduceStateTodoAndDescription,
});

export function storeConfig() {
  return applyMiddleware(thunk, multi, promise)(createStore)(rootReducer);
}
