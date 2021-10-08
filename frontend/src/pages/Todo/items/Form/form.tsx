import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
// icons
import { CgAddR } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { add, changeDescription, search } from "../../../../store/actions";

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
  add: any;
  search: any;
  handleClear: () => void;
  description: string;
  changeDescription: any;
};

const Form = ({
  add,
  description,
  changeDescription,
  search,
  handleClear,
}: FormProps) => {
  // function
  const keyHandler = (event: any) => {
    if (event.key === "Enter") {
      event.shiftKey ? search() : add(description);
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
        <ButtonAdd type="button" onClick={() => add(description)}>
          <CgAddR />
        </ButtonAdd>
        <ButtonSearch type="button" onClick={() => search(description)}>
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
bindActionCreators({changeDescription, add, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);
