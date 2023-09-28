import CooltixLogo from '@@components/ui/CooltixLogo';
import { InputWrapper } from '@@components/ui/Input';
import SearchInput from '@@components/ui/SearchInput';
import useMembers from '@@contexts/MembersCtx';
import { Container } from '@@styles/globals';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

/**
 * Styled components
 */
const Navbar = styled.nav<{ active?: boolean }>`
  padding: 1rem 1.5rem;
  background-color: var(--color-gray-1);
  border-bottom: 1px solid var(--color-gray-3);
  transition: all 0.5s ease;

  ${({ active }) =>
    active &&
    `
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`;
const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    margin-right: auto;
  }

  & > ${InputWrapper} {
    min-width: 30ch;
  }
`;
// const NavbarButton = styled.span`
//   width: 10rem;
//   height: 1rem;
//   border-radius: 2rem;
//   background-color: var(--color-gray-2, gray);

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

/**
 * Layout component: Header
 */
export default function Header() {
  const { pathname } = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const { filter, loading, filterNameChange } = useMembers();

  useEffect(() => {
    if (!navRef.current) return;
    const resize_ob = new ResizeObserver(([{ target }]) =>
      document.body.style.setProperty(
        '--nav-height', //
        (filter.name.length ? target.realSize.height : 0) + 'px'
      )
    );
    resize_ob.observe(navRef.current);
    return () => void resize_ob.disconnect();
  }, [filter.name.length]);

  return (
    <Navbar ref={navRef} active={!!filter.name.length}>
      <NavbarContainer>
        <Link href="/" title="(members/home/index)page">
          <CooltixLogo />
        </Link>
        {pathname === '/' && <SearchInput value={filter.name} onChange={(e) => filterNameChange(e.target.value)} disabled={loading} />}
        {/* <NavbarButton></NavbarButton> */}
        {/* <NavbarButton></NavbarButton> */}
      </NavbarContainer>
    </Navbar>
  );
}
