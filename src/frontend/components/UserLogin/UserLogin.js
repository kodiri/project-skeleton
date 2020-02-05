import React from 'react'
import './UserLogin.css'

export default function UserLogin() {
    return (
        <div className='UserLogin-Container'>
            <h1>User Login</h1>
            <div className='Input-Container'>
                <label>Email: </label>
                <input className='Email' type='email' placeholder='andrea.octavian@example.com' required />
            </div>
            <div className='Input-Container'>
                <label>Password: </label>
                <input className='Password' type='password' placeholder='example01' required />
            </div>
            <button type='submit'><h3>Login</h3></button>
        </div>
    );
}