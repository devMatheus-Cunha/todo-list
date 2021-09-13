import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 4rem;
  .styleScreen {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const Input = styled.input`
  color: white;
  outline: none;
`;

export const Button = styled.button`
  cursor: pointer;

  svg {
    path {
      fill: var(--green);
    }
    width: 22px;
    height: 22px;
  }
`;
