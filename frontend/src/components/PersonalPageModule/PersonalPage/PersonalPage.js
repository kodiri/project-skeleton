import React, { useState } from 'react';
import './PersonalPage.css';
import UserName from '../UserName/UserName';
import CoverPicture from '../CoverPicture/CoverPicture';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import ActionBar from '../ActionBar/ActionBar';
import GetUser from '../../UserList/GetUser';

export default function PersonalPage(){
    let [user, setUser] = useState(GetUser().find(user => user));
    
    return (
        <div className='PersonalPage'>
            <div className='PersonalDetails'>
                <CoverPicture user={user} />
                <ProfilePicture user={user} />
                <UserName user={user} />
            </div>
            <div className='transparentDiv'></div>
            <ActionBar />
        </div>
    );
}
