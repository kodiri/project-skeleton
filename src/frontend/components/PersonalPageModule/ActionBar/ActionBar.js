import React from 'react';
import './ActionBar.css';

export default function ActionBar() {
    return (
        <div className='actionBar'>
            <button className='personalPageButton'>
                <img src={require('../../../assets/icons/newpost.svg')} alt='newpost' />
            </button>
            <button className='personalPageButton'>
                <img src={require('../../../assets/icons/notification.svg')} alt='notification' />
            </button>
            <button className='personalPageButton'>
                <img src={require('../../../assets/icons/search.svg')} alt='search' />
            </button>
            <button className='personalPageButton'>
                <img src={require('../../../assets/icons/menu.svg')} alt='menu' />
            </button>
        </div>
    );
}