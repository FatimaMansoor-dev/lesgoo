import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://152.42.153.30/graphql',
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    // uri: process.env.GRAPHQL_URL,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

export default client;
