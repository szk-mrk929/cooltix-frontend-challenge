import { PageContainer } from '@@styles/globals';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

/**
 * Styled components
 */
const GlassmorphismCard = css`
  box-shadow:
    0 0.5px 0 1px rgba(255, 255, 255, 0.25) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.75) inset,
    0 4px 16px rgba(0, 0, 0, 0.25);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(0.4rem);
`;
export const MemberDetailsPageContainer = styled(PageContainer)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  & > figure {
    flex: 0 0 30%;
    z-index: 2;
    padding: 1.75rem;
    border-radius: 0.75rem;
    ${GlassmorphismCard}

    & > i {
      display: inline-block;
      position: absolute;
      font-style: normal;
      font-size: 4.5rem;
      line-height: 0;
      margin: -1.25rem;

      &:nth-last-of-type(1) {
        left: 1.5rem;
        top: 1rem;
        transform: rotateZ(-6deg);
      }
      &:nth-last-of-type(2) {
        right: 2rem;
        bottom: 1.5rem;
        transform: rotateZ(-6deg);
      }
    }

    & > img {
      border-radius: 0.5rem;
      transform: rotateZ(-5deg);
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
    }
  }

  & > section {
    flex: 0 0 auto;
    display: block;

    & > :is(h1, a) {
      width: fit-content;
      position: relative;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      ${GlassmorphismCard}
      line-height: 1.25;
      left: -1.125rem;
    }

    & > h1 {
      top: -1rem;
      font-size: 3rem;
      transform: rotateZ(-9deg);
    }

    & > a {
      display: flex;
      align-items: center;
      gap: 0.25em;
      font-size: 1.25rem;

      & > i {
        display: block;
        font-style: normal;
        font-size: 2em;
      }
      & > b {
        display: block;
        white-space: pre-line;
      }

      &:nth-of-type(1) {
        top: -0.5rem;
        transform: rotateZ(-2.5deg);
      }
      &:nth-of-type(2) {
        top: 0.25rem;
        transform: rotateZ(3deg);
      }
      &:nth-of-type(3) {
        top: 0.75rem;
        left: -1.75rem;
        transform: rotateZ(7deg);
      }
    }
  }
`;
