import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 4rem;
  .styleScreen {
    display: none;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: center;
    
    th {
      color: var(--gray);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--secondary);
      color: var(--white-050);
      border-radius: 0.2rem;

      &:first-child {
        color: var(--text-title);
      }
    }

    .action {
      button {
        background: transparent;
        border: none;
        padding-right: 0.1rem;

        &:hover {
          filter: brightness(0.8);

        }
      }
    }
  }
  @media screen and (max-width: 525px) {
    margin: 0 auto;
    padding: 1rem;

    table {
      tr {
        display: none;
      }
    }
    .styleScreen {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 1rem;
      padding: 1rem 0;

      .contentTransactions {
        width: 100%;
        background: var(--shape);
        padding: 1rem 2rem;
        border-radius: 0.25rem;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        .styleTitle {
          color: #363f5f;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .action {
          display: flex;
          gap: 0.3rem;
          align-items: center;
          transform: translateX(20%);
          button {
            background: transparent;
            border: none;
            transform: translateY(8%);

            img {
              width: 22px;
              height: 22px;
            }

            &:hover {
              filter: brightness(0.9);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 325px) {
    .action {
      display: flex;
      gap: 0.1rem;
      align-items: center;
      transform: translateX(20%);

      button {
        background: transparent;
        border: none;
        transform: translateY(8%);

        img {
          width: 18px;
          height: 18px;
        }
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
