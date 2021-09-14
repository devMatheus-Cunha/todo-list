import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--navBar);
  padding: 1rem 0.7rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  
  gap: 2rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
    font-size: 1.4rem;
    font-weight: 500;

    font-family: 'Ubuntu', sans-serif;
    color: var(--white-050);

    margin-bottom: 0;
    
    svg {
      g:first-child {
        fill: var(--blue);
      }
      g {
        fill: var(--white-050);
      }
      
      width: 22px;
      height: 22px;
    }
  }
  
  a {
    color: var(--blue);
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;

    transition: 100ms;

    &:hover {
      color: var(--blue-hover);
    }
  }
`;
