import React from 'react';
import './ProfilePicture.css';
import GetUser from '../../UserList/GetUser'

export default function ProfilePicture({ userName }) {
    let profilePicture = GetUser().find(user => user.userName === userName).profilePicture;

    return (
        <div className='profilePicture'>
            <img id='profilePicture' src={profilePicture} alt='' />
        </div>
    );
}
