import { GraphQLServerURL as uri } from '@@configs/graphql.server';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloCilent = new ApolloClient({
  uri,
  cache: new InMemoryCache({ addTypename: false }),
  connectToDevTools: true,
});

export default apolloCilent;
