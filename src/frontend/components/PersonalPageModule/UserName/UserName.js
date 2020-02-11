import React from 'react';
import './UserName.css';

export default function UserName({ userName }) {

    return (
        <div className='userName'>
            <h3>
                {userName}
            </h3>
        </div>
    );
}
