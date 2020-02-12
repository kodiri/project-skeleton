import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Mutation, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import './Wall.css';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4444/",
        credentials: 'include'
    }),
});

const SUBMIT_MUTATION = gql`
    mutation SUBMIT_MUTATION($text: String!, $likes: Float!, $owner: User!) {
        postsubmit(text: $text, likes: $likes, owner: $owner) {
            text
            likes
            owner
        }
    }
`;

class Wall extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                {/* <Mutation mutation={SUBMIT_MUTATION} variables={this.state}>
                    {(postsubmit, { error, loading }) => {
                        return (
                            <div className='Wall'>
                                <header>
                                    <form
                                        className='userWall'
                                        method='post'
                                        onSubmit={e => {
                                            e.preventDefault();
                                            postsubmit();
                                        }}>
                                        <input type='text' placeholder='Enter Text' />
                                        <input type='hidden' name='likes' value="0" />
                                        <button
                                            style={{ backgroundColor: 'rgb(202,156,24)', height: '50px', width: '80px', color: 'white' }}
                                            type='submit'>Post
                                            </button>
                                    </form>
                                </header>
                            </div>
                        );
                    }}
                </Mutation> */}
            </ApolloProvider>
        )
    }
}

export default Wall;