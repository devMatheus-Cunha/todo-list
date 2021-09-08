import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
  Redirect,
} from "react-router-dom";

import Todo from "../todo";
import About from "../about";

export const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Switch>
    </BrowserRouter>
  );
};
