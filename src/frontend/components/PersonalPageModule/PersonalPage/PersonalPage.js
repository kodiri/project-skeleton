import React, { useState } from 'react';
import './PersonalPage.css';
import UserName from '../UserName/UserName'
import CoverPicture from '../CoverPicture/CoverPicture'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
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
    
function ActionBar() {
    return (
        <div className='actionBar'>
            <button className='personalPageButton'>New Post</button>
            <button className='personalPageButton'>Notifications</button>
            <button className='personalPageButton'>Search</button>
            <button className='personalPageButton'>Menu</button>
        </div>
    );
}
