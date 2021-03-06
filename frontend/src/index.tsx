import React from "react";
import ReactDOM from "react-dom";
import { App } from "./view/Main/App";
import { Provider } from "react-redux";
import { storeConfig } from "./store";

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
