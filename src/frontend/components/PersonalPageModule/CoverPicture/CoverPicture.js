import React from 'react';
import './CoverPicture.css';
import GetUser from '../../UserList/GetUser'

export default function CoverPicture({ userName }) {
    let coverPicture = GetUser().find(user => user.userName === userName).coverPicture;

    return (
        <div className='coverPicture'>
            <img id='coverPicture' src={coverPicture} alt='' />
        </div>
    );
}