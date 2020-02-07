import React from 'react';
import './Wall.css'

export default class Wall extends React.Component {
    render() {
        return(
            <div className='Wall'>
            <header>
                <form className='userWall'>
                    <input type='text' placeholder='Enter Text' />
                    <button 
                    style={{backgroundColor:'rgb(202,156,24)', height: '50px', width: '80px', color: 'white'}} 
                    type='submit'>Post</button>
                </form>
            </header>
            </div>
        );
    }
}