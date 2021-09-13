import React from "react";

// icons
import { FcTodoList } from "react-icons/fc";

// styles
import { Container, Content } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>
          <FcTodoList /> Todo List
        </p>
        <a href="/todos">Todo</a>
        <a href="/about">Sobre</a>
      </Content>
    </Container>
  );
};

export default Menu;
