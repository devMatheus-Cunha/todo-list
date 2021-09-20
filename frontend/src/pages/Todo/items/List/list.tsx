import React from "react";
import { Tooltip } from "@material-ui/core";

// images
import trashImage from "../../../../assets/images/trash-2.svg";
import editImage from "../../../../assets/images/edit-2.svg";
import checImage from "../../../../assets/images/check-circle.svg";
import refreshImage from "../../../../assets/images/refresh.svg";

// styles
import { Container } from "./styles";

// interface and type
interface IListProps {
  dataList: any;
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
  dataList,
  handleRemove,
  handleCheckList,
  handleMarkAsPeddingList,
}: IListProps) => {
  const list = dataList || [];

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
            {list.map((list: ListType) => (
              <tr key={list._id} className={!list.done ? "doneStyle" : ""}>
                <td>{list.description}</td>
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(list.createdAt)
                  )}
                </td>
                <td className="action">
                  <Tooltip title="Concluido" placement="top" arrow>
                    <button type="button" onClick={() => handleCheckList(list)}>
                      <img src={checImage} alt="Concluido" />
                    </button>
                  </Tooltip>
                  <Tooltip title="Concluido" placement="top" arrow>
                    <button
                      type="button"
                      onClick={() => handleMarkAsPeddingList(list)}
                    >
                      <img src={refreshImage} alt="Concluido" />
                    </button>
                  </Tooltip>
                  {/* <Tooltip title="Editar" placement="top" arrow>
                    <button
                      type="button"
                      // onClick={() => handleOpenEditTransaction(list._id)}
                    >
                      <img src={editImage} alt="Editar" />
                    </button>
                  </Tooltip> */}
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
              {list.map((list: ListType) => {
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

                      <Tooltip title="Editar" placement="top" arrow>
                        <button
                          type="button"
                          // onClick={() => handleOpenEditTransaction(list._id)}
                        >
                          <img src={editImage} alt="Editar" />
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

export default List;
