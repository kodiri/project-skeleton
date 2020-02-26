import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import email from '../assets/icons/email.svg'
import user from '../assets/icons/user.svg'
import password from '../assets/icons/password.svg'
import './styles/RegistrationForm.css';

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
            password: "",
            confirmPassword: "",
            passwordsMatch: true,
            toProfilePage: false,
            userName: ""
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ userName: this.state.name });
    }

    disableButton() {
        return this.state.password !== this.state.confirmPassword;
    }

    render() {
        if (this.state.toProfilePage === true) {
            return <Redirect to={`/profile/${this.state.userName}`} />
        }
        return (
            <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
                {(signup, { error, loading }) => {
                    return (
                        <form
                            method='post'
                            onSubmit={e => {
                                if(this.state.password === this.state.confirmPassword) {
                                    this.setState({ passwordsMatch: true });
                                    e.preventDefault();
                                    signup();
                                    this.setState({
                                        name: "",
                                        email: "",
                                        password: "",
                                        confirmPassword: "",
                                        toProfilePage: true
                                    }) } else {
                                        e.preventDefault();
                                        this.setState({ passwordsMatch: false });
                                    }
                            }}>
                            <div className='UserRegistrationOuterContainer'>
                                <div className='UserRegistrationInnerContainer'>
                                    <h1 className='heading'>Sign up</h1>
                                    <div className='register user'>
                                        <img src={user} alt='email icon' />
                                        <input
                                            className='register-input username'
                                            type='text'
                                            placeholder='username'
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div className='register email mt-20'>
                                        <img src={email} alt='email icon' />
                                        <input
                                            name='email'
                                            className='register-input email'
                                            type='email'
                                            placeholder='example@example.com'
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div  className='register password mt-20'>
                                        <img src={password} alt='email icon' />
                                        <input
                                            name='password'
                                            className='register-input password'
                                            type='password'
                                            placeholder='password'
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div className='register confirm-password mt-20'>
                                        <img src={password} alt='email icon' />
                                        <input
                                            name='confirmPassword'
                                            className='register-input confirm-password'
                                            type='password'
                                            placeholder='retype password'
                                            value={this.state.confirmPassword}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <p className={`passwords-match${this.state.passwordsMatch ? '' : ' passwords-no-match'}`}>*passwords do not match</p>
                                    <button 
                                        className='button mt-20' 
                                        type='submit' 
                                    >
                                        <h3>Register</h3>
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

export default UserRegistration;