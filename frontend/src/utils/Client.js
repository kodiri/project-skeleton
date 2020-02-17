import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { devEndpoint, prodEndpoint } from '../config.js';

console.log(process.env.NODE_ENV);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.NODE_ENV === "development" ? devEndpoint : prodEndpoint,
        credentials: 'include'
    }),
});