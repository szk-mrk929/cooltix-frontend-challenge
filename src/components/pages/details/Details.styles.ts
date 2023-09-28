import { PageContainer } from '@@styles/globals';
import styled from '@emotion/styled';

/**
 * Styled components
 */
export const MemberDetailsPageContainer = styled(PageContainer)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  & > figure {
    flex: 0 0 30%;
    z-index: 2;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow:
      0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.66) inset,
      0 4px 16px rgba(0, 0, 0, 0.12);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(0.5rem);

    & > i {
      display: inline-block;
      position: absolute;
      left: 0rem;
      top: 1rem;
      font-style: normal;
      font-size: 4.5rem;
      line-height: 0;
      margin: -1.25rem;
      transform: rotateZ(-6deg);
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

    & > h1 {
      position: relative;
      top: -1rem;
      left: -1rem;
      width: fit-content;
      font-size: 3rem;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow:
        0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
        0 1px 0 0 rgba(255, 255, 255, 0.66) inset,
        0 4px 16px rgba(0, 0, 0, 0.12);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(0.5rem);
      transform: rotateZ(-12deg);
    }

    & > a {
      display: flex;
      align-items: center;
      gap: 0.25em;
      font-size: 1.25rem;
      line-height: 1.5;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow:
        0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
        0 1px 0 0 rgba(255, 255, 255, 0.66) inset,
        0 4px 16px rgba(0, 0, 0, 0.12);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(0.5rem);
      position: relative;
      left: -1.25rem;
      width: fit-content;

      & > i {
        display: block;
        font-style: normal;
        font-size: 1.75em;
      }
      & > b {
        display: block;
        white-space: pre-line;
      }

      &:nth-of-type(1) {
        top: 0.25rem;
        transform: rotateZ(-5deg);
      }
      &:nth-of-type(2) {
        top: 0.75rem;
        transform: rotateZ(3deg);
      }
      &:nth-of-type(3) {
        top: 1.5rem;
        transform: rotateZ(12deg);
      }
    }
  }
`;

// box-shadow:
// 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
// 0 1px 0 0 rgba(255, 255, 255, 0.66) inset,
// 0 4px 16px rgba(0, 0, 0, 0.12);
// background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
// backdrop-filter: blur(30px);
// border-radius: 20px;
