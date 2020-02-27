import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/ChatForm.css'

const Join = ({ chatJoin }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className={`joinOuterContainer${chatJoin ? '' : ' hidden'}`} >
            <div className="joinInnerContainer">
                <h1 className="join-heading">Join</h1>
                <div className='chat-join'><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div className='chat-join'><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit"><h3>Sign in</h3></button>
                </Link>
            </div>

        </div>

    )
}

export default Join;