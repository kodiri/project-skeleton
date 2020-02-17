import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
require('dotenv').config();

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: `https://project-skeleton-prod.herokuapp.com/`,
        // uri: `http://localhost:4000/`,
        credentials: 'include'
    }),
});