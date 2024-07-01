import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --primary-color: #252629;
  --primary-background: #e4e7ees;
  --accent-color: #ff4a11;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    color: var(--primary-color);
    background-color: var(--primary-background);
  }

  main {
    padding: 20px;
  }
`;
