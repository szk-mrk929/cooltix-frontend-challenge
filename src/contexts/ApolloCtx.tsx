import apolloCilent from '@@libs/apollo.client';
import { ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

/**
 * Utility component: ApolloCtx
 */
const ApolloCtx = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={apolloCilent}>{children}</ApolloProvider>;
};
export default ApolloCtx;
