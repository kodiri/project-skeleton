import React from 'react';
import './ActionBar.css';

export default function ActionBar() {
    return (
        <div className='actionBar'>
            <button className='personalPageButton'>New Post</button>
            <button className='personalPageButton'>Notifications</button>
            <button className='personalPageButton'>Search</button>
            <button className='personalPageButton'>Menu</button>
        </div>
    );
}