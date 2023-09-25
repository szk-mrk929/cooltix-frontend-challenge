import { quicksand } from '@@libs/fonts';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = (
  <Global
    styles={css`
      :root {
        /* Gray */
        --color-gray-1: #f5f5f5;
        --color-gray-2: #d8d8d8;
        --color-gray-3: #b0b0b0;
        --color-gray-4: #9b9b9b;
        --color-gray-5: #4a4a4a;
        --color-gray-6: #323232;
        --color-gray-9: #1d1d1d;
        /* Blue */
        --color-blue-3: #00a4ff;
        --color-blue-4: #0d7fff;
        /* Cyan */
        --color-cyan-3: #00ffff;
      }

      html,
      body {
        margin: 0;
        font-family: ${quicksand.style.fontFamily}, Helvetica, Arial, sans-serif;
      }

      * {
        margin: 0;
        padding: 0;
      }

      ul,
      li {
        list-style: none;
      }

      a {
        color: unset;
        text-decoration: none;
      }
    `}
  />
);

export const Container = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1024px;
    margin-inline: auto;
  }
`;

export const TextSizeStyles = {
  small: css`
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  normal: css`
    font-size: 1rem;
    line-height: 1.75rem;
  `,
  big: css`
    font-size: 1.125rem;
    line-height: 2rem;
  `,
};
