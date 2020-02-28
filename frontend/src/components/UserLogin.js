import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect, Link } from "react-router-dom";
import gql from 'graphql-tag';
import email from '../assets/icons/email.svg'
import password from '../assets/icons/password.svg'
import { userName } from './RegistrationForm'
import './styles/UserLogin.css';

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
            return <Redirect to={`/profile/dumbo`} />
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
                                console.log(signin);
                                this.setState({
                                    toProfilePage: true
                                })
                            }}>
                            <div className='UserLoginOuterContainer'>
                                <div className='UserLoginInnerContainer'>
                                    <h1 className='heading'>Log in</h1>
                                    <div className='login email'>
                                        <img src={email} alt='email icon' />
                                        <input
                                            name='email'
                                            className='login-input email'
                                            type='email'
                                            placeholder='example@example.com'
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                            required
                                        />
                                    </div>
                                    <div className='login password mt-20'>
                                        <img src={password} alt='email icon' />
                                        <input
                                            name='password'
                                            className='login-input password'
                                            type='password'
                                            placeholder='password'
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                            required
                                        />
                                    </div>
                                    <button className='button mt-20' type='submit'>
                                        <h3>Log in</h3>
                                    </button>
                                    <Link to="/">
                                        <h5>Back</h5>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </Mutation>
        );
    }
};

export default UserLogin;