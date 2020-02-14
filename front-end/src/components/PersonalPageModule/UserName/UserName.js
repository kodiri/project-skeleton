import React from 'react';
import './UserName.css';

export default function UserName({ user }) {
    let userName = user.userName;
    return (
        <div className='userName'>
            <div>
                {userName}
            </div>
        </div>
    );
}
