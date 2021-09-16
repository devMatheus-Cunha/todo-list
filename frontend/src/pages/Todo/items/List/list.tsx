import React from "react";
import { Tooltip } from "@material-ui/core";

// images
import trashImage from "../../../../assets/images/trash-2.svg";
// import editImage from "../../../../assets/images/edit-2.svg";

// styles
import { Container } from "./styles";

// interface and type
interface IListProps {
  dataList: ListType[];
  handleRemove: (id: string) => void
}

type ListType = {
  createdAt: string;
  description: string;
  done: boolean;
  _id: string;
};

const List = ({ dataList, handleRemove }: any) => {
  const list = dataList || [];

  return (
    <Container>
      <table>
        <thead>
          <tr key="Ola">
            <th>Título</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <>
            {list.map((list: ListType) => (
              <tr key={list._id}>
                <td>{list.description}</td>
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(list.createdAt)
                  )}
                </td>
                <td className="action">
                  <Tooltip title="Deletar" placement="top" arrow>
                    <button
                      type="button"
                      onClick={() => handleRemove(list._id)}
                    >
                      <img src={trashImage} alt="Lixeira" />
                    </button>
                  </Tooltip>

                  {/* <Tooltip title="Editar" placement="top" arrow>
                    <button
                      type="button"
                      // onClick={() => handleOpenEditTransaction(value.id)}
                    >
                      <img src={editImage} alt="Editar" />
                    </button>
                  </Tooltip> */}
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </Container>
  );
};

export default List;
