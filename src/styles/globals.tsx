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
        --color-blue-4-75: #0d7effbf;
        --color-blue-4-50: #0d7eff7f;
        --color-blue-4-25: #0d7eff3f;
        --color-blue-8: #222d39;
        /* Cyan */
        --color-cyan-3: #00ffff;

        --nav-height: 0;
      }

      // Scroll bar
      ::-webkit-scrollbar {
        width: 1rem;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        border: 4px solid transparent;
        border-radius: 0.5rem;
        background-clip: padding-box;
        background-color: rgba(0, 0, 0, 0.3);

        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      html,
      body {
        color: var(--color-blue-8);
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

/**
 * Global style: Text size variants
 */
export const TextSizeStyles = {
  xs: css`
    font-size: 0.75rem;
    line-height: 1.33;
  `,
  small: css`
    font-size: 0.875rem;
    line-height: 1.5;
  `,
  normal: css`
    font-size: 1rem;
    line-height: 1.75;
  `,
  big: css`
    font-size: 1.125rem;
    line-height: 2;
  `,
  xl: css`
    font-size: 1.25rem;
    line-height: 1.3;
  `,
  xxl: css`
    font-size: 2rem;
    line-height: 1.5;
  `,
};

/**
 * Global styled components
 */
export const Container = styled.div`
  @media (min-width: 1100px) {
    width: 100%;
    max-width: 1024px;
    margin-inline: auto;
  }
`;
export const PageContainer = styled(Container)`
  padding-block: 2rem;
  padding-inline: 1rem;
`;
export const LayoutRoot = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
`;
export const PageTitle = styled.h1`
  ${TextSizeStyles.xxl}
  font-weight: 700;
  margin-block: 1rem;
`;
