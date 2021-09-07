import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// component
import About from "./about";
import Menu from "./template/Menu";
import Todo from "./todo";

export function App() {
  return (
    <div className="container">
      <Menu />
      <About />
      <Todo />
    </div>
  );
}
