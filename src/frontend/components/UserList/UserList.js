import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

class UserList extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const cache = new InMemoryCache();
        const link = new HttpLink({
            uri: "http://localhost:4444/"
        });

        const client = new ApolloClient({
            cache,
            link
        });
        client
            .query({
                query: gql`
            query getAllUsers {
                users {
                    id
                    name
                }   
            }
            `
            })
            .then(result => {
                this.setState({ users: result.data.users });
            }
            );
    }


    render() {

        return (
            <div>
                {this.state.users.map(user => <p key={user.name}>{user.name}</p>)}
            </div>
        );
    }
}

export default UserList;