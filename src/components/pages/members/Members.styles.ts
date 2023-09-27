import Card from '@@components/ui/Card';
import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';

/**
 * Styled components
 */
export const MembersNavbar = styled(Card)`
  display: flex;
`;
export const MembersStateFilterContainer = styled(Card)`
  grid-row: 2 / -1;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  position: sticky;
  inset-block: 1rem;
  height: fit-content;
  max-height: calc(100dvh - 4rem);
  min-width: 15ch;
  max-width: 25ch;

  & > header {
    display: flex;
    justify-content: space-between;

    & > h3 {
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
`;
export const MemberCardRoot = styled(Card)`
  padding: 2.5rem 1rem;
  text-align: center;

  figure {
    position: relative;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: gray;
    margin-inline: auto;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  h3 {
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
`;
