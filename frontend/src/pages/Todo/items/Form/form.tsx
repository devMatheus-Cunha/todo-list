import React from "react";

// icons
import { CgAddR } from "react-icons/cg";

// styles
import { Container, Content, Button, Input } from "./styles";

const Form = () => {
  return (
    <Container>
      <Content>
          <Input
            type="text"
            id="description"
            placeholder="Adicione uma tarefa"
          />
          <Button
            type="button"
            onClick={() => console.log("Rodou button form")}
          >
            <CgAddR />
          </Button>
      </Content>
    </Container>
  );
};

export default Form;
