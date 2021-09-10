import React from "react";

// styles 
import { Header, Separation } from "./styles";

// types
type PageHeaderProps = {
  name: string,
  small: string,
}

const PageHeader = ({ name, small }: PageHeaderProps) => {
  return (
    <Header>
      <h2>
        {name} <span>{small}</span>
      </h2>
      <Separation />
    </Header>
  );
};

export default PageHeader;
