import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { endpoint, prodEndpoint } from '../config';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: prodEndpoint,
        credentials: 'include'
    }),
});