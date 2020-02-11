import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Mutation, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import './UserRegistration.css';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4444/",
        credentials: 'include'
    }),
});

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
        signup(email: $email, name: $name, password: $password) {
            id
            email
            name
        }
    }
`;

class UserRegistration extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
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
                <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
                    {(signup, { error, loading }) => {
                        return (
                            <form
                                method='post'
                                onSubmit={e => {
                                    e.preventDefault();
                                    signup();
                                    this.setState({
                                        name: "",
                                        email: "",
                                        password: ""
                                    })
                                }}>
                                <div className='UserRegistration-Container'>
                                    <h1>User Registration Form</h1>
                                    <div className='Input-Container'>
                                        <label htmlFor='userName'>Username:</label>
                                        <input
                                            className='UserName'
                                            type='text'
                                            placeholder='username'
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
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
                                    <button className='UserRegistrationButton' type='submit'><h3>Register</h3></button>
                                </div>
                            </form>
                        )
                    }}
                </Mutation>
            </ApolloProvider>
        );
    }
};

export default UserRegistration;