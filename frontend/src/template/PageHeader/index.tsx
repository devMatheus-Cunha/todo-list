import React from "react";

import { Header } from "./styles";

const PageHeader = ({ name, small }: any) => {
  return (
    <Header>
      <h2>
        {name} <small>{small}</small>
      </h2>
    </Header>
  );
};

export default PageHeader;
