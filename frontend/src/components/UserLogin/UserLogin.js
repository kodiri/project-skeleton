import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from "react-router-dom";
import gql from 'graphql-tag';
import './UserLogin.css';
import { endpoint, prodEndpoint } from '../../config';

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
            password: "",
            toProfilePage: false
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.toProfilePage === true) {
            return <Redirect to='/PersonalPage' />
        }
        return (
            <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
                {(signin, { error, loading }) => {
                    return (
                        <form
                            method='post'
                            onSubmit={async e => {
                                e.preventDefault();
                                await signin();
                                this.setState({
                                    toProfilePage: true
                                })
                            }}>
                            <div className='UserLoginOuterContainer'>
                                <div className='UserLoginInnerContainer'>
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
                                <button className='UserLoginButton' type='submit'><h3>Login</h3></button>
                            </div>
                        </form>
                    )
                }}
            </Mutation>
        );
    }
};

export default UserLogin;