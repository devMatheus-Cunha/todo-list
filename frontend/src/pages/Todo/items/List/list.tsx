import React from "react";
import { connect } from 'react-redux'
import { Tooltip } from "@material-ui/core";

// images
import trashImage from "../../../../assets/images/trash-2.svg";
import checImage from "../../../../assets/images/check-circle.svg";
import refreshImage from "../../../../assets/images/refresh.svg";

// styles
import { Container } from "./styles";


// interface and type
interface IListProps {
  list: any;
  handleRemove: (id: string) => void;
  handleCheckList: (id: ListType) => void;
  handleMarkAsPeddingList: (id: ListType) => void;
}

type ListType = {
  createdAt: string;
  description: string;
  done: boolean;
  _id: string;
};

const List = ({
  list,
  handleRemove,
  handleCheckList,
  handleMarkAsPeddingList,
}: IListProps) => {
  const listDataRequest = list || [];

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
                          onClick={() => handleCheckList(list)}
                        >
                          <img src={checImage} alt="Concluido" />
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Renovar" placement="top" arrow>
                        <button
                          type="button"
                          onClick={() => handleMarkAsPeddingList(list)}
                        >
                          <img src={refreshImage} alt="Renovar" />
                        </button>
                      </Tooltip>
                    )}
                  </>
                  <Tooltip title="Deletar" placement="top" arrow>
                    <button
                      type="button"
                      onClick={() => handleRemove(list._id)}
                    >
                      <img src={trashImage} alt="Lixeira" />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
            <div className="styleScreen">
              {listDataRequest.map((list: ListType) => {
                return (
                  <div key={list._id} className="contentTransactions">
                    <div className="styleTitle">{list.description}</div>
                    <div className="action">
                      <Tooltip title="Deletar" placement="top" arrow>
                        <button
                          type="button"
                          onClick={() => handleRemove(list._id)}
                        >
                          <img src={trashImage} alt="Lixeira" />
                        </button>
                      </Tooltip>
                    </div>
                    <div className="styleCreatedAt">
                      {" "}
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(list.createdAt)
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </tbody>
        </table>
      ) : (
        <h3>Nenhuma tarefa cadastrada</h3>
      )}
    </Container>
  );
};


const mapStateToProps = (state: any) => ({
  list: state.todo.list
})

const mapDispatchToProps = {
  
}
export default connect(mapStateToProps, mapDispatchToProps)(List)

