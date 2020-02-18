import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import User from './User';
import Signout from './SignoutForm';
import './styles/Header.css';

function Header(props) {
    return (
        <User>
            {({ data }) => (
                <div className="wrapper">
                    <Router>
                        <div className="nav">
                            <Link to="/"><div className="menu-item">Home</div></Link>
                            <Link to="/chat"><div className="menu-item">Chat</div></Link>
                            {data ?
                                (
                                    <div>
                                        <Signout />
                                        {data?.me ?
                                            <div className="menu-item">Logged as {data.me.name}</div>
                                            :
                                            null
                                        }
                                    </div>
                                ) :
                                <Link to="/login"><div className="menu-item">Login</div></Link>
                            }
                        </div>
                    </Router>
                </div>
            )
            }
        </User >
    )
}

export default Header;