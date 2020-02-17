import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
require('dotenv').config();

console.log(process.env.NODE_ENV);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.SERVER_ENDPOINT,
        credentials: 'include'
    }),
});