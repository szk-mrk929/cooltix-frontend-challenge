import { quicksand } from '@@libs/fonts';
import { Global, css } from '@emotion/react';

export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        font-family: ${quicksand.style.fontFamily}, Helvetica, Arial, sans-serif;
      }

      :root {
        --color-gray-1: #f5f5f5;
        --color-gray-2: #d8d8d8;
      }
    `}
  />
);
