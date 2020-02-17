import React, { Component } from 'react';
import { Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { client } from '../../utils/Client';


const GET_USER_QUERY = gql`
  query($name: String!) {
    getUser(name: $name) {
      id
      bio
    }
  }
`;

class UserProfile extends Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <Query query={GET_USER_QUERY}>
                    {({ data }, loading, error) => {
                        return (
                            <div>
                                {data ? console.log(data) : null}
                            </div>
                        )
                    }}
                </Query>
            </ApolloProvider>
        );
    }
};

export default UserProfile;