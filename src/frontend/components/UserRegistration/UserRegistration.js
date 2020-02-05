import React from 'react'
import './UserRegistration.css'

export default function UserRegistration() {
    return (
        <div className='UserRegistration-Container'>
            <h1>User Registration Form</h1>
            <div className='Input-Container'>
                <label>Username: </label>
                <input className='UserName' type='text' placeholder='example01' required />
            </div>
            <div className='Input-Container'>
                <label>Email: </label>
                <input className='Email' type='email' placeholder='andrea.octavian@example.com' required />
            </div>
            <div className='Input-Container'>
                <label>Password: </label>
                <input className='Password' type='password' placeholder='example01' required />
            </div>
            <button type='submit'><h3>Register</h3></button>
        </div>
    );
}