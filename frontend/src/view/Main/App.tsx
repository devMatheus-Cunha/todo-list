import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// parts
import Todo from "../../pages/Todo";
import About from "../../pages/About";

// styles
import GlobalStyles from '../../assets/styles/globalStyles';

// component
import Menu from "../../template/Menu";

export function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
      <Switch>
        <Route path="/todos" exact component={Todo} />
        <Route path="/about" exact component={About} />
        <Redirect from="*" to="/todos" />

      </Switch>
    </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
