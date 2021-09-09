import React from "react";
import "font-awesome/css/font-awesome.min.css";

// styles
import GlobalStyles from '../styles/globalStyles';
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Menu from "../template/Menu";
import { Routes } from "./routes";

export function App() {
  return (
    <>
      <Menu />
      <Routes />
      <GlobalStyles />
    </>
  );
}
