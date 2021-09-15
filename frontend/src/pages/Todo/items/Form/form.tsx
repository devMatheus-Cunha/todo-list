import React from "react";

// icons
import { CgAddR } from "react-icons/cg";

// styles
import { Container, Content, Button, Input } from "./styles";

// types 
type FormProps = {
  handleAdd: () => void
  handleChange: any
  description: string
}

const Form = ({
  handleAdd, description, handleChange,
}: FormProps) => {
  return (
    <Container>
      <Content>
          <Input
            type="text"
            id="description"
            placeholder="Adicione uma tarefa"
            value={description}
            onChange={(event) => handleChange(event.target.value)}
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
