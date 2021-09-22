import React from "react";

// icons
import { CgAddR } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";

// styles
import { Container, Content, Button, InputContent } from "./styles";

// types
type FormProps = {
  handleAdd: () => void;
  handleChange: (event: string) => void;
  handleSearch: () => void;
  description: string;
};

const Form = ({
  handleAdd,
  description,
  handleChange,
  handleSearch,
}: FormProps) => {
  return (
    <Container>
      <Content>
        <InputContent>
          <input
            type="text"
            id="description"
            placeholder="Adicione uma tarefa"
            value={description}
            onChange={(event) => handleChange(event.target.value)}
          />
          <Button type="button" onClick={handleSearch}>
            <MdClear />
          </Button>
        </InputContent>
        <Button type="button" onClick={handleAdd}>
          <CgAddR />
        </Button>
        <Button type="button" onClick={handleSearch}>
          <BsSearch />
        </Button>
      </Content>
    </Container>
  );
};

export default Form;
