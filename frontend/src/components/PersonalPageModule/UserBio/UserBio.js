import React from 'react'
import './UserBio.css'

export default function UserBio({ user }) {

    let userBio = user.userBio;
    return (
        <div>
            {userBio}
        </div>
    );
}
