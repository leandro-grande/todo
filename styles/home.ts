import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-700)
  
`;

export const Content = styled.main`

  .wrapper {
    max-width: 736px;
    margin: 0 auto;
    margin-top: -1.8rem;

    form {
      display: flex;
      

      input {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        height: 3.375rem;
        width: 39.875rem;
        padding: 1rem;
        background-color: var(--gray-500);
        color: var(--gray-100);
        border: 1px solid #0D0D0D;
        border-radius: 8px;

        &::placeholder {
          color: var(--gray-300);
        }
      }

      button {
          height: inherit;
          margin-left: 0.5rem;
          padding: 1rem;
          border: 0;
          border-radius: 8px;
          background-color: var(--blue-700);
          color: var(--gray-100);
          font-size: 0.875rem;
          font-weight: 700;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          cursor: pointer;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
    }

    .tasks {
      margin-top: 4rem;

      strong:first-child {
        font-size: 0.875rem;
        color: var(--blue-500);
      }

      strong:last-child {
        font-size: 0.875rem;
        color: var(--purple-500);
      }

      span {
          margin-left: 0.5rem;
          height: 19px;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 999px;

          color: var(--gray-200);
          line-height: 15px;
          background-color: var(--gray-400);
        }
      
      .tasks-title {
        display: flex;
        justify-content: space-between;
      }

      .tasks-content {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      

        .tasks-empty {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          strong {
            margin-top: 1rem;
            color: var(--gray-300);
            font-size: 1rem;
          }

          p {
            color: var(--gray-300);
            margin-top: 0.3rem;
            font-size: 1rem;
          }
        }
      }
    }

}

`;
