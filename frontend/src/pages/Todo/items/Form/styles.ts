import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 4rem;
  .styleScreen {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 0.9rem;
`;

export const Button = styled.button`
  cursor: pointer;
  svg {
    path {
      fill: var(--blue);
    }
    width: 33px;
    height: 33px;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--blue);
  border-radius: 0.2rem;

  > button {
    svg {
    path {
      fill: var(--blue);
    }
    width: 23px;
    height: 23px;
    margin-right: 0.3rem;
    &:hover {
      filter: brightness(0.8);
    }
  }
  }

  input {
    width: 100%;
    outline: none;
    padding: 0.5rem;
    color: white;
  }
`;
