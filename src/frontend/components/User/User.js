import React from 'react';
import { Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4444/",
    credentials: 'include'
  }),
});

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
    }
  }
`;

const User = props => (
  <ApolloProvider client={client}>
    <Query {...props} query={CURRENT_USER_QUERY}>
      {payload => props.children(payload)}

    </Query>
  </ApolloProvider>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };