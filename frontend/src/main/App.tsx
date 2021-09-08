import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// component
import Menu from "../template/Menu";
import { Routes } from "./routes";

export function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}
