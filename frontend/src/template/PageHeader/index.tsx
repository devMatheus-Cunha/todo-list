import React from "react";

import { Header } from "./styles";

// types
type PageHeaderProps = {
  name: string,
  small: string,
}

const PageHeader = ({ name, small }: PageHeaderProps) => {
  return (
    <Header>
      <h2>
        {name} <small>{small}</small>
      </h2>
    </Header>
  );
};

export default PageHeader;
