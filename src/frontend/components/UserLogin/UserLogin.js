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
                                <div className='UserLogin-Container'>
                                    <h2>{this.state.name ? `Welcome ${this.state.name}` : ''}</h2>
                                    <h1>User Login Form</h1>
                                    <div className='Input-Container'>
                                        <label htmlFor='email'>Email:</label>
                                        <input
                                            name='email'
                                            className='Email'
                                            type='email'
                                            placeholder='example@example.com'
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div className='Input-Container'>
                                        <label htmlFor='password'>Password:</label>
                                        <input
                                            name='password'
                                            className='Password'
                                            type='password'
                                            placeholder='password'
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <button className='UserLoginButton' type='submit'><h3>Login</h3></button>
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