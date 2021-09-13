import React from 'react';

import { Container } from './styles';

const List = () => {
  return (
    <Container>
    <table>
      <thead>
        <tr key="Ola">
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <>
          <tr key="ola">
            <td>ola</td>
            <td>ola</td>
            <td>la</td>
          </tr>
        </>
      </tbody>
    </table>
  </Container>
  );
}

export default List;