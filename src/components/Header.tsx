import CooltixLogo from '@@components/ui/CooltixLogo';
import SearchInput from '@@components/ui/SearchInput';
import { Container } from '@@styles/globals';
import styled from '@emotion/styled';

/**
 * Styled components
 */

const Navbar = styled.nav`
  padding: 1.5rem;
  background-color: var(--color-gray-1);
`;
const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const NavbarButton = styled.span`
  width: 10rem;
  height: 1rem;
  border-radius: 2rem;
  background-color: var(--color-gray-2, gray);

  @media (max-width: 1024px) {
    display: none;
  }
`;

/**
 * Layout component: Header
 */
export default function Header() {
  return (
    <Navbar>
      <NavbarContainer>
        <CooltixLogo
          css={{
            marginRight: 'auto',
          }}
        />

        <SearchInput
          css={{
            '@media (min-width: 1024px)': {
              minWidth: '40ch',
            },
          }}
        />

        <NavbarButton></NavbarButton>
        <NavbarButton></NavbarButton>
      </NavbarContainer>
    </Navbar>
  );
}
