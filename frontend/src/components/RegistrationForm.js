import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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
            password: ""
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
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
                            <div className='UserRegistrationOuterContainer'>
                                <div className='UserRegistrationInnerContainer'>
                                    <h1 className='heading'>User Registration Form</h1>
                                    <div>
                                        <input
                                            className='UserNameInput'
                                            type='text'
                                            placeholder='username'
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            name='email'
                                            className='EmailInput'
                                            type='email'
                                            placeholder='example@example.com'
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <div className='input-container'>
                                        <label className='PasswordLabel' htmlFor='password'>Password:</label>
                                        <input
                                            name='password'
                                            className='PasswordInput'
                                            type='password'
                                            placeholder='password'
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                            required />
                                    </div>
                                    <button className='button mt-20' type='submit'>Register</button>
                                </div>
                                <div className='input-container'>
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
                                <div className='input-container'>
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
                                <button className='registration-button' type='submit'><h3>Register</h3></button>
                            </div>
                        </form>
                    )
                }}
            </Mutation>
        );
    }
};

export default UserRegistration;