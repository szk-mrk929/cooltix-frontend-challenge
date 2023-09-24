import Footer from '@@components/Footer';
import Header from '@@components/Header';
import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

/**
 * Types
 */
type LayoutProps = ComponentProps<'div'>;

const LayoutRoot = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
`;

/**
 * Component: Layout
 */
function Layout({ className, children, ...props }: LayoutProps) {
  return (
    <LayoutRoot className={className} {...props}>
      <Header />
      {children}
      <Footer />
    </LayoutRoot>
  );
}

export default Layout;
