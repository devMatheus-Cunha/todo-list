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

export const Input = styled.input`
  width: 100%;
  padding:0.5rem;

  color: white;
  
  border-radius: 0.2rem;
  
  outline: var(--outline);
  background-color:transparent;
  border: 1px solid var(--blue);
`;

export const Button = styled.button`
  cursor: pointer;
  svg {
    path {
      fill: var(--blue);
      &:hover{
        fill: var(--blue-hover);
      }
    }
    width: 33px;
    height: 33px;
  }
`;
