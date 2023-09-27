import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { MembersProvider } from '@@contexts/MembersCtx';
import { LayoutRoot } from '@@styles/globals';
import type { ComponentProps } from 'react';

/**
 * Types
 */
type LayoutProps = ComponentProps<'div'>;

/**
 * Component: Layout
 */
export default function Layout({ className, children, ...props }: LayoutProps) {
  return (
    <MembersProvider>
      <LayoutRoot className={className} {...props}>
        <Header />
        {children}
        <Footer />
      </LayoutRoot>
    </MembersProvider>
  );
}
