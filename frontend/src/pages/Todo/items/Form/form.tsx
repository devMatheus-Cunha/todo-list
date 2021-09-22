import React from "react";

// icons
import { CgAddR } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";

// styles
import { Container, Content, ButtonAdd, InputContent, ButtonSearch } from "./styles";

// types
type FormProps = {
  handleAdd: () => void;
  handleChange: (event: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
  description: string;
};

const Form = ({
  handleAdd,
  description,
  handleChange,
  handleSearch,
  handleClear,
}: FormProps) => {
  // function
  const keyHandler = (event: any) => {
    if (event.key === "Enter") {
      event.shiftKey ? handleSearch() : handleAdd() 
    } else if (event.key === "Escape") {
      handleClear()
    }
  }
  return (
    <Container>
      <Content>
        <InputContent>
          <input
            type="text"
            id="description"
            placeholder="Adicione uma tarefa"
            value={description}
            onKeyUp={keyHandler}
            onChange={(event) => handleChange(event.target.value)}
          />
          <button type="button" onClick={handleClear}>
            <MdClear />
          </button>
        </InputContent>
        <ButtonAdd type="button" onClick={handleAdd}>
          <CgAddR />
        </ButtonAdd>
        <ButtonSearch type="button" onClick={handleSearch}>
          <BsSearch />
        </ButtonSearch>
      </Content>
    </Container>
  );
};

export default Form;
