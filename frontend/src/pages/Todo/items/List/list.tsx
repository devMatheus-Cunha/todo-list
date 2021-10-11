import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";

// images
import trashImage from "../../../../assets/images/trash-2.svg";
import checImage from "../../../../assets/images/check-circle.svg";
import refreshImage from "../../../../assets/images/refresh.svg";

// styles
import { Container } from "./styles";
import { bindActionCreators } from "redux";
import {
  markAsDone,
  markAsPedding,
  remove,
  search,
} from "../../../../store/actions";

// interface and type
interface IListProps {
  search: any;
  list: any;
  remove?: any;
  description: any
  markAsDone: any;
  markAsPedding: any;
}

type ListType = {
  createdAt: string;
  description: string;
  done: boolean;
  _id: string;
};

const List = ({
  list,
  search,
  markAsDone,
  remove,
  description,
  markAsPedding,
}: IListProps) => {
  const listDataRequest = list || [];

  useEffect(() => {
    search();
  }, [search]);

  return (
    <Container>
      {list && list.length > 0 ? (
        <table>
          <thead>
            <tr key="Ola">
              <th>Título</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {listDataRequest.map((list: ListType) => (
              <tr key={list._id} className={list.done ? "doneStyle" : ""}>
                <td>{list.description}</td>
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(list.createdAt)
                  )}
                </td>
                <td className="action">
                  <>
                    {!list.done ? (
                      <Tooltip title="Concluido" placement="top" arrow>
                        <button
                          type="button"
                          onClick={() => markAsDone(list, description)}
                        >
                          <img src={checImage} alt="Concluido" />
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Renovar" placement="top" arrow>
                        <button
                          type="button"
                          onClick={() => markAsPedding(list, description)}
                        >
                          <img src={refreshImage} alt="Renovar" />
                        </button>
                      </Tooltip>
                    )}
                  </>
                  <Tooltip title="Deletar" placement="top" arrow>
                    <button type="button" onClick={() => remove(list._id)}>
                      <img src={trashImage} alt="Lixeira" />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>Nenhuma tarefa cadastrada</h3>
      )}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  description: state.todo.description,
  list: state.todo.list,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ search, markAsDone, markAsPedding, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
