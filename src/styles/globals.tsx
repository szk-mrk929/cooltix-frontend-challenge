import { Global, css } from '@emotion/react';

export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
      }
    `}
  />
);
