import React from 'react';
import UserBio from '../UserBio/UserBio'
import './ProfilePicture.css';

export default function ProfilePicture({ user }) {
    let profilePicture = user.profilePicture;

    return (
        <div className='profilePictureAndBio'>
            <div className='profilePicture'>
                <img id='profilePicture' src={profilePicture} alt='' />
            </div>
            <div className='userBio'>
                <UserBio user={user} />
            </div>
        </div>
    );
}
