import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Mutation, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import './UserLogin.css';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4444/",
        credentials: 'include'
    }),
});

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

class UserLogin extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        return (
            <ApolloProvider client={client}>
                <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
                    {(signin, { error, loading }) => {
                        return (
                            <form
                                method='post'
                                onSubmit={async e => {
                                    e.preventDefault();
                                    const user = await signin();
                                    const { name } = user.data.signin;
                                    this.setState({
                                        name,
                                        email: "",
                                        password: ""
                                    })
                                }}>
                                <div className='UserLoginOuterContainer'>
                                    <div className='UserLoginInnerContainer'>
                                        <h2>{this.state.name ? `Welcome ${this.state.name}` : ''}</h2>
                                        <h1 className='heading'>User Login Form</h1>
                                        <div>
                                            <input
                                                name='email'
                                                className='EmailInput'
                                                type='email'
                                                placeholder='example@example.com'
                                                value={this.state.email}
                                                onChange={this.saveToState}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name='password'
                                                className='PasswordInput mt-20'
                                                type='password'
                                                placeholder='password'
                                                value={this.state.password}
                                                onChange={this.saveToState}
                                                required 
                                            />
                                        </div>
                                        <button className='button mt-20' type='submit'>Login</button>
                                    </div>
                                </div>
                            </form>
                        )
                    }}
                </Mutation>
            </ApolloProvider>
        );
    }
};

export default UserLogin;