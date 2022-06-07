import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;
    --purple-500: #8284FA;
    --purple-700: #5E60CE;
    --blue-500: #4EA8DE;
    --blue-700: #1E6F9F;
    --red: #E25858;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-600);
  }

  button {
    cursor: pointer;
  }
`;