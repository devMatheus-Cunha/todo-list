import React from "react";

// icons
import { CgAddR } from "react-icons/cg";

// styles
import { Container, Content, Button, Input } from "./styles";

// types 
type FormProps = {
  handleAdd: () => void
}

const Form = ({
  handleAdd
}: FormProps) => {
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
            onClick={handleAdd}
          >
            <CgAddR />
          </Button>
      </Content>
    </Container>
  );
};

export default Form;
