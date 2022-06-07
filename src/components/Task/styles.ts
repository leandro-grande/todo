import styled, { css } from 'styled-components';

export const Container = styled.div<{isCompleted: boolean}>`
  background-color: var(--gray-500);
  border: 1px solid var(--gray-400);
  color: var(--gray-200);
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  

  button.not-completed {
    height: 1.1rem;
    width: 1.1rem;
    border: 2px solid var(--blue-500);
    border-radius: 50%;
    background-color: transparent;
  }

  button.completed {
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    border: 2px solid var(--purple-700);
    background-color: var(--purple-700);
  }

  p {
    max-width: 630px;
    font-size: 0.875rem;

    ${props => props.isCompleted && css`
      text-decoration: line-through;
      color: var(--gray-300);
    `}
  }

  button.delete {
    margin-left: auto;
    background-color: transparent;
    border: 0;
    color: var(--gray-200);
    transition: color 0.2s;
    font-size: 0;

    &:hover{
      color: var(--blue-500);
    }
  }
`;