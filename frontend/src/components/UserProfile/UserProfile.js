import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const GET_USER_QUERY = gql`
  query($name: String!) {
    getUser(name: $name) {
        name
        id
        bio
    }
  }
`;

const Wrapper = styled.div`
  color: white;
`;

class UserProfile extends Component {
    render() {
        const name = this.props.match.params.name;
        return (
            <Wrapper>
                <Query query={GET_USER_QUERY} variables={{ name }}>
                    {({ data }, loading, error) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        const userData = data?.getUser;
                        return (
                            data?.getUser ?
                                <div>
                                    <p>Name: {userData.name}</p>
                                    <p>Id: {userData.id}</p>
                                    <p>Bio: {userData.bio}</p>
                                </div>
                                : null
                        )
                    }}
                </Query>
            </Wrapper>
        );
    };

    newMethod() {
        return <div>Loading...</div>;
    }
}

export default withRouter(UserProfile);