import React from "react";
import { useHistory } from "react-router-dom";

// icons
import { FcTodoList } from "react-icons/fc";

// styles
import { Container, Content } from "./styles";

const Menu: React.FC = () => {
  const history = useHistory();
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
