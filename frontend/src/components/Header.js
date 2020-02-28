import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import User from './User';
import Signout from './SignoutForm';
import './styles/Header.css';

function Header({ menuVisible, toggleMenuVisible, toggleChatJoin }) {
    return (
        <User>
            {({ data }) => (
                <div className={`header-wrapper${menuVisible ? '' : ' hidden'}`}>
                    {/* <Router> */}
                        <div className="nav">
                            <Link to="/">
                                <div 
                                    className="menu-item"
                                    onClick={toggleMenuVisible}>
                                    <h3>Home</h3>
                                </div>
                            </Link>
                            <div 
                                className="menu-item"
                                onClick={toggleChatJoin}>
                                <h3>Chat</h3>
                            </div>
                            {data ?
                                (
                                    <div>
                                        <Signout data={data} />
                                    </div>
                                ) :
                                <Link to="/login">
                                    <div 
                                        className="menu-item last"
                                        onClick={toggleMenuVisible}>
                                        <h3>Login</h3>
                                    </div>
                                </Link>
                            }
                        </div>
                    {/* </Router> */}
                </div>
            )
            }
        </User >
    )
}

export default Header;