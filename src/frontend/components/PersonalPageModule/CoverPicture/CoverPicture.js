import React from 'react';
import './CoverPicture.css';
import GetUser from '../../UserList/GetUser'

export default function CoverPicture({ user }) {
    let coverPicture = user.coverPicture;

    return (
        <div className='coverPicture'>
            <div className='coverPictureContainer'>
                <img id='coverPicture' src={coverPicture} alt='' />
            </div>
        </div>
    );
}