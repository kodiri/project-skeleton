import React, { useState } from 'react';
import './PersonalPage.css';
import UserName from '../UserName/UserName'
import CoverPicture from '../CoverPicture/CoverPicture'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import ActionBar from '../ActionBar/ActionBar'
import GetUser from '../../UserList/GetUser'

export default function PersonalPage(){
    let [userName, setUserName] = useState(GetUser().find(user => user.userName).userName);
    
    return (
        <div className='PersonalPage'>
            <UserName userName={userName} />
            <CoverPicture userName={userName} />
            <ProfilePicture userName={userName} />
            <ActionBar />
        </div>
    );
}
