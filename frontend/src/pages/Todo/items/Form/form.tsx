import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
// icons
import { CgAddR } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { changeDescription } from "../../../../store/actions";

// styles
import {
  Container,
  Content,
  ButtonAdd,
  InputContent,
  ButtonSearch,
} from "./styles";

// types
type FormProps = {
  handleAdd: () => void;
  handleSearch: () => void;
  handleClear: () => void;
  description: string;
  changeDescription: any;
};

const Form = ({
  handleAdd,
  description,
  changeDescription,
  handleSearch,
  handleClear,
}: FormProps) => {
  // function
  const keyHandler = (event: any) => {
    if (event.key === "Enter") {
      event.shiftKey ? handleSearch() : handleAdd();
    } else if (event.key === "Escape") {
      handleClear();
    }
  };
  
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
            onChange={changeDescription}
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

const mapStateToProps = (state: any) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);
