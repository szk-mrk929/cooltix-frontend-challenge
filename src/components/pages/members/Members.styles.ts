import Card from '@@components/ui/Card';
import { PageContainer, PageTitle, TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import { LinkProps } from 'next/link';

/**
 * Types
 */
type MemberCardRootProps = Omit<LinkProps, 'as'> & {
  //
};

/**
 * Styled components
 */
export const MembersPageContainer = styled(PageContainer)`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;

  & > ${PageTitle} {
    grid-column: 1 / -1;
  }
`;
export const MembersNavbar = styled(Card)`
  display: flex;
  background-color: var(--color-gray-1);

  & > p {
    margin-right: auto;
    line-height: 1.5;
  }
`;
export const MembersStateFilterContainer = styled(Card)`
  grid-row: 2 / -1;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  position: sticky;
  top: calc(1rem + var(--nav-height, 0));
  bottom: 1rem;
  height: fit-content;
  max-height: calc(100dvh - 4rem - var(--nav-height, 0));
  min-width: 20ch;
  max-width: 30ch;
  background-color: var(--color-gray-1);

  & > header {
    display: flex;
    justify-content: space-between;

    & > h1 {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  & > ul {
    position: relative;
    overflow-y: auto;

    & > li:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
`;
export const MembersGrid = styled.section`
  display: grid;
  gap: inherit;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  align-content: start;

  & > .NoItemFound {
    grid-column: 1 / -1;
    padding: 1rem;
    margin: auto;
    border-radius: 0.25rem;
    background-color: var(--color-blue-4-10);
    border: 1px solid #fff;
    color: #000;
    line-height: 0.5;
    font-size: 1.5rem;
    font-weight: 600;
    backdrop-filter: blur(0.1rem);
    box-shadow: 0 1px 12px 1px var(--color-blue-4);

    & > i {
      font-size: 2rem;
      font-style: normal;
      line-height: 0;
    }
  }
`;
export const MemberCardRoot = styled(Card)<MemberCardRootProps>`
  padding: 2.5rem 1rem;
  text-align: center;
  transition: all 0.25s ease;
  transition-property: transform, background-color, box-shadow, border;

  &:hover {
    background-color: var(--color-blue-4-10);
    backdrop-filter: blur(0.1rem);
    transform: scale(1.05);
    box-shadow: 0 0 10px -1px var(--color-blue-4);
    border-color: #fff;
  }

  figure {
    position: relative;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-inline: auto;
    margin-bottom: 1.5rem;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    ${TextSizeStyles.xl}
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
  small {
    display: block;
    ${TextSizeStyles.xs}
    font-weight: 500;
  }

  &.loading {
    h1 {
      width: 80%;
      height: 1rem;
      margin-inline: auto;
      margin-bottom: 2rem;
      border-radius: 2rem;
      background-color: var(--color-gray-2, gray);
    }
    p {
      width: 60%;
      height: 0.75rem;
      margin-inline: auto;
      border-radius: 2rem;
      background-color: var(--color-gray-2, gray);
    }
    small {
      width: 60%;
      height: 0.75rem;
      margin-inline: auto;
      border-radius: 2rem;
      background-color: var(--color-gray-2, gray);
    }
  }
`;
